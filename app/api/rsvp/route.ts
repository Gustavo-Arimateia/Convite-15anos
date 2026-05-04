import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { AttendanceStatus, FamilyMember } from "@/types/rsvp";

const validStatuses: AttendanceStatus[] = [
  "pendente",
  "confirmado",
  "nao_vai",
];

function normalizePin(value: unknown) {
  return String(value ?? "")
    .trim()
    .replace(/\D/g, "")
    .padStart(4, "0")
    .slice(0, 4);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const pin = normalizePin(body.pin);
    const familyMembers = body.familyMembers as FamilyMember[];

    if (!/^\d{4}$/.test(pin)) {
      return NextResponse.json(
        {
          success: false,
          message: "Informe um PIN válido com 4 dígitos.",
        },
        { status: 400 }
      );
    }

    if (!Array.isArray(familyMembers) || familyMembers.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Nenhum convidado foi enviado para confirmação.",
        },
        { status: 400 }
      );
    }

    const hasInvalidMember = familyMembers.some(
      (member) =>
        !member.id ||
        !member.status ||
        !validStatuses.includes(member.status)
    );

    if (hasInvalidMember) {
      return NextResponse.json(
        {
          success: false,
          message: "Existe convidado com confirmação inválida.",
        },
        { status: 400 }
      );
    }

    const hasPendingMember = familyMembers.some(
      (member) => member.status === "pendente"
    );

    if (hasPendingMember) {
      return NextResponse.json(
        {
          success: false,
          message: "Confirme se cada pessoa vai ou não vai comparecer.",
        },
        { status: 400 }
      );
    }

    const confirmacoes = familyMembers.map((member) => ({
      convidado_id: member.id,
      status_presenca: member.status,
    }));

    const { data, error } = await supabaseAdmin.rpc(
      "salvar_confirmacoes_presenca",
      {
        p_pin: pin,
        p_confirmacoes: confirmacoes,
      }
    );

    if (error) {
      console.error("Erro ao salvar confirmação:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Não foi possível salvar a confirmação.",
        },
        { status: 500 }
      );
    }

    if (!data || data.length !== familyMembers.length) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Não foi possível confirmar todos os convidados. Verifique o PIN e tente novamente.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Confirmação enviada com sucesso.",
      confirmedCount: data.filter(
        (item: { status_presenca: string }) =>
          item.status_presenca === "confirmado"
      ).length,
      notAttendingCount: data.filter(
        (item: { status_presenca: string }) =>
          item.status_presenca === "nao_vai"
      ).length,
    });
  } catch (error) {
    console.error("Erro inesperado ao salvar confirmação:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro inesperado ao enviar confirmação.",
      },
      { status: 500 }
    );
  }
}