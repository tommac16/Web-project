import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Download, Info } from "lucide-react";
import { Link } from "wouter";
import flourImage from "@assets/generated_images/sack_of_flour_with_wheat_stalks.png";

export default function Products() {
  const products = [
    {
      id: "bread-flour",
      name: "Premium Bread Flour",
      category: "Bakery",
      description: "High-protein flour designed for maximum volume and excellent structure. Ideal for artisan loaves, baguettes, and rolls.",
      specs: { protein: "12-13%", ash: "0.55%", moisture: "14%" },
      packaging: ["25kg", "50kg", "Bulk"]
    },
    {
      id: "pastry-flour",
      name: "Fine Pastry Flour",
      category: "Confectionery",
      description: "Low-protein, finely milled flour perfect for delicate textures. Creates tender crumb structures for cakes, cookies, and biscuits.",
      specs: { protein: "8-9%", ash: "0.50%", moisture: "13.5%" },
      packaging: ["25kg", "50kg"]
    },
    {
      id: "all-purpose",
      name: "Senay All-Purpose",
      category: "General Use",
      description: "The versatile choice for diverse kitchen applications. Balanced protein content for consistent results across various recipes.",
      specs: { protein: "10-11%", ash: "0.60%", moisture: "14%" },
      packaging: ["1kg", "5kg", "25kg"]
    },
    {
      id: "pizza-flour",
      name: "00 Pizza Flour",
      category: "Specialty",
      description: "Extremely fine grind with high gluten elasticity. Essential for authentic Neapolitan style pizza crusts.",
      specs: { protein: "12.5%", ash: "0.50%", moisture: "14%" },
      packaging: ["25kg"]
    },
    {
      id: "whole-wheat",
      name: "Stone Ground Whole Wheat",
      category: "Health",
      description: "Contains the germ and bran for full nutritional value and robust flavor. distinctive texture for rustic breads.",
      specs: { protein: "13-14%", ash: "1.5%", moisture: "13%" },
      packaging: ["25kg", "50kg"]
    },
    {
      id: "industrial-mix",
      name: "Industrial Biscuit Mix",
      category: "Industrial",
      description: "Custom formulated blend for high-speed industrial biscuit lines. Consistent rheology for automated processing.",
      specs: { protein: "Custom", ash: "Custom", moisture: "Custom" },
      packaging: ["Bulk Tanker", "1000kg Big Bag"]
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <div className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Products</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From artisanal bakeries to industrial giants, we provide the precise flour specifications you need for perfect results.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar / Filter (Visual only for mockup) */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-lg mb-4 text-primary">Categories</h3>
                <div className="space-y-2">
                  {["All Products", "Bakery Flour", "Pastry & Confectionery", "Industrial & Bulk", "Specialty Blends", "Retail Packs"].map((cat, i) => (
                    <div key={i} className={`p-2 rounded cursor-pointer transition-colors ${i === 0 ? "bg-primary text-white font-medium shadow-md" : "hover:bg-gray-200 text-gray-600"}`}>
                      {cat}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                <h3 className="font-bold text-lg mb-4 text-primary">Need Custom Specs?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We create custom flour blends for industrial partners based on your specific rheological requirements.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-primary text-white">Contact R&D Team</Button>
                </Link>
              </div>
            </div>

            {/* Product Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow border-gray-100 flex flex-col">
                    <div className="h-48 bg-gray-100 relative overflow-hidden group">
                      <img src={flourImage} alt={product.name} className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500" />
                      <Badge className="absolute top-4 right-4 bg-secondary text-primary hover:bg-secondary">
                        {product.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">{product.description}</p>
                      
                      <div className="bg-gray-50 rounded-lg p-3 mb-4 text-xs space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Protein:</span>
                          <span className="font-mono font-semibold text-primary">{product.specs.protein}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Ash:</span>
                          <span className="font-mono font-semibold text-primary">{product.specs.ash}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Moisture:</span>
                          <span className="font-mono font-semibold text-primary">{product.specs.moisture}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.packaging.map((size) => (
                          <span key={size} className="text-[10px] px-2 py-1 bg-gray-100 rounded text-gray-600 font-medium border border-gray-200">
                            {size}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2 mt-auto">
                         <Button variant="outline" size="sm" className="flex-1 border-primary/20 text-primary hover:bg-primary/5">
                            <Info className="h-4 w-4 mr-2" /> Details
                         </Button>
                         <Button size="sm" className="flex-1 bg-primary text-white hover:bg-primary/90">
                            Quote
                         </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Download Full Product Catalog</h2>
            <p className="text-primary-foreground/70">Get the complete technical specifications and logistics details.</p>
          </div>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold">
            <Download className="h-5 w-5 mr-2" /> Download PDF (4.5MB)
          </Button>
        </div>
      </section>
    </Layout>
  );
}
