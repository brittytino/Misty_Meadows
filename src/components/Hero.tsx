
import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink = "/contact",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 w-full h-full transform scale-110 transition-transform duration-1000"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(21, 35, 33, 0.4), rgba(21, 35, 33, 0.5)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.9)',
        }}
      />

      {/* Overlay gradient for depth */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"
      />

      {/* Main Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div 
          className={cn(
            "max-w-5xl mx-auto text-center text-white space-y-8 transition-all duration-1000 ease-out transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}
        >
          <h1 
            className="text-5xl md:text-7xl font-serif font-medium leading-tight md:leading-tight mb-6"
            style={{ 
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              letterSpacing: '0.5px'
            }}
          >
            {title}
          </h1>
          
          {subtitle && (
            <p 
              className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-12 text-white/90"
              style={{ 
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              }}
            >
              {subtitle}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            {buttonText && (
              <Link
                to={buttonLink}
                className="group bg-white/95 text-forest-900 px-8 py-4 rounded-md text-lg font-medium 
                         transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-105 
                         backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  {buttonText}
                  <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            )}
            <Link 
              to="#overview"
              className="group px-8 py-4 rounded-md text-lg font-medium border border-white/30 
                       hover:bg-white/10 transition-all duration-300 backdrop-blur-sm
                       hover:border-white/50"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <Link 
          to="#overview" 
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300"
        >
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
