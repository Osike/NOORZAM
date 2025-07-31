# Email Configuration Setup Guide

This guide will help you set up email functionality for the quote request form using EmailJS.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Quote Request from {{from_name}}

Hello,

You have received a new quote request from your website:

CONTACT INFORMATION:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Company: {{company}}

SHIPMENT DETAILS:
- Origin: {{origin}}
- Destination: {{destination}}
- Type of Goods: {{goods_type}}
- Weight/Volume: {{weight}}
- Required Service: {{service}}

ADDITIONAL INFORMATION:
{{additional_info}}

Quote requested on: {{quote_date}}

---
This email was sent from your website's quote request form.
You can reply directly to this email to contact the customer.
```

4. Set the "To Email" field to your business email
5. Note down your **Template ID**

## Step 4: Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## Step 5: Update Environment Variables

Update your `.env` file with the following values:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_COMPANY_EMAIL=your-business-email@domain.com
```

## Step 6: Test the Setup

1. Save all files and restart your development server
2. Fill out the quote form on your website
3. Submit the form
4. Check your business email for the quote request

## Troubleshooting

### Common Issues:

1. **"Failed to send quote request"**
   - Check that all environment variables are set correctly
   - Verify your EmailJS service is active
   - Check browser console for detailed error messages

2. **Emails not received**
   - Check spam/junk folder
   - Verify the template "To Email" field is set correctly
   - Ensure your email service is properly configured

3. **Rate limiting**
   - EmailJS free plan has limits (200 emails/month)
   - Consider upgrading if you expect high volume

### Fallback Option

If EmailJS fails, the form will offer a mailto fallback that opens the user's default email client with pre-filled content.

## Security Notes

- Never commit your actual API keys to version control
- Use environment variables for all sensitive data
- Consider using a backend service for production applications

## EmailJS Free Plan Limits

- 200 emails per month
- EmailJS branding in emails
- Basic templates and services

For higher volume or commercial use, consider upgrading to a paid plan.
