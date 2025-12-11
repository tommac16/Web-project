import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Wheat, Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Quality", href: "/quality" },
    { label: "Industries", href: "/industries" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-xs md:text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Phone className="h-3 w-3" /> +1 (555) 123-4567</span>
            <span className="flex items-center gap-2"><Mail className="h-3 w-3" /> sales@senayflour.com</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="opacity-80">Trusted by 500+ Bakeries</span>
            <div className="flex gap-2">
               <Facebook className="h-3 w-3 cursor-pointer hover:text-secondary" />
               <Linkedin className="h-3 w-3 cursor-pointer hover:text-secondary" />
               <Instagram className="h-3 w-3 cursor-pointer hover:text-secondary" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className="bg-secondary/10 p-2 rounded-lg group-hover:bg-secondary/20 transition-colors">
                <Wheat className="h-8 w-8 text-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none text-primary">SENAY</span>
                <span className="text-[10px] tracking-widest uppercase text-muted-foreground font-medium">Flour Factory</span>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={`text-sm font-medium transition-colors hover:text-secondary ${
                  location === item.href ? "text-primary font-semibold" : "text-muted-foreground"
                }`}>
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-primary font-bold">
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <a 
                      className={`text-lg font-medium py-2 border-b border-border/50 ${
                        location === item.href ? "text-primary" : "text-muted-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
                <Link href="/contact">
                  <Button className="w-full mt-4 bg-secondary hover:bg-secondary/90 text-primary font-bold" onClick={() => setIsOpen(false)}>
                    Get a Quote
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Wheat className="h-8 w-8 text-secondary" />
                <span className="font-heading font-bold text-xl text-white">SENAY</span>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
                Providing consistent, high-quality flour to bakeries and industries since 1995. Committed to food safety and milling excellence.
              </p>
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors cursor-pointer">
                  <Facebook className="h-4 w-4" />
                </div>
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors cursor-pointer">
                  <Linkedin className="h-4 w-4" />
                </div>
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors cursor-pointer">
                  <Instagram className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-secondary font-heading font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/about"><a className="hover:text-secondary transition-colors">About Us</a></Link></li>
                <li><Link href="/products"><a className="hover:text-secondary transition-colors">Our Products</a></Link></li>
                <li><Link href="/quality"><a className="hover:text-secondary transition-colors">Quality & Safety</a></Link></li>
                <li><Link href="/industries"><a className="hover:text-secondary transition-colors">Industries Served</a></Link></li>
                <li><Link href="/contact"><a className="hover:text-secondary transition-colors">Contact Support</a></Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-secondary font-heading font-bold mb-6">Products</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/products"><a className="hover:text-secondary transition-colors">Bread Flour</a></Link></li>
                <li><Link href="/products"><a className="hover:text-secondary transition-colors">Pastry Flour</a></Link></li>
                <li><Link href="/products"><a className="hover:text-secondary transition-colors">Whole Wheat</a></Link></li>
                <li><Link href="/products"><a className="hover:text-secondary transition-colors">Industrial Blends</a></Link></li>
                <li><Link href="/products"><a className="hover:text-secondary transition-colors">Specialty Grains</a></Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-secondary font-heading font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span>123 Industrial Zone, Milling District,<br />City, Country 12345</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-secondary shrink-0" />
                  <span>info@senayflour.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Senay Flour Factory. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
