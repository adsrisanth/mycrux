export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: ContactSubject;
  message: string;
  createdAt: Date;
  status: ContactStatus;
  id?: string;
}

export type ContactSubject = 
  | 'requesting-city'
  | 'general'
  | 'support'
  | 'partnership'
  | 'feedback'
  | 'other';

export type ContactStatus = 
  | 'new'
  | 'in-progress'
  | 'resolved'
  | 'closed';

export interface ContactFormRequest {
  firstName: string;
  lastName: string;
  email: string;
  subject: ContactSubject;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  id?: string;
}
