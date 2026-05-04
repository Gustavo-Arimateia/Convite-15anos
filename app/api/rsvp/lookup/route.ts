import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { FamilyMember } from "@/types/rsvp";

type SupabaseGuest = {
  convidado_id: string;
  nome: string;
  status_presenca: "pendente" | "confirmado" | "nao_vai";
};

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

    if (!/^\d{4}$/.test(pin)) {
      return NextResponse.json(
        {
          success: false,
          message: "Informe um PIN válido com 4 dígitos.",
        },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin.rpc(
      "buscar_convidados_por_pin",
      {
        p_pin: pin,
      }
    );

    if (error) {
      console.error("Erro ao buscar convite:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Não foi possível buscar o convite.",
        },
        { status: 500 }
      );
    }

    if (!data || data.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Convite não encontrado. Verifique o PIN informado.",
        },
        { status: 404 }
      );
    }

    const familyMembers: FamilyMember[] = (data as SupabaseGuest[]).map(
      (guest) => ({
        id: guest.convidado_id,
        name: guest.nome,
        status: guest.status_presenca,
      })
    );

    return NextResponse.json({
      success: true,
      pin,
      familyMembers,
    });
  } catch (error) {
    console.error("Erro inesperado ao buscar convite:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro inesperado ao buscar convite.",
      },
      { status: 500 }
    );
  }
}