// lib/email/brevo.ts
import * as Brevo from "@getbrevo/brevo";
import { EmailProvider } from "./provider";
import { AppError } from "@/lib/errors/AppError";

// --- ENVIRONMENT VARIABLE VALIDATION ---
// Ensure all required keys are defined at startup.
// If any are missing, the app will fail to start with a clear error.
const brevoApiKey = process.env.BREVO_API_KEY;
const senderEmail = process.env.BREVO_SENDER_EMAIL;
const senderName = process.env.BREVO_SENDER_NAME;
const recipientEmail = process.env.BREVO_NOTIFICATION_RECIPIENT;

if (!brevoApiKey || !senderEmail || !senderName || !recipientEmail) {
  throw new Error("Missing required Brevo environment variables.");
}

// --- API CONFIGURATION ---
const api = new Brevo.TransactionalEmailsApi();
api.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, brevoApiKey);


export class BrevoProvider implements EmailProvider {
  async sendInterestNotification(interestedUserEmail: string): Promise<void> {
  //  Now using environment variables instead of hardcoded data 
    const sender = {
      email: senderEmail,
      name: senderName,
    };

    const receivers = [
      {
        email: recipientEmail!,
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
      console.error("Failed to send email via Brevo. Full error details:", JSON.stringify(error, null, 2));
      throw new AppError('BREVO_API_ERROR');
    }
  }
}