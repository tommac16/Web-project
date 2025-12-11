import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Users, History, Target, TrendingUp } from "lucide-react";
import factoryImage from "@assets/generated_images/modern_flour_milling_factory_interior.png";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={factoryImage} alt="Factory Interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/90">
            Building a legacy of quality milling since 1995.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
            <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
               <Target className="text-secondary h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To provide the highest quality flour products to our customers through sustainable practices, innovative milling technology, and unwavering commitment to food safety. We aim to be the most trusted partner in the baking industry.
            </p>
          </div>
          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
             <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
               <TrendingUp className="text-secondary h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be the regional leader in grain processing, recognized for our operational excellence and contribution to food security, while fostering growth for our farmers, employees, and partners.
            </p>
          </div>
        </div>
      </section>

      {/* History Timeline (Simplified) */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4 text-center md:text-right">
                <span className="text-4xl font-bold text-secondary">1995</span>
              </div>
              <div className="md:w-3/4 border-l-2 border-white/20 pl-8 pb-2">
                <h3 className="text-xl font-bold mb-2">Foundation</h3>
                <p className="text-white/70">Senay Flour Factory was established with a small capacity of 50 tons per day, serving local bakeries.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4 text-center md:text-right">
                <span className="text-4xl font-bold text-secondary">2005</span>
              </div>
              <div className="md:w-3/4 border-l-2 border-white/20 pl-8 pb-2">
                <h3 className="text-xl font-bold mb-2">Expansion & Modernization</h3>
                <p className="text-white/70">Major investment in European milling technology increased capacity to 200 tons/day. First ISO certification achieved.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4 text-center md:text-right">
                <span className="text-4xl font-bold text-secondary">2018</span>
              </div>
              <div className="md:w-3/4 border-l-2 border-white/20 pl-8 pb-2">
                <h3 className="text-xl font-bold mb-2">New Industrial Facility</h3>
                <p className="text-white/70">Opened our current state-of-the-art facility with automated packaging and bulk storage silos. Capacity reached 500 tons/day.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4 text-center md:text-right">
                <span className="text-4xl font-bold text-secondary">Today</span>
              </div>
              <div className="md:w-3/4 border-l-2 border-white/20 pl-8 pb-2">
                <h3 className="text-xl font-bold mb-2">Market Leader</h3>
                <p className="text-white/70">Exporting to 5 countries and serving over 500 industrial and artisan partners locally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Leadership */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Leadership & Values</h2>
          <p className="text-muted-foreground">Guided by integrity and a passion for agriculture.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Integrity", text: "We do what we say. We believe in transparent relationships with farmers and customers alike." },
             { title: "Innovation", text: "We constantly upgrade our technology to improve efficiency and product quality." },
             { title: "Sustainability", text: "We are committed to reducing our carbon footprint and supporting sustainable farming practices." }
           ].map((val, i) => (
             <div key={i} className="text-center p-6">
               <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
               <h3 className="text-xl font-bold text-primary mb-3">{val.title}</h3>
               <p className="text-muted-foreground">{val.text}</p>
             </div>
           ))}
        </div>
      </section>
    </Layout>
  );
}
