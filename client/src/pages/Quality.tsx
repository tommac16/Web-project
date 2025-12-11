import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, FlaskConical, Award, Leaf, Search } from "lucide-react";
import labImage from "@assets/generated_images/quality_control_lab_testing.png";

export default function Quality() {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <div className="absolute -right-20 -top-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
             <div className="absolute left-20 bottom-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Uncompromising Quality</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            From the selection of the finest wheat grains to the final packaging, every step of our process is monitored to ensure safety, consistency, and purity.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={labImage} alt="Quality Control Lab" className="w-full h-auto" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <p className="text-white font-medium italic">"Our laboratory operates 24/7 to test every batch before it leaves the facility."</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-bold mb-6">
                <FlaskConical className="h-4 w-4" /> Lab Tested
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Science Meets Tradition</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our state-of-the-art laboratory is equipped with the latest rheological instruments (Alveograph, Farinograph, Extensograph) to analyze the physical properties of dough.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                This allows us to guarantee that the flour you receive today behaves exactly like the flour you received last month, eliminating production headaches for your bakery.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Protein Content Analysis",
                  "Moisture Control",
                  "Ash Content Verification",
                  "Gluten Index Testing",
                  "Falling Number Test",
                  "Water Absorption Rate"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gray-50 rounded-3xl p-12 text-center border border-gray-100">
             <h2 className="text-3xl font-bold text-primary mb-12">Our Certifications</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {[
                  { name: "ISO 22000", desc: "Food Safety Management" },
                  { name: "HACCP", desc: "Hazard Analysis" },
                  { name: "Halal Certified", desc: "Compliance" },
                  { name: "FSSC 22000", desc: "Global Standard" }
                ].map((cert, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="h-24 w-24 rounded-full bg-white shadow-md flex items-center justify-center border-4 border-primary/5 mb-4 group hover:scale-110 transition-transform duration-300">
                      <Award className="h-10 w-10 text-primary/40 group-hover:text-secondary transition-colors" />
                    </div>
                    <h3 className="font-bold text-lg text-primary">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.desc}</p>
                  </div>
                ))}
             </div>
          </div>

          {/* Process Steps */}
          <div className="py-24">
            <h2 className="text-3xl font-bold text-center text-primary mb-16">The Quality Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
               {/* Connector Line (Desktop) */}
               <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>

               {[
                 { title: "Sourcing", icon: Leaf, text: "Selecting premium wheat varieties from trusted growers." },
                 { title: "Cleaning", icon: Search, text: "Multi-stage cleaning removes all impurities and foreign matter." },
                 { title: "Milling", icon: FlaskConical, text: "Precision grinding and sifting to exact particle specifications." },
                 { title: "Testing", icon: CheckCircle2, text: "Final lab approval before packaging and dispatch." }
               ].map((step, i) => (
                 <div key={i} className="relative z-10 flex flex-col items-center text-center">
                    <div className="h-24 w-24 rounded-full bg-white border-4 border-secondary flex items-center justify-center mb-6 shadow-lg">
                      <step.icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed px-4">{step.text}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
