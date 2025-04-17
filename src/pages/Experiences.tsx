import React from 'react';
import Hero from '@/components/Hero';
import ExperienceCard from '@/components/ExperienceCard';
import { Calendar, MapPin, Clock, Award } from 'lucide-react';

const Experiences = () => {
  // Expanded list of experiences
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
    {
      title: 'Chocolate Making Workshop',
      description: 'Learn the art of crafting artisanal chocolates with locally-sourced cocoa and spices.',
      imageUrl: '/images/1.jpg',
      duration: '2 hours',
      category: 'Culinary',
    },
    {
      title: 'Tribal Village Tour',
      description: 'Immerse yourself in the rich cultural heritage of the indigenous Toda and Kota tribes.',
      imageUrl: '/images/2.jpg',
      duration: '4 hours',
      category: 'Cultural',
    },
    {
      title: 'Sunrise Photography Tour',
      description: 'Capture the magical sunrise over the Nilgiri mountains with guidance from a professional photographer.',
      imageUrl: '/images/os.jpg',
      duration: '3 hours',
      category: 'Photography',
    },
    {
      title: 'Ooty Boat House',
      description: 'Enjoy a serene boat ride on Ooty Lake surrounded by eucalyptus trees and rolling hills.',
      imageUrl: '/images/ot.webp',
      duration: '1.5 hours',
      category: 'Leisure',
    },
    {
      title: 'Wine Tasting Experience',
      description: 'Sample locally produced wines made from fruits grown in the Nilgiri highlands.',
      imageUrl: '/images/wi.avif',
      duration: '2 hours',
      category: 'Culinary',
    },
    {
      title: 'Ayurvedic Wellness Workshop',
      description: 'Learn about traditional healing practices and prepare your own natural wellness products.',
      imageUrl: '/images/ob.avif',
      duration: '3 hours',
      category: 'Wellness',
    },
  ];

  // Seasonal activities
  const seasonalActivities = [
    {
      season: 'Spring (March - May)',
      activities: [
        'Flower Shows at the Botanical Gardens',
        'Bird Watching Tours',
        'Mountain Biking Expeditions',
        'Tea Harvest Experiences',
      ]
    },
    {
      season: 'Monsoon (June - September)',
      activities: [
        'Waterfall Hikes',
        'Indoor Culinary Workshops',
        'Spa and Ayurvedic Treatments',
        'Photography Sessions of Misty Landscapes',
      ]
    },
    {
      season: 'Autumn (October - November)',
      activities: [
        'Wildlife Safaris',
        'Tribal Cultural Festivals',
        'Mushroom Foraging with Chef',
        'Bonfire Storytelling Nights',
      ]
    },
    {
      season: 'Winter (December - February)',
      activities: [
        'Frost Photography Tours',
        'Winter Trekking Expeditions',
        'Chocolate and Wine Festivals',
        "New Year's Special Events",
      ]
    },
  ];

  return (
    <>
      <Hero
        title="Experiences & Activities"
        subtitle="Discover the beauty, culture, and adventure of the Nilgiri Mountains"
        backgroundImage="/images/18.jpg"
      />

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-6">Immerse Yourself in Ooty</h2>
            <p className="text-body-lg text-muted-foreground">
              From cultural explorations to outdoor adventures, Misty Meadows Resort offers a wide range of experiences to make your stay memorable. Our knowledgeable local guides will ensure authentic and enriching encounters with the natural beauty and cultural heritage of the Nilgiri region.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Experiences */}
      <section className="section-padding bg-misty-50">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">Why Choose Our Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-forest-100 mb-4">
                <MapPin className="h-6 w-6 text-forest-600" />
              </div>
              <h3 className="heading-sm mb-2">Local Expertise</h3>
              <p className="text-muted-foreground">Guides with deep local knowledge and passion for the region.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-forest-100 mb-4">
                <Award className="h-6 w-6 text-forest-600" />
              </div>
              <h3 className="heading-sm mb-2">Quality Assured</h3>
              <p className="text-muted-foreground">Carefully curated experiences that meet our high standards.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-forest-100 mb-4">
                <Clock className="h-6 w-6 text-forest-600" />
              </div>
              <h3 className="heading-sm mb-2">Flexible Timing</h3>
              <p className="text-muted-foreground">Activities scheduled at your convenience during your stay.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-forest-100 mb-4">
                <Calendar className="h-6 w-6 text-forest-600" />
              </div>
              <h3 className="heading-sm mb-2">Seasonal Offerings</h3>
              <p className="text-muted-foreground">Special experiences that highlight each season's unique beauty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Listings */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">Discover Our Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Activities */}
      <section className="section-padding" style={{
        backgroundImage: 'linear-gradient(rgba(21, 35, 33, 0.8), rgba(21, 35, 33, 0.8)), url(/images/9.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center text-white">Seasonal Activities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seasonalActivities.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
                <h3 className="heading-sm mb-4 text-white">{item.season}</h3>
                <ul className="space-y-2">
                  {item.activities.map((activity, idx) => (
                    <li key={idx} className="text-gray-200 flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-forest-400 mt-2 mr-2"></div>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Note */}
      <section className="py-12 bg-forest-700 text-white">
        <div className="container-custom text-center">
          <h3 className="heading-sm mb-4">Ready to Book an Experience?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Contact our concierge team to customize your itinerary or book individual experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="inline-block bg-white text-forest-800 px-6 py-3 rounded-md font-medium">
              Contact Concierge
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experiences;
