// lib/email/brevo.ts
import * as Brevo from "@getbrevo/brevo";
import { EmailProvider } from "./provider";
import { AppError } from "@/lib/errors/AppError"; 

const api = new Brevo.TransactionalEmailsApi();
api.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY!
);

export class BrevoProvider implements EmailProvider {
  async sendInterestNotification(interestedUserEmail: string): Promise<void> {
    const sender = {
      email: "anthonybenavides.edu@gmail.com", 
      name: "ZK Latitud Cero", 
    };

    const receivers = [
      {
        email: "hello@zkcero.xyz", // Reemplaza esto con el correo que recibirá la notificación
      },
    ];

    try {
      await api.sendTransacEmail({
        sender,
        to: receivers,
        subject: "Nuevo Interesado en el Curso ZK",
        htmlContent: `
          <h1>¡Nuevo Interesado!</h1>
          <p>La persona con el correo <strong>${interestedUserEmail}</strong> ha solicitado ser notificada para el próximo curso.</p>
        `,
      });
      console.log("Notification email sent successfully via Brevo.");
    } catch (error: any) {
      // Mantenemos el log detallado para nuestra depuración interna
      console.error("Failed to send email via Brevo. Full error details:", JSON.stringify(error, null, 2));

      // 👇 ¡AQUÍ ESTÁ EL CAMBIO! 👇
      // En lugar de un error genérico, lanzamos nuestro error estructurado.
      // La API Route se encargará de traducir esto en la respuesta HTTP correcta.
      throw new AppError('BREVO_API_ERROR');
    }
  }
}