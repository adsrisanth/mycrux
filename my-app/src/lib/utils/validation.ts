export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateContactForm(data: {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}): ValidationResult {
  const errors: string[] = [];

  // Required field validation
  if (!data.firstName?.trim()) {
    errors.push('First name is required');
  }

  if (!data.lastName?.trim()) {
    errors.push('Last name is required');
  }

  if (!data.email?.trim()) {
    errors.push('Email is required');
  } else if (!validateEmail(data.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!data.subject?.trim()) {
    errors.push('Subject is required');
  }

  if (!data.message?.trim()) {
    errors.push('Message is required');
  } else if (data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  // Length validation
  if (data.firstName && data.firstName.length > 50) {
    errors.push('First name must be less than 50 characters');
  }

  if (data.lastName && data.lastName.length > 50) {
    errors.push('Last name must be less than 50 characters');
  }

  if (data.message && data.message.length > 1000) {
    errors.push('Message must be less than 1000 characters');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}
