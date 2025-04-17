
import React from 'react';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  // Contact information
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-forest-600" />,
      title: 'Phone',
      details: ['+91 9786350537', '+91 423 2444333'],
    },
    {
      icon: <Mail className="h-6 w-6 text-forest-600" />,
      title: 'Email',
      details: ['info@mistymeadowsooty.com', 'reservations@mistymeadowsooty.com'],
    },
    {
      icon: <MapPin className="h-6 w-6 text-forest-600" />,
      title: 'Address',
      details: ['Upper Lake Road', 'Ooty, Tamil Nadu 643001', 'India'],
    },
    {
      icon: <Clock className="h-6 w-6 text-forest-600" />,
      title: 'Reception Hours',
      details: ['24/7 Front Desk', 'Check-in: 2:00 PM', 'Check-out: 11:00 AM'],
    },
  ];

  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Reach out to plan your perfect mountain getaway"
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
      />

      {/* Contact Information */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-md mb-6">Get in Touch</h2>
            <p className="text-body-lg text-muted-foreground">
              We're here to assist you with any questions, special requests, or reservations. Our team is available 24/7 to ensure your stay at Misty Meadows Resort is perfect.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-forest-100 mb-4">
                  {item.icon}
                </div>
                <h3 className="heading-sm mb-4">{item.title}</h3>
                <div className="space-y-1">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Contact Form */}
      <section className="section-padding bg-misty-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="heading-md mb-6">Location</h3>
              <p className="text-body-lg mb-6 text-muted-foreground">
                Nestled in the heart of the Nilgiri hills, Misty Meadows Resort is conveniently located just a short drive from Ooty town center, offering both accessibility and tranquility.
              </p>
              
              <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31277.63923921941!2d76.67891121261424!3d11.407881603409591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8bd84b5f3adcf%3A0x6c42d49d5ca9797f!2sOoty%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713731858810!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Misty Meadows Resort Map"
                ></iframe>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-2">Directions:</h4>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>35 km from Coimbatore International Airport (CJB)</li>
                  <li>5 km from Udhagamandalam (Ooty) Railway Station</li>
                  <li>3 km from Ooty Bus Stand</li>
                  <li>2 km from Ooty Lake</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="heading-md mb-6">Send an Inquiry</h3>
              <p className="text-body-lg mb-6 text-muted-foreground">
                Complete the form below to inquire about availability, rates, or any special requirements for your stay.
              </p>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl mb-2">What is the best time to visit Ooty?</h3>
              <p className="text-muted-foreground">
                Ooty is beautiful year-round, but the most pleasant weather is from March to June and September to November. July-August is monsoon season, and December-February can be chilly with occasional frost.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl mb-2">Do you arrange airport transfers?</h3>
              <p className="text-muted-foreground">
                Yes, we provide airport transfers from Coimbatore International Airport for an additional fee. Please inform us of your flight details when booking.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl mb-2">Are pets allowed at the resort?</h3>
              <p className="text-muted-foreground">
                We have designated pet-friendly cottages available upon request. Please inform us in advance as these accommodations are limited.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl mb-2">What activities are available for children?</h3>
              <p className="text-muted-foreground">
                We offer various kid-friendly activities including nature walks, bonfire storytelling, board games, and outdoor play areas. Our concierge can arrange family-friendly excursions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
