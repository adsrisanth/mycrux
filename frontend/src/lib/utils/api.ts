import { ContactFormRequest, ContactFormResponse } from '@/lib/models/Contact';

export async function submitContactForm(data: ContactFormRequest): Promise<ContactFormResponse> {
  try {
    const response = await fetch('/api/support', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Failed to submit contact form'
      };
    }

    return {
      success: true,
      message: result.message,
      id: result.id
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: 'Network error. Please try again later.'
    };
  }
}
