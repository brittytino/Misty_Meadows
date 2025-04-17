import React from 'react';
import Hero from '@/components/Hero';
import RoomCard from '@/components/RoomCard';
import ExperienceCard from '@/components/ExperienceCard';
import TestimonialCard from '@/components/TestimonialCard';
import ContactForm from '@/components/ContactForm';
import WeatherWidget from '@/components/WeatherWidget';
import { ArrowRight, CalendarDays, MapPin, Phone, Mail, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { galleryItems } from '@/data/galleryImages';

const Index = () => {
  // Sample data for rooms
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
      imageUrl: '/images/tp.jpg',
      features: ['Plantation View', 'Twin Beds', 'Work Desk', 'Rain Shower'],
    },
  ];

  // Sample data for experiences
  const experiences = [
    {
      title: 'Tea Plantation Tour',
      description: 'Explore the verdant tea gardens and learn about the art of tea making from expert planters.',
      imageUrl: '/images/tea.jpg',
      duration: '3 hours',
      category: 'Cultural',
    },
    {
      title: 'Nilgiri Mountain Hike',
      description: 'Trek through the beautiful Shola forests with experienced guides and spot rare wildlife.',
      imageUrl: '/images/ni.jpg',
      duration: '5 hours',
      category: 'Adventure',
    },
    {
      title: 'Botanical Garden Visit',
      description: 'Visit the famous botanical gardens with over 1000 species of plants, flowers and century-old trees.',
      imageUrl: '/images/b.webp',
      duration: '2 hours',
      category: 'Nature',
    },
  ];

  // Sample testimonials
  const testimonials = [
    {
      quote: 'The misty mornings and breathtaking views made our anniversary truly special. The staff went above and beyond.',
      author: 'Priya & Raj Kumar',
      location: 'Bangalore',
      rating: 5,
    },
    {
      quote: 'The perfect retreat from city life. The tea plantation tour was informative and the cottages are beautifully designed.',
      author: 'Sarah Johnson',
      location: 'Mumbai',
      rating: 5,
    },
    {
      quote: 'Exceptional service and amazing food. The local cuisine prepared by the chef was the highlight of our stay.',
      author: 'Amit Shah',
      location: 'Delhi',
      rating: 4,
    },
  ];

  const featuredGalleryImages = [
    {
      url: '/images/1.jpg',
      title: 'Luxury Suite'
    },
    {
      url: '/images/2.jpg',
      title: 'Mountain Views'
    },
    {
      url: '/images/4.jpg',
      title: 'Tea Gardens'
    },
    {
      url: '/images/6.jpg',
      title: 'Morning Mist'
    },
    {
      url: '/images/10.jpg',
      title: 'Waterfall'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Experience Tranquility in the Nilgiris"
        subtitle="Luxury accommodations nestled in the misty mountains of Ooty"
        backgroundImage="/images/3.jpg"
        buttonText="Book Your Stay"
      />

      {/* Weather Section */}
      <section className="section-padding bg-gradient-to-b from-misty/30 to-transparent">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4 text-forest-800">Current Weather</h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the pleasant climate of Ooty, perfect for your mountain getaway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Weather Widget with Video Background */}
            <div className="md:col-span-2 relative rounded-2xl overflow-hidden h-[500px] flex items-center justify-center group">
              <div className="absolute inset-0 z-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/images/video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/5 group-hover:from-black/20 group-hover:to-black/10 transition-all duration-500" />
              </div>
              <div className="relative z-10 p-8 text-white">
                <div className="backdrop-blur-[2px] p-6 rounded-xl">
                  <WeatherWidget />
                </div>
              </div>
            </div>

            {/* Weather Highlights */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-xl font-semibold text-forest-800 mb-4">Weather Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-forest-100 pb-3">
                    <span className="text-muted-foreground">Best Time to Visit</span>
                    <span className="font-medium text-forest-700">October - March</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-forest-100 pb-3">
                    <span className="text-muted-foreground">Average Temperature</span>
                    <span className="font-medium text-forest-700">15°C - 20°C</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Rainfall</span>
                    <span className="font-medium text-forest-700">Moderate</span>
                  </div>
                </div>
              </div>

              {/* Weather Tips */}
              <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-xl font-semibold text-forest-800 mb-4">Travel Tips</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-forest-600">•</span>
                    <span className="text-muted-foreground">Pack light woolens for cool evenings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-forest-600">•</span>
                    <span className="text-muted-foreground">Carry an umbrella for unexpected showers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-forest-600">•</span>
                    <span className="text-muted-foreground">Wear comfortable shoes for nature walks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Weather Quote */}
          <div className="mt-16 text-center">
            <blockquote className="max-w-2xl mx-auto text-forest-700 text-xl italic">
              "The weather in Ooty is like a gentle embrace from nature - cool, refreshing, and perfect for creating memories."
            </blockquote>
            <p className="mt-4 text-muted-foreground">- Local Weather Enthusiast</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md mb-6">
                Welcome to Misty Meadows Resort
              </h2>
              <p className="text-body-lg mb-6 text-muted-foreground">
                Nestled in the heart of the Nilgiri Hills, Misty Meadows Resort offers a perfect blend of luxury and natural beauty. Our resort is surrounded by rolling hills, tea plantations, and eucalyptus forests, creating a serene escape from the bustle of everyday life.
              </p>
              <p className="text-body mb-8 text-muted-foreground">
                Whether you're seeking adventure in the mountains, cultural experiences in Ooty, or simply a peaceful retreat in nature, our resort provides the perfect base for your Nilgiri experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-forest-600 mr-2" />
                  <span>Upper Lake Road, Ooty</span>
                </div>
                <div className="flex items-center">
                  <CalendarDays className="h-5 w-5 text-forest-600 mr-2" />
                  <span>Open All Year Round</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/3.jpg"
                alt="Misty Meadows Resort"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <img
                  src="/images/8.jpg"
                  alt="Resort Detail"
                  className="w-32 h-32 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section className="section-padding bg-misty-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Our Accommodations</h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our selection of thoughtfully designed rooms and cottages, each offering unique views and amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/accommodations"
              className="inline-flex items-center gap-2 text-forest-700 hover:text-forest-800 font-medium"
            >
              View All Accommodations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Experiences & Activities</h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Immerse yourself in the culture, nature and adventure that the Nilgiri Mountains have to offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/experiences"
              className="inline-flex items-center gap-2 text-forest-700 hover:text-forest-800 font-medium"
            >
              Explore All Experiences
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding" style={{
        backgroundImage: 'linear-gradient(rgba(21, 35, 33, 0.8), rgba(21, 35, 33, 0.8)), url(/images/14.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4 text-white">Guest Experiences</h2>
            <p className="text-body-lg text-gray-300 max-w-2xl mx-auto">
              Hear what our guests have to say about their stay at Misty Meadows Resort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="section-padding bg-misty-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Capture the Moments</h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Step into our visual journey through the Nilgiris, where every picture tells a story of serenity and natural beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {featuredGalleryImages.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "relative group overflow-hidden rounded-lg transition-transform hover:scale-[1.02]",
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                )}
              >
                <div className={cn(
                  "w-full",
                  index === 0 ? "aspect-square" : "aspect-video"
                )}>
                  <img
                    src={image.url}
                    alt={image.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-lg font-medium">{image.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-forest-600 text-white px-6 py-3 rounded-md font-medium hover:bg-forest-700 transition-colors"
            >
              <Camera className="h-5 w-5" />
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-misty-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-md mb-6">Get in Touch</h2>
              <p className="text-body-lg mb-8 text-muted-foreground">
                Ready to plan your mountain getaway? Reach out to us for availability, special requests, or any questions you may have.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-forest-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-forest-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">+91 9786350537</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-forest-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-forest-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">info@mistymeadowsooty.com</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-forest-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-forest-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">Upper Lake Road, Ooty, Tamil Nadu 643001, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Floating Book Now Button */}
      <Link to="/contact" className="book-now-btn">
        <CalendarDays className="h-4 w-4" />
        Book Now
      </Link>
    </>
  );
};

export default Index;
