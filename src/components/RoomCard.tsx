
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface RoomCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  features: string[];
}

const RoomCard: React.FC<RoomCardProps> = ({
  title,
  description,
  price,
  imageUrl,
  features,
}) => {
  return (
    <Card className="overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="relative overflow-hidden h-64">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-white py-1 px-3 rounded font-medium text-sm">
          {price}
        </div>
      </div>
      <CardContent className="p-6 flex-grow">
        <h3 className="heading-sm mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="space-y-1">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-forest-500 mr-2"></div>
              {feature}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link
          to="/contact"
          className="inline-flex items-center font-medium text-forest-700 hover:text-forest-800"
        >
          Book Now <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
