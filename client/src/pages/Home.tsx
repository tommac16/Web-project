import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Truck, Award } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/golden_wheat_field_at_sunrise.png";
import breadImage from "@assets/generated_images/assortment_of_fresh_breads.png";
import factoryImage from "@assets/generated_images/modern_flour_milling_factory_interior.png";
import flourImage from "@assets/generated_images/sack_of_flour_with_wheat_stalks.png";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Golden wheat field" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 px-4 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Consistent Flour.<br />
              <span className="text-secondary">Superior Results.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Senay Flour Factory delivers premium quality wheat flour with the consistency and reliability your bakery needs to thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Link href="/products">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg h-14 px-8">
                  View Our Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg h-14 px-8">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Stats */}
      <section className="py-12 bg-white -mt-10 relative z-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 bg-white rounded-xl shadow-xl p-8 border border-gray-100">
          <div className="text-center p-4 border-b md:border-b-0 md:border-r border-gray-100 last:border-0">
            <h3 className="text-4xl font-bold text-primary mb-2">25+</h3>
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">Years Experience</p>
          </div>
          <div className="text-center p-4 border-b md:border-b-0 md:border-r border-gray-100 last:border-0">
            <h3 className="text-4xl font-bold text-primary mb-2">500T</h3>
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">Daily Capacity</p>
          </div>
          <div className="text-center p-4 border-b md:border-b-0 md:border-r border-gray-100 last:border-0">
            <h3 className="text-4xl font-bold text-primary mb-2">ISO</h3>
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">22000 Certified</p>
          </div>
          <div className="text-center p-4 last:border-0">
            <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">Natural Wheat</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Why Partner With Senay?</h2>
            <p className="text-muted-foreground">We understand that consistency is the most critical ingredient in your production. Our process ensures you get the same high quality in every bag.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="h-16 w-16 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Certified Quality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rigorous lab testing at every stage. We meet international food safety standards including ISO and HACCP.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-primary text-primary-foreground relative overflow-hidden">
               <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
              <CardContent className="p-8 flex flex-col items-center text-center h-full relative z-10">
                <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Factory className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Advanced Milling</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  State-of-the-art European milling technology allows us to precisely control granulation and starch damage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="h-16 w-16 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Reliable Supply</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With our massive storage capacity and efficient logistics, we ensure you never run out of your essential ingredient.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold uppercase tracking-wider text-sm mb-2 block">Our Products</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Flour for Every Purpose</h2>
            </div>
            <Link href="/products">
              <Button variant="ghost" className="group text-primary font-semibold">
                View All Products <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="group relative overflow-hidden rounded-2xl h-[400px]">
                <img src={flourImage} alt="Industrial Flour" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Industrial & Bulk</h3>
                  <p className="text-gray-300 mb-4 max-w-md">Consistent high-volume supply for large-scale bakeries and food manufacturers.</p>
                  <Link href="/products">
                    <Button className="bg-white text-primary hover:bg-white/90">Explore Bulk Options</Button>
                  </Link>
                </div>
             </div>
             
             <div className="group relative overflow-hidden rounded-2xl h-[400px]">
                <img src={breadImage} alt="Artisanal Baking" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Specialty Blends</h3>
                  <p className="text-gray-300 mb-4 max-w-md">Custom formulations for artisanal bread, pastries, and specific culinary needs.</p>
                  <Link href="/products">
                    <Button className="bg-secondary text-primary hover:bg-secondary/90 border-none">View Specialty Flours</Button>
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={factoryImage} alt="" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to upgrade your production?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Get in touch with our sales team for specifications, samples, and competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg h-14 px-10">
                Contact Sales
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg h-14 px-10">
                Become a Distributor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
