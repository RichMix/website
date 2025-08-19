import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, UserCheck, Truck, AlertTriangle, Heart, Award } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-seu-navy/90 to-seu-navy/60">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800" 
            alt="Professional security team" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Professional Security Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Comprehensive security services designed to protect what matters most - your events, your people, and your peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-seu-gold rounded-lg flex items-center justify-center mb-6">
                  <Shield className="text-seu-navy text-3xl" />
                </div>
                <h3 className="text-3xl font-bold text-seu-navy mb-4">Event Security</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Professional security personnel for concerts, festivals, sports events, and community gatherings.
                </p>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li className="flex items-start">
                    <span className="text-seu-gold mr-3 mt-1">•</span>
                    <span>Access control and perimeter security management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-seu-gold mr-3 mt-1">•</span>
                    <span>Bag checks and security screening procedures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-seu-gold mr-3 mt-1">•</span>
                    <span>Incident response and de-escalation techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-seu-gold mr-3 mt-1">•</span>
                    <span>24/7 monitoring and surveillance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-seu-gold rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-seu-navy text-3xl" />
                </div>
                <h3 className="text-3xl font-bold text-seu-navy mb-4">Crowd Management</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Expert crowd flow management to ensure safe and enjoyable experiences for all attendees.
                </p>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li className="flex items-start">
                    <span className="text-seu-gold mr-3 mt-1">•</span>
                    <span>Traffic flow optimization and pedestrian control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-seu-gold mr-3 mt-1">•</span>
                    <span>Emergency evacuation planning and execution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-seu-gold mr-3 mt-1">•</span>
                    <span>Capacity monitoring and crowd density management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-seu-gold mr-3 mt-1">•</span>
                    <span>Queue management and line control</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-seu-gold rounded-lg flex items-center justify-center mb-6">
                  <UserCheck className="text-seu-navy text-3xl" />
                </div>
                <h3 className="text-3xl font-bold text-seu-navy mb-4">VIP Protection</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Discreet protection services for high-profile guests, performers, and event organizers.
                </p>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li className="flex items-start">
                    <span className="text-seu-gold mr-3 mt-1">•</span>
                    <span>Personal protection details and close protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-seu-gold mr-3 mt-1">•</span>
                    <span>Secure transportation coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-seu-gold mr-3 mt-1">•</span>
                    <span>Threat assessment and risk mitigation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-seu-gold mr-3 mt-1">•</span>
                    <span>Venue security surveys and advance planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-seu-gold rounded-lg flex items-center justify-center mb-6">
                  <Truck className="text-seu-navy text-3xl" />
                </div>
                <h3 className="text-3xl font-bold text-seu-navy mb-4">Mobile Safety Units</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Self-contained mobile command centers with communication and first aid capabilities.
                </p>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li className="flex items-start">
                    <span className="text-seu-gold mr-3 mt-1">•</span>
                    <span>Command and control centers with communication systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-seu-gold mr-3 mt-1">•</span>
                    <span>First aid stations with certified medical personnel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-seu-gold mr-3 mt-1">•</span>
                    <span>Real-time monitoring and surveillance equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-seu-gold mr-3 mt-1">•</span>
                    <span>Emergency response coordination</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-seu-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="text-seu-navy text-2xl" />
                </div>
                <h4 className="text-xl font-semibold text-seu-navy mb-3">Emergency Response</h4>
                <p className="text-gray-600">Rapid response teams trained in emergency procedures and crisis management.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-seu-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-seu-navy text-2xl" />
                </div>
                <h4 className="text-xl font-semibold text-seu-navy mb-3">Medical Support</h4>
                <p className="text-gray-600">CPR and First Aid certified personnel available for medical emergencies.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-seu-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="text-seu-navy text-2xl" />
                </div>
                <h4 className="text-xl font-semibold text-seu-navy mb-3">Consultation Services</h4>
                <p className="text-gray-600">Pre-event security assessments and safety planning consultations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance & Training Standards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-seu-navy mb-8">Compliance & Training Standards</h2>
            <p className="text-xl text-gray-600 mb-12">
              We maintain the highest standards of training and certification to ensure professional, reliable security services.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-seu-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-seu-navy text-2xl" />
                </div>
                <h4 className="font-semibold text-seu-navy mb-2">CA Licensed</h4>
                <p className="text-sm text-gray-600">State Security License</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-seu-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-seu-navy text-2xl" />
                </div>
                <h4 className="font-semibold text-seu-navy mb-2">CPR/AED</h4>
                <p className="text-sm text-gray-600">American Red Cross Certified</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-seu-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="text-seu-navy text-2xl" />
                </div>
                <h4 className="font-semibold text-seu-navy mb-2">ASIS Certified</h4>
                <p className="text-sm text-gray-600">Professional Standards</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-seu-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="text-seu-navy text-2xl" />
                </div>
                <h4 className="font-semibold text-seu-navy mb-2">Insured</h4>
                <p className="text-sm text-gray-600">Full Liability Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-seu-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Book Your Security Team?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and custom security plan for your next event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-seu-gold text-seu-navy hover:bg-yellow-500">
              <Link href="/quote">Get Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-seu-navy">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
