// lib/email/brevo.ts
import * as Brevo from "@getbrevo/brevo";
import { EmailProvider } from "./provider";

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
        email: "correoelectronicoele@gmail.com", // Reemplaza esto
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
    } catch (error) {
      console.error("Failed to send email via Brevo:", error);
      throw new Error("Could not send notification email.");
    }
  }
}