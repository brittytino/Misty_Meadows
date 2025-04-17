import React from 'react';
import Hero from '@/components/Hero';
import RoomCard from '@/components/RoomCard';
import { Bed, Wifi, Coffee, Fingerprint } from 'lucide-react';

const Accommodations = () => {
  // Expanded list of rooms for the accommodations page
  const rooms = [
    {
      title: 'Luxury Valley View Suite',
      description: 'Spacious suite with panoramic views of the Nilgiri mountains.',
      price: 'From ₹15,000/night',
      imageUrl: '/images/1.jpg',
      features: ['Mountain View', 'King Size Bed', 'Private Balcony', 'Fireplace'],
    },
    {
      title: 'Garden Cottage',
      description: 'Charming cottage surrounded by lush gardens and local flora.',
      price: 'From ₹12,000/night',
      imageUrl: '/images/5.jpg',
      features: ['Garden View', 'Queen Size Bed', 'Private Patio', 'Outdoor Shower'],
    },
    {
      title: 'Tea Plantation Room',
      description: 'Cozy room overlooking emerald tea plantations and morning mist.',
      price: 'From ₹10,000/night',
      imageUrl: '/images/4.jpg',
      features: ['Plantation View', 'Twin Beds', 'Work Desk', 'Rain Shower'],
    },
    {
      title: 'Forest Edge Villa',
      description: 'Private villa at the edge of the eucalyptus forest with outdoor lounging areas.',
      price: 'From ₹20,000/night',
      imageUrl: '/images/6.jpg',
      features: ['Forest View', 'King Size Bed', 'Private Garden', 'Hot Tub'],
    },
    {
      title: 'Honeymoon Suite',
      description: 'Romantic suite with panoramic valley views, perfect for couples.',
      price: 'From ₹18,000/night',
      imageUrl: '/images/25.jpg',
      features: ['Valley View', 'Four-poster Bed', 'Couples Spa Bath', 'Private Dining Area'],
    },
    {
      title: 'Family Bungalow',
      description: 'Spacious bungalow with multiple bedrooms, ideal for families or groups.',
      price: 'From ₹25,000/night',
      imageUrl: '/images/9.jpg',
      features: ['Multiple Bedrooms', 'Living Room', 'Dining Area', 'Kids Play Area'],
    },
  ];

  // Amenities for all rooms
  const generalAmenities = [
    {
      icon: <Bed className="h-6 w-6 text-forest-600" />,
      title: 'Luxury Bedding',
      description: "Premium mattresses and high thread count linens for the perfect night's sleep.",
    },
    {
      icon: <Wifi className="h-6 w-6 text-forest-600" />,
      title: 'High-Speed WiFi',
      description: 'Stay connected with complimentary high-speed internet throughout the property.',
    },
    {
      icon: <Coffee className="h-6 w-6 text-forest-600" />,
      title: 'In-room Refreshments',
      description: 'Locally sourced teas, freshly ground coffee, and a curated minibar.',
    },
    {
      icon: <Fingerprint className="h-6 w-6 text-forest-600" />,
      title: 'Personalized Service',
      description: 'From turndown service to custom pillow selections, tailored to your preferences.',
    },
  ];

  return (
    <>
      <Hero
        title="Luxury Accommodations"
        subtitle="Experience comfort and elegance in the heart of the Nilgiri hills"
        backgroundImage="/images/2.jpg"
      />

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-6">Your Mountain Retreat</h2>
            <p className="text-body-lg text-muted-foreground">
              Each of our accommodations is thoughtfully designed to provide both comfort and connection to the natural beauty of Ooty. From cozy rooms to luxurious villas, find the perfect space for your mountain getaway.
            </p>
          </div>
        </div>
      </section>

      {/* Room Amenities */}
      <section className="section-padding bg-misty-50">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">Standard Amenities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {generalAmenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-forest-100 mb-4">
                  {amenity.icon}
                </div>
                <h3 className="heading-sm mb-2">{amenity.title}</h3>
                <p className="text-muted-foreground">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Listings */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">Our Accommodations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Note */}
      <section className="py-12 bg-forest-700 text-white">
        <div className="container-custom text-center">
          <h3 className="heading-sm mb-4">Ready to book your stay?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            For the best rates and availability, contact us directly or use our online inquiry form.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919786350537" className="inline-block bg-white text-forest-800 px-6 py-3 rounded-md font-medium">
              Call Us
            </a>
            <a href="/contact" className="inline-block bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-forest-800 transition-colors">
              Online Booking
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accommodations;
