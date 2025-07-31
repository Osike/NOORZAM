import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { sendQuoteRequest, sendQuoteViaMailto, type QuoteFormData } from '../../services/emailService';

type FormData = QuoteFormData;

function QuoteSection() {
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors, isSubmitting } 
  } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    try {
      setSubmitStatus({ type: null, message: '' });
      
      // Try to send via EmailJS first
      const result = await sendQuoteRequest(data);
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        });
        // Reset the form after successful submission
        reset();
      } else {
        // If EmailJS fails, offer mailto fallback
        setSubmitStatus({
          type: 'error',
          message: `${result.message} Would you like to send via your email client instead?`
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again or contact us directly.'
      });
    }
  };

  const handleMailtoFallback = () => {
    // Get current form values and send via mailto
    sendQuoteViaMailto({
      name: (document.getElementById('name') as HTMLInputElement)?.value || '',
      email: (document.getElementById('email') as HTMLInputElement)?.value || '',
      phone: (document.getElementById('phone') as HTMLInputElement)?.value || '',
      company: (document.getElementById('company') as HTMLInputElement)?.value || '',
      origin: (document.getElementById('origin') as HTMLInputElement)?.value || '',
      destination: (document.getElementById('destination') as HTMLInputElement)?.value || '',
      goodsType: (document.getElementById('goodsType') as HTMLInputElement)?.value || '',
      weight: (document.getElementById('weight') as HTMLInputElement)?.value || '',
      service: (document.getElementById('service') as HTMLSelectElement)?.value || '',
      additionalInfo: (document.getElementById('additionalInfo') as HTMLTextAreaElement)?.value || '',
    });
  };
  
  return (
    <section id="quote" className="section text-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Request a Quote" 
          subtitle="Fill out the form below to get a personalized quote for your logistics needs."
          className="text-black"
        />
        
        <motion.div
          className="bg-neutral-100 rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {submitStatus.type === 'success' ? (
            <div className="p-8 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-primary-800 mb-2">Quote Request Sent Successfully!</h3>
              <p className="text-neutral-600 mb-6">
                {submitStatus.message}
              </p>
              <button
                onClick={() => {
                  setSubmitStatus({ type: null, message: '' });
                  reset({}, { keepValues: false });
                }}
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-md transition-colors duration-200"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary-800 mb-6">Your Quote Details</h3>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Error/Status Messages */}
                {submitStatus.type === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="flex-1">
                        <p className="text-red-700 text-sm mb-2">{submitStatus.message}</p>
                        {submitStatus.message.includes('email client') && (
                          <button
                            type="button"
                            onClick={handleMailtoFallback}
                            className="text-red-600 hover:text-red-800 underline text-sm font-medium"
                          >
                            Open Email Client
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Contact Information */}
                  <div>
                    <label htmlFor="name" className="block text-neutral-700 font-medium mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      className={`input text-neutral-900 ${errors.name ? 'border-error-500 focus:ring-error-500' : ''}`}
                      placeholder="Antonio Fernades"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <p className="mt-1 text-error-500 text-sm">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      id="email"
                      className={`input text-neutral-900 ${errors.email ? 'border-error-500 focus:ring-error-500' : ''}`}
                      placeholder="example@example.com"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && <p className="mt-1 text-error-500 text-sm">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-neutral-700 font-medium mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone"
                      className={`input text-neutral-900 ${errors.phone ? 'border-error-500 focus:ring-error-500' : ''}`}
                      placeholder="+254 123 456 789"
                      {...register('phone', { required: 'Phone number is required' })}
                    />
                    {errors.phone && <p className="mt-1 text-error-500 text-sm">{errors.phone.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-neutral-700 font-medium mb-2">Company Name</label>
                    <input 
                      type="text" 
                      id="company"
                      className="input text-neutral-900"
                      placeholder="Your Company Ltd"
                      {...register('company')}
                    />
                  </div>
                  
                  {/* Shipment Details */}
                  <div>
                    <label htmlFor="origin" className="block text-neutral-700 font-medium mb-2">Origin Location *</label>
                    <input 
                      type="text" 
                      id="origin"
                      className={`input text-neutral-900 ${errors.origin ? 'border-error-500 focus:ring-error-500' : ''}`}
                      placeholder="City, Country"
                      {...register('origin', { required: 'Origin is required' })}
                    />
                    {errors.origin && <p className="mt-1 text-error-500 text-sm">{errors.origin.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="destination" className="block text-neutral-700 font-medium mb-2">Destination *</label>
                    <input 
                      type="text" 
                      id="destination"
                      className={`input text-neutral-900 ${errors.destination ? 'border-error-500 focus:ring-error-500' : ''}`}
                      placeholder="City, Country"
                      {...register('destination', { required: 'Destination is required' })}
                    />
                    {errors.destination && <p className="mt-1 text-error-500 text-sm">{errors.destination.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="goodsType" className="block text-neutral-700 font-medium mb-2">Type of Goods *</label>
                    <input 
                      type="text" 
                      id="goodsType"
                      className={`input text-neutral-900 ${errors.goodsType ? 'border-error-500 focus:ring-error-500' : ''}`}
                      placeholder="e.g., Electronics, Furniture, etc."
                      {...register('goodsType', { required: 'Type of goods is required' })}
                    />
                    {errors.goodsType && <p className="mt-1 text-error-500 text-sm">{errors.goodsType.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="weight" className="block text-neutral-700 font-medium mb-2">Estimated Weight/Volume</label>
                    <input 
                      type="text" 
                      id="weight"
                      className="input text-neutral-900"
                      placeholder="e.g., 500kg, 10 cubic meters"
                      {...register('weight')}
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="service" className="block text-neutral-700 font-medium mb-2">Required Service *</label>
                    <select 
                      id="service"
                      className={`input text-neutral-900 ${errors.service ? 'border-error-500 focus:ring-error-500' : ''}`}
                      {...register('service', { required: 'Please select a service' })}
                    >
                      <option value="">Select a service</option>
                      <option value="freight">Freight Forwarding</option>
                      {/* <option value="warehouse">Warehousing</option> */}
                      <option value="customs">Customs Clearance</option>
                      <option value="distribution">Local Distribution</option>
                      <option value="combined">Combined Services</option>
                    </select>
                    {errors.service && <p className="mt-1 text-error-500 text-sm">{errors.service.message}</p>}
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="additionalInfo" className="block text-neutral-700 font-medium mb-2">Additional Information</label>
                    <textarea 
                      id="additionalInfo"
                      rows={4}
                      className="input text-neutral-900 resize-none"
                      placeholder="Any specific requirements or questions..."
                      {...register('additionalInfo')}
                    ></textarea>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button 
                    type="submit" 
                    className="bg-accent-500 hover:bg-accent-600 text-neutral-900 font-medium px-8 py-3 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-70"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default QuoteSection;