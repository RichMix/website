import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, UserCheck, Truck, Medal, Heart, Trophy, Star } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-seu-navy/90 to-seu-navy/60">
          <img 
            src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
            alt="Security personnel managing large outdoor concert crowd" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              PROTECTING WHAT<br />
              <span className="text-seu-gold">MATTERS MOST</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white mb-8 max-w-2xl">
              Your community, your events, your peace of mind. Professional security services you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-seu-gold text-seu-navy hover:bg-yellow-500 text-lg px-8 py-6">
                <Link href="/contact">Book a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-seu-navy hover:bg-white hover:text-seu-navy text-lg px-8 py-6">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-seu-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <Medal className="text-seu-gold text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-seu-navy mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed security professionals with comprehensive insurance coverage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-seu-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-seu-gold text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-seu-navy mb-2">Community-Focused Protection</h3>
              <p className="text-gray-600">Local team dedicated to keeping our community events safe and welcoming</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-seu-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-seu-gold text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-seu-navy mb-2">805-Based, Locally Trusted</h3>
              <p className="text-gray-600">Serving the Central Coast with proven track record and community trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-seu-navy mb-4">Our Professional Security Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security services tailored to keep your events safe, organized, and enjoyable for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-seu-gold rounded-lg flex items-center justify-center mb-6">
                  <Shield className="text-seu-navy text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-seu-navy mb-4">Event Security</h3>
                <p className="text-gray-600 mb-6">Professional security personnel for concerts, festivals, sports events, and community gatherings.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Access control & perimeter security</li>
                  <li>• Bag checks & screening</li>
                  <li>• Incident response & de-escalation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-seu-gold rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-seu-navy text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-seu-navy mb-4">Crowd Management</h3>
                <p className="text-gray-600 mb-6">Expert crowd flow management to ensure safe and enjoyable experiences for all attendees.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Traffic flow optimization</li>
                  <li>• Emergency evacuation planning</li>
                  <li>• Capacity monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-seu-gold rounded-lg flex items-center justify-center mb-6">
                  <UserCheck className="text-seu-navy text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-seu-navy mb-4">VIP Protection</h3>
                <p className="text-gray-600 mb-6">Discreet protection services for high-profile guests, performers, and event organizers.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Personal protection details</li>
                  <li>• Secure transportation coordination</li>
                  <li>• Threat assessment & mitigation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-seu-gold rounded-lg flex items-center justify-center mb-6">
                  <Truck className="text-seu-navy text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-seu-navy mb-4">Mobile Safety Units</h3>
                <p className="text-gray-600 mb-6">Self-contained mobile command centers with communication and first aid capabilities.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Command & control centers</li>
                  <li>• First aid stations</li>
                  <li>• Real-time monitoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-seu-gold text-seu-navy hover:bg-yellow-500">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose SEU Section */}
      <section className="py-20 bg-seu-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Why Choose Security Events Unlimited</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence and community safety sets us apart in the security industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-seu-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Medal className="text-seu-navy text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Licensed & Insured</h3>
              <p className="text-gray-300">
                All our security personnel are fully licensed, bonded, and insured. We maintain all required certifications and exceed industry standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-seu-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-seu-navy text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">CPR/First Aid Certified</h3>
              <p className="text-gray-300">
                Our team maintains current CPR and First Aid certifications, ensuring immediate response capability for medical emergencies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-seu-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="text-seu-navy text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Proven Track Record</h3>
              <p className="text-gray-300">
                Over 500 successful events secured across the Central Coast, with zero major incidents and 100% client satisfaction rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-seu-navy mb-4">Community Praise</h2>
            <p className="text-xl text-gray-600">What our clients say about our security services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-seu-gold text-lg">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-6">
                  "SEU provided exceptional security for our annual music festival. Their team was professional, approachable, and kept everyone safe while maintaining the fun atmosphere."
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                    alt="Professional event organizer testimonial" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-seu-navy">Mike Rodriguez</p>
                    <p className="text-gray-600 text-sm">Festival Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-seu-gold text-lg">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-6">
                  "Their crowd management during our high school championship game was flawless. Parents felt safe and the students could focus on the game."
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                    alt="School administrator testimonial" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-seu-navy">Sarah Chen</p>
                    <p className="text-gray-600 text-sm">Athletic Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-seu-gold text-lg">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-6">
                  "Professional, reliable, and locally connected. SEU understands our community and provides security that feels both protective and welcoming."
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                    alt="Community leader testimonial" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-seu-navy">David Thompson</p>
                    <p className="text-gray-600 text-sm">Event Coordinator</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Events Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-seu-navy mb-4">Recent Events</h2>
            <p className="text-xl text-gray-600">A glimpse of our security teams in action at community events</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Championship Game Security",
                attendees: "15,000 attendees • Zero incidents",
                image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              },
              {
                title: "Summer Music Festival",
                attendees: "8,000 attendees • 3-day event",
                image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              },
              {
                title: "Community Fair",
                attendees: "5,000 families • Family-friendly",
                image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              },
              {
                title: "Evening Concert Series",
                attendees: "3,000 attendees • Downtown venue",
                image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              },
              {
                title: "Graduation Ceremony",
                attendees: "2,500 graduates & families",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              },
              {
                title: "Food & Wine Festival",
                attendees: "4,500 attendees • Weekend event",
                image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              }
            ].map((event, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-seu-navy/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="text-sm text-gray-200">{event.attendees}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
