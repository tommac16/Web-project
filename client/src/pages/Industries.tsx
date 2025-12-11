import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, Store, ShoppingBag, Utensils, Check } from "lucide-react";
import { Link } from "wouter";
import breadImage from "@assets/generated_images/assortment_of_fresh_breads.png";

export default function Industries() {
  const industries = [
    {
      id: "industrial",
      title: "Industrial Bakeries",
      icon: Factory,
      description: "For high-volume production lines requiring absolute consistency.",
      benefits: [
        "Consistent rheology for automated lines",
        "Just-in-time bulk delivery (Silo trucks)",
        "Custom formulations for specific shelf-life needs",
        "Technical support for line optimization"
      ]
    },
    {
      id: "artisan",
      title: "Artisan & Small Bakeries",
      icon: Store,
      description: "Premium flours that honor traditional baking methods.",
      benefits: [
        "High water absorption for better yield",
        "Robust fermentation tolerance",
        "Excellent crust and crumb texture",
        "Manageable 25kg packaging"
      ]
    },
    {
      id: "food-service",
      title: "Hotels & Restaurants",
      icon: Utensils,
      description: "Versatile solutions for diverse culinary applications.",
      benefits: [
        "All-purpose reliability",
        "Specialty pastry flours for desserts",
        "Consistent performance for pasta and pizza",
        "Regular delivery schedules"
      ]
    },
    {
      id: "retail",
      title: "Supermarkets & Retail",
      icon: ShoppingBag,
      description: "Consumer-ready packaging for home bakers.",
      benefits: [
        "Attractive 1kg, 2kg, and 5kg packaging",
        "Private label manufacturing options",
        "Marketing support and POS materials",
        "Long shelf stability"
      ]
    }
  ];

  return (
    <Layout>
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Industries Served</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We tailor our supply chain and product specifications to meet the unique demands of your business sector.
          </p>
        </div>
      </div>

      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {industries.map((industry) => (
            <Card key={industry.id} className="overflow-hidden border-none shadow-lg group">
              <div className="bg-primary h-2 w-full group-hover:bg-secondary transition-colors" />
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <industry.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">{industry.title}</h2>
                </div>
                
                <p className="text-muted-foreground mb-8 text-lg">
                  {industry.description}
                </p>

                <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">Key Benefits</h4>
                <ul className="space-y-3 mb-8">
                  {industry.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link href={`/contact`}>
                  <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all">
                    Inquire for {industry.title}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Study / Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
               <img src={breadImage} alt="Success Story" className="rounded-2xl shadow-xl w-full object-cover h-[400px]" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-secondary font-bold uppercase tracking-widest mb-2">Success Story</h3>
              <h2 className="text-3xl font-bold text-primary mb-6">Supporting Growth for "Golden Crust Bakery"</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Since switching to Senay Flour Factory three years ago, our production waste has dropped by 15% thanks to their consistent protein quality. Their technical team even helped us tweak our mixing process."
              </p>
              <div className="border-l-4 border-secondary pl-4">
                <p className="font-bold text-primary">Ahmed Y.</p>
                <p className="text-sm text-gray-500">Production Manager, Golden Crust Industrial Bakery</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
