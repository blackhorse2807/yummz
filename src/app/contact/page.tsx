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
    <div className="py-12 bg-gradient-to-b from-yellow-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-yellow-600 sm:text-5xl">Contact YUMMZ FOODS</h1>
          <p className="mt-4 text-xl text-amber-700 max-w-3xl mx-auto">
            We&apos;d love to hear from you. Get in touch with our team for inquiries, partnerships, or orders.
          </p>
        </div>
      </div>

      {/* Contact Details and Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-yellow-600 mb-6">Get In Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-amber-600">Headquarters</h3>
                  <p className="mt-1 text-amber-700">
                    YUMMZ FOODS PVT LTD<br />
                    Village & Post - Khamarshimulia<br />
                    PS - Taherpur, District - Nadia<br />
                    West Bengal, India, PIN - 741121
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-amber-600">Phone</h3>
                  <p className="mt-1 text-amber-700">
                    (+91) 9434056584<br />
                    (+91) 8170059607
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-amber-600">Email</h3>
                  <p className="mt-1 text-amber-700">
                    yummzfoods@gmail.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-amber-600">Business Hours</h3>
                  <p className="mt-1 text-amber-700">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-yellow-600 mb-6">Location Details</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-amber-600">Transportation Access</h3>
                    <p className="mt-1 text-amber-700">
                      <span className="font-medium">Railway Stations:</span><br />
                      • BADKULLA (1.5 Km)<br />
                      • JALALKHALI (0.8 Km)<br />
                      • KRISHNAGAR (6 Km)<br />
                      <span className="italic">All on Sealdah - Krishnanagar section of Eastern Railway</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-amber-600">Distances</h3>
                    <p className="mt-1 text-amber-700">
                      • Approx. 85 km from Kolkata International Airport<br />
                      • On State Highway adjoining NH-34<br />
                      • 35 km from Bangladesh International Border<br />
                      • 135 km from Sea Port, Kolkata
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-yellow-300">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-6">Send Us a Message</h2>
            
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                <p>Thank you for your message! We&apos;ll get back to you soon.</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-amber-700 font-medium mb-2">
                  Your Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="company" className="block text-amber-700 font-medium mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-amber-700 font-medium mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-amber-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="inquiry" className="block text-amber-700 font-medium mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiry"
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="general">General Inquiry</option>
                  <option value="sales">Sales & Orders</option>
                  <option value="partnership">Business Partnership</option>
                  <option value="export">Export Opportunities</option>
                  <option value="careers">Careers</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-amber-700 font-medium mb-2">
                  Your Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32"
                  required
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-white py-2 px-4 rounded-md hover:from-amber-500 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all transform hover:scale-105 duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Google Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white p-6 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-6 text-center">Visit Our Location</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=23.4341618,88.4894105&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
      
      {/* Facility Image */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src="/landing-page/food-processing.jpg"
            alt="YUMMZ FOODS Processing Facility"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <p className="text-white text-xl font-semibold">Our State-of-the-Art Processing Facilities in Khamarshimulia, Nadia</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}