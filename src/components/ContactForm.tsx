
import React, { useState } from 'react';
import { Send, Calendar, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    guests: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format a WhatsApp message with the form data
    const whatsappMessage = `Hello Misty Meadows Resort! I'm interested in booking:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Check-in: ${formData.checkin}\n` +
      `Check-out: ${formData.checkout}\n` +
      `Guests: ${formData.guests}\n\n` +
      `Message: ${formData.message}`;
    
    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL (using a placeholder number)
    const whatsappURL = `https://wa.me/919786350537?text=${encodedMessage}`;
    
    // Show success toast
    toast({
      title: "Message ready to send!",
      description: "You will be redirected to WhatsApp to complete your inquiry.",
    });
    
    // Open WhatsApp in a new window
    window.open(whatsappURL, '_blank');
  };

  return (
    <Card className="border border-border/50">
      <CardContent className="p-6">
        <h3 className="heading-sm mb-6">Inquire Now</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (123) 456-7890"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="checkin" className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Check-in Date
              </Label>
              <Input
                id="checkin"
                name="checkin"
                type="date"
                value={formData.checkin}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="checkout" className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Check-out Date
              </Label>
              <Input
                id="checkout"
                name="checkout"
                type="date"
                value={formData.checkout}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="guests" className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Number of Guests
              </Label>
              <Input
                id="guests"
                name="guests"
                type="number"
                min="1"
                value={formData.guests}
                onChange={handleChange}
                placeholder="2"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please let us know any special requests or questions..."
              rows={4}
            />
          </div>
          
          <Button type="submit" className="w-full bg-forest-700 hover:bg-forest-800">
            <Send className="mr-2 h-4 w-4" />
            Send Inquiry via WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
