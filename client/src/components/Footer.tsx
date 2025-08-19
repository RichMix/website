import { Link } from "wouter";
import { Shield, Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Footer CTA Section */}
      <section className="py-16 bg-seu-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-seu-navy mb-4">
            Ready to Secure Your Event?
          </h2>
          <p className="text-xl text-seu-navy mb-8 max-w-2xl mx-auto">
            Don't leave your event's safety to chance. Contact our security experts for a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <button className="bg-seu-navy text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors">
                Get Free Quote
              </button>
            </Link>
            <a href="tel:8055557233">
              <button className="border-2 border-seu-navy text-seu-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-seu-navy hover:text-white transition-colors">
                Call (805) 555-SAFE
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-seu-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-seu-gold rounded-lg flex items-center justify-center">
                  <Shield className="text-seu-navy text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Security Events</h3>
                  <p className="text-seu-gold text-sm font-medium">UNLIMITED</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Professional security services for the Central Coast community. Your safety is our mission.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-seu-gold hover:text-seu-navy transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-seu-gold hover:text-seu-navy transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-seu-gold hover:text-seu-navy transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-seu-gold">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/services" className="hover:text-seu-gold transition-colors">Event Security</Link></li>
                <li><Link href="/services" className="hover:text-seu-gold transition-colors">Crowd Management</Link></li>
                <li><Link href="/services" className="hover:text-seu-gold transition-colors">VIP Protection</Link></li>
                <li><Link href="/services" className="hover:text-seu-gold transition-colors">Mobile Safety Units</Link></li>
                <li><Link href="/services" className="hover:text-seu-gold transition-colors">Emergency Response</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-seu-gold">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-seu-gold transition-colors">About Us</Link></li>
                <li><Link href="/case-studies" className="hover:text-seu-gold transition-colors">Case Studies</Link></li>
                <li><Link href="/805-safe" className="hover:text-seu-gold transition-colors">805 Safe Initiative</Link></li>
                <li><Link href="/blog" className="hover:text-seu-gold transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-seu-gold">Contact</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <span className="text-seu-gold mr-3">📞</span>
                  <span>(805) 555-SAFE</span>
                </div>
                <div className="flex items-center">
                  <span className="text-seu-gold mr-3">✉️</span>
                  <span>info@securityeventsunlimited.com</span>
                </div>
                <div className="flex items-start">
                  <span className="text-seu-gold mr-3 mt-1">📍</span>
                  <span>123 Main Street<br />San Luis Obispo, CA 93401</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Security Events Unlimited. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-seu-gold transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-seu-gold transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-seu-gold transition-colors">License Info</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
