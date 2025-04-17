import React, { useState } from 'react';
import Hero from '@/components/Hero';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { galleryItems } from '@/data/galleryImages';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'accommodations', label: 'Accommodations' },
  { id: 'experiences', label: 'Experiences' },
  { id: 'nature', label: 'Nature' },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null);

  const filteredImages = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <Hero
        title="Photo Gallery"
        subtitle="Experience the beauty of Misty Meadows through our lens"
        backgroundImage={galleryItems[0].image}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-primary/10"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredImages.map((item, index) => {
                  // Create different sizes for visual interest
                  const isLarge = index % 5 === 0;
                  const isWide = index % 7 === 0;
                  
                  return (
                    <div
                      key={item.id}
                      className={cn(
                        "group cursor-pointer relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl",
                        isLarge ? "sm:col-span-2 lg:col-span-2" : "",
                        isWide ? "sm:col-span-2" : "",
                        "aspect-[4/3]"
                      )}
                      onClick={() => setSelectedImage(item)}
                    >
                      <div className="relative w-full h-full">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-200 text-sm">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-background/95 backdrop-blur-sm p-1">
          {selectedImage && (
            <div className="relative aspect-video">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
                <h3 className="text-2xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200">{selectedImage.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
