
import React from 'react';
import { Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ExperienceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  category: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  description,
  imageUrl,
  duration,
  category,
}) => {
  return (
    <Card className="overflow-hidden border-0 hover:shadow-lg transition-all duration-300 h-full">
      <div className="relative overflow-hidden h-64">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="inline-block bg-accent text-accent-foreground py-1 px-3 rounded-full text-xs uppercase font-medium">
            {category}
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="heading-sm mb-2">{title}</h3>
        <div className="flex items-center text-muted-foreground mb-4">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{duration}</span>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
