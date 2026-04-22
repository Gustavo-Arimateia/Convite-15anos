import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body.pin !== "0000") {
      return NextResponse.json(
        { success: false, message: "PIN inválido." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Confirmação recebida com sucesso.",
      data: body,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}