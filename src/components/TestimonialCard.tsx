
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  rating: number;
  imageUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  location,
  rating,
  imageUrl,
}) => {
  return (
    <Card className="border border-border/50 hover:shadow-md transition-all duration-300 h-full">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <blockquote className="mb-6">
          <p className="text-body italic">"{quote}"</p>
        </blockquote>
        <div className="flex items-center">
          {imageUrl && (
            <div className="mr-4">
              <img
                src={imageUrl}
                alt={author}
                className="h-12 w-12 rounded-full object-cover"
              />
            </div>
          )}
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
