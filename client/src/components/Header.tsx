import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Resources", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-seu-navy shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-seu-gold rounded-lg flex items-center justify-center">
              <Shield className="text-seu-navy text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Security Events</h1>
              <p className="text-seu-gold text-sm font-medium">UNLIMITED</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-medium transition-colors",
                  location === item.href
                    ? "text-seu-gold"
                    : "text-white hover:text-seu-gold"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-seu-gold text-seu-navy hover:bg-yellow-500">
              <Link href="/quote">Get Quote</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "font-medium transition-colors py-2",
                    location === item.href
                      ? "text-seu-gold"
                      : "text-white hover:text-seu-gold"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-seu-gold text-seu-navy hover:bg-yellow-500 w-fit">
                <Link href="/quote" onClick={() => setMobileMenuOpen(false)}>Get Quote</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
