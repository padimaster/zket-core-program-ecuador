// app/email_api/notify/route.ts

import { BrevoProvider } from "@/lib/email/brevo";
import { NextResponse } from "next/server";

/**
 * API endpoint to handle notification signups.
 * It receives an email, uses the BrevoProvider to send a notification,
 * and returns a success or error response.
 */
export async function POST(request: Request) {
  try {
    // 1. Obtiene el email que el usuario escribió en el formulario
    const { email } = await request.json();

    // Valida que el email exista
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // 2. Crea una instancia de tu "motor" de correos Brevo
    const emailProvider = new BrevoProvider(); 
    
    // 3. Usa el motor para enviar la notificación
    await emailProvider.sendInterestNotification(email);

    // 4. Responde al frontend que todo salió bien
    return NextResponse.json({ message: "Successfully subscribed!" }, { status: 200 });
    
  } catch (error) {
    // Si algo falla dentro de BrevoProvider, el error se captura aquí
    console.error("API route error:", error);
    return NextResponse.json({ error: "An internal error occurred" }, { status: 500 });
  }
}