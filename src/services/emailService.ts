import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAIL_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
  contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key',
};

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  origin: string;
  destination: string;
  goodsType: string;
  weight: string;
  service: string;
  additionalInfo: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface EmailResult {
  success: boolean;
  message: string;
}

export const sendContactMessage = async (formData: ContactFormData): Promise<EmailResult> => {
  try {
    // Prepare template parameters for contact form
    const templateParams = {
      to_email: import.meta.env.VITE_COMPANY_EMAIL || 'info@noorzam.co.ke',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
      // Add timestamp for reference
      sent_date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.contactTemplateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Message sent successfully! We will get back to you soon.'
      };
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error('Error sending contact message:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again or contact us directly.'
    };
  }
};

export const sendQuoteRequest = async (formData: QuoteFormData): Promise<EmailResult> => {
  try {
    // Prepare template parameters for EmailJS
    const templateParams = {
      to_email: import.meta.env.VITE_COMPANY_EMAIL || 'info@noorzam.co.ke',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company || 'Not specified',
      origin: formData.origin,
      destination: formData.destination,
      goods_type: formData.goodsType,
      weight: formData.weight || 'Not specified',
      service: formData.service,
      additional_info: formData.additionalInfo || 'None',
      reply_to: formData.email,
      // Add timestamp for reference
      quote_date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Quote request sent successfully! We will contact you soon.'
      };
    } else {
      throw new Error('Failed to send quote request');
    }
  } catch (error) {
    console.error('Error sending quote request:', error);
    return {
      success: false,
      message: 'Failed to send quote request. Please try again or contact us directly.'
    };
  }
};

// Fallback email sending function for contact form using mailto
export const sendContactViaMailto = (formData: ContactFormData): void => {
  const subject = formData.subject || `Message from ${formData.name}`;
  const body = `
Contact Message:

From: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Subject: ${formData.subject}

Message:
${formData.message}

---
Sent on: ${new Date().toLocaleString()}
`.trim();

  const mailtoLink = `mailto:${import.meta.env.VITE_COMPANY_EMAIL || 'hpbrains2025@gmail.com'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink);
};

// Fallback email sending function using mailto (as backup)
export const sendQuoteViaMailto = (formData: QuoteFormData): void => {
  const subject = `Quote Request from ${formData.name}`;
  const body = `
Quote Request Details:

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Company: ${formData.company || 'Not specified'}

Shipment Details:
- Origin: ${formData.origin}
- Destination: ${formData.destination}
- Type of Goods: ${formData.goodsType}
- Weight/Volume: ${formData.weight || 'Not specified'}
- Required Service: ${formData.service}

Additional Information:
${formData.additionalInfo || 'None'}

---
Sent on: ${new Date().toLocaleString()}
`.trim();

  const mailtoLink = `mailto:${import.meta.env.VITE_COMPANY_EMAIL || 'hpbrains2025@gmail.com'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink);
};
