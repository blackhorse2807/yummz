'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    company: '',
    inquiry: 'general',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission to your backend here
    console.log('Form data submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '', company: '', inquiry: 'general' });
    // Reset form submission state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="py-20 bg-gradient-to-b from-[#f8f9fc] to-[#faf9f6]">
      {/* Header Section */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#0a2340]">Contact Us</h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-[#0a2340] to-[#1a2a44] mx-auto mt-4 mb-6"></div>
          <p className="text-[15px] text-[#1a2a44]/80 max-w-2xl mx-auto">
            For inquiries about our products, services, or business opportunities, please reach out to our team using the contact information below.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* Decorative element */}
          <div className="absolute top-[-30px] left-[-50px] w-[200px] h-[200px] rounded-full bg-[#0a2340]/5 -z-10 hidden lg:block"></div>
          <div className="absolute bottom-[-50px] right-[-80px] w-[250px] h-[250px] rounded-full bg-[#0a2340]/5 -z-10 hidden lg:block"></div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-white p-10 rounded-lg shadow-lg h-full border-t-4 border-[#0a2340]">
              <h2 className="text-2xl font-semibold text-[#0a2340] mb-8 pb-4 border-b border-gray-200">Company Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0a2340]/10 flex items-center justify-center">
                    <svg className="h-5 w-5 text-[#0a2340]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-[15px] font-semibold text-[#0a2340]">Address</h3>
                    <p className="mt-2 text-[15px] text-[#1a2a44]/70 leading-relaxed">
                      YUMMZ FOODS PVT LTD<br />
                      Village & Post - Khamarshimulia<br />
                      PS - Taherpur, District - Nadia<br />
                      West Bengal, India, PIN - 741121
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0a2340]/10 flex items-center justify-center">
                    <svg className="h-5 w-5 text-[#0a2340]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-[15px] font-semibold text-[#0a2340]">Phone</h3>
                    <p className="mt-2 text-[15px] text-[#1a2a44]/70 leading-relaxed">
                      (+91) 9434056584<br />
                      (+91) 8170059607
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0a2340]/10 flex items-center justify-center">
                    <svg className="h-5 w-5 text-[#0a2340]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-[15px] font-semibold text-[#0a2340]">Email</h3>
                    <p className="mt-2 text-[15px] text-[#1a2a44]/70 leading-relaxed">
                      yummzfoods@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0a2340]/10 flex items-center justify-center">
                    <svg className="h-5 w-5 text-[#0a2340]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-[15px] font-semibold text-[#0a2340]">Business Hours</h3>
                    <p className="mt-2 text-[15px] text-[#1a2a44]/70 leading-relaxed">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="text-[15px] font-semibold text-[#0a2340] mb-4">Our Location</h3>
                <div className="w-full h-[180px] rounded-lg overflow-hidden shadow-md border border-gray-100">
                  <iframe
                    src="https://maps.google.com/maps?q=23.4341618,88.4894105&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Yummz Foods Location"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-lg shadow-lg border-t-4 border-[#0a2340]">
            <h2 className="text-2xl font-semibold text-[#0a2340] mb-8 pb-4 border-b border-gray-200">Send a Message</h2>
            
            {submitted ? (
              <div className="bg-green-50 border-l-4 border-green-500 text-green-800 px-6 py-4 rounded mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-[15px] font-medium">Thank you for your message. Our team will respond to your inquiry shortly.</p>
                  </div>
                </div>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-[15px] text-[#0a2340] font-medium mb-2">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-[15px] bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a2340]/20 focus:border-[#0a2340] transition-colors"
                  required
                  placeholder="Your full name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="company" className="block text-[15px] text-[#0a2340] font-medium mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-[15px] bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a2340]/20 focus:border-[#0a2340] transition-colors"
                  placeholder="Your company name"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-[15px] text-[#0a2340] font-medium mb-2">
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-[15px] bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a2340]/20 focus:border-[#0a2340] transition-colors"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-[15px] text-[#0a2340] font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-[15px] bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a2340]/20 focus:border-[#0a2340] transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="inquiry" className="block text-[15px] text-[#0a2340] font-medium mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiry"
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-[15px] bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a2340]/20 focus:border-[#0a2340] transition-colors appearance-none"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 0.5rem center", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}
                >
                  <option value="general">General Inquiry</option>
                  <option value="sales">Sales & Orders</option>
                  <option value="partnership">Business Partnership</option>
                  <option value="export">Export Opportunities</option>
                  <option value="careers">Careers</option>
                </select>
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-[15px] text-[#0a2340] font-medium mb-2">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-[15px] bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a2340]/20 focus:border-[#0a2340] transition-colors"
                  rows={5}
                  required
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#0a2340] text-white font-medium py-[12px] px-[25px] text-[15px] rounded-md shadow-md hover:bg-[#0a2340]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0a2340]/50 focus:ring-offset-2"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}