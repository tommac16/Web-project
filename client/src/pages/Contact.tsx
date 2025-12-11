import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to order or need more information? Our sales team is here to help you find the perfect flour solution.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2">Request a Quote</h2>
              <p className="text-muted-foreground">Fill out the form below and we will get back to you within 24 hours.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">Company Name</label>
                  <Input id="company" placeholder="Bakery Inc." />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Business Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="industrial">Industrial Bakery</SelectItem>
                      <SelectItem value="artisan">Artisan Bakery</SelectItem>
                      <SelectItem value="distributor">Distributor</SelectItem>
                      <SelectItem value="retail">Retail/Supermarket</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Estimated Monthly Volume</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select volume" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Less than 1 Ton</SelectItem>
                      <SelectItem value="medium">1 - 10 Tons</SelectItem>
                      <SelectItem value="large">10 - 50 Tons</SelectItem>
                      <SelectItem value="industrial">50+ Tons</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message / Specific Requirements</label>
                <Textarea id="message" placeholder="Tell us about your needs..." className="min-h-[120px]" />
              </div>

              <Button type="submit" className="w-full bg-secondary text-primary font-bold hover:bg-secondary/90 h-12 text-lg">
                Send Request
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <Card className="bg-primary text-white border-none shadow-xl">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-xl font-bold text-secondary mb-4">Contact Information</h3>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Factory & Head Office</h4>
                    <p className="text-white/80 text-sm">123 Industrial Zone, Milling District<br />City, Country 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-white/10 p-2 rounded-lg">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-white/80 text-sm">Sales: +1 (555) 123-4567</p>
                    <p className="text-white/80 text-sm">Support: +1 (555) 123-4568</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-white/10 p-2 rounded-lg">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-white/80 text-sm">sales@senayflour.com</p>
                    <p className="text-white/80 text-sm">info@senayflour.com</p>
                  </div>
                </div>

                 <div className="flex items-start gap-4">
                   <div className="bg-white/10 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Office Hours</h4>
                    <p className="text-white/80 text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-white/80 text-sm">Sat: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-[300px] w-full flex items-center justify-center relative overflow-hidden border border-gray-300">
               <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=12&size=800x600&maptype=roadmap&key=YOUR_API_KEY')] bg-cover bg-center opacity-50 grayscale">
                 {/* This is a visual fallback since we don't have a real API key */}
               </div>
               <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg z-10 font-medium text-gray-600 flex items-center gap-2">
                 <MapPin className="h-5 w-5 text-primary" />
                 Interactive Map Placeholder
               </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
