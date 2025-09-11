// lib/email/provider.ts
// Defines the interface for an email provider to send notifications.
export interface EmailProvider {
  sendInterestNotification(interestedUserEmail: string): Promise<void>;
}