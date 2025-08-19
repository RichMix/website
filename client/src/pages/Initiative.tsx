import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, DollarSign, Heart, Award, Building2, Handshake } from "lucide-react";
import { Link } from "wouter";

export default function Initiative() {
  const impactStats = [
    { number: "25+", label: "Community Events", description: "Supported annually" },
    { number: "$50K+", label: "Donated Services", description: "In security support" },
    { number: "15+", label: "Local Sponsors", description: "Supporting safety" },
    { number: "50,000+", label: "People Protected", description: "Through the initiative" }
  ];

  const sponsors = [
    { name: "Central Coast Bank", category: "Financial Services", logo: "🏛️" },
    { name: "Pacific Insurance Group", category: "Insurance", logo: "🛡️" },
    { name: "SLO Auto Dealers", category: "Automotive", logo: "🚗" },
    { name: "Coastal Restaurant Group", category: "Hospitality", logo: "🍽️" },
    { name: "Tech Valley Solutions", category: "Technology", logo: "💻" },
    { name: "Green Energy Co-op", category: "Renewable Energy", logo: "⚡" },
    { name: "Community Health Partners", category: "Healthcare", logo: "⚕️" },
    { name: "Central Coast Builders", category: "Construction", logo: "🏗️" }
  ];

  const supportedEvents = [
    {
      title: "Annual Youth Sports Tournament",
      description: "Providing security for 500+ young athletes and their families",
      impact: "Zero incidents, 100% family satisfaction",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Community Health Fair",
      description: "Free health screenings and safety education for 2,000+ residents",
      impact: "Secure environment for medical equipment and patient privacy",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Senior Center Fundraiser",
      description: "Annual gala supporting local senior services",
      impact: "Dignified security presence appropriate for senior community",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-seu-navy/90 to-seu-navy/60">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800" 
            alt="Community event with families" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              805 Safe Initiative
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Supporting community safety through partnerships with local sponsors and organizations. Together, we're making the Central Coast safer for everyone.
            </p>
            <Button asChild size="lg" className="bg-seu-gold text-seu-navy hover:bg-yellow-500">
              <a href="#become-sponsor">Become a Sponsor</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold text-seu-navy mb-6">Building Safer Communities Together</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The 805 Safe Initiative brings together local businesses, nonprofits, and community leaders to enhance safety at public events throughout the Central Coast. Through sponsor partnerships, we provide reduced-cost or donated security services to qualifying community events.
                </p>
                <p className="text-gray-700 mb-6">
                  Our mission is simple: no community event should go without proper security due to budget constraints. When local businesses support community safety, everyone benefits from a stronger, more connected Central Coast.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="text-seu-gold mr-4 w-6 h-6 flex-shrink-0" />
                    <span className="text-gray-700">Reduced-cost security for qualifying nonprofits and community groups</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-seu-gold mr-4 w-6 h-6 flex-shrink-0" />
                    <span className="text-gray-700">Free safety consultations for community event organizers</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-seu-gold mr-4 w-6 h-6 flex-shrink-0" />
                    <span className="text-gray-700">Educational workshops on event safety and emergency preparedness</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-seu-gold mr-4 w-6 h-6 flex-shrink-0" />
                    <span className="text-gray-700">Priority booking for participating organizations</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
                  alt="Community volunteers and families" 
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-seu-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Our Community Impact</h2>
            <p className="text-xl text-gray-300 mb-12">
              Since launching the 805 Safe Initiative, we've made a measurable difference in community safety and accessibility.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-seu-gold mb-2">{stat.number}</div>
                    <h4 className="text-white font-semibold mb-2">{stat.label}</h4>
                    <p className="text-gray-300 text-sm">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supported Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-seu-navy mb-12 text-center">Events We've Supported</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {supportedEvents.map((event, index) => (
                <Card key={index} className="overflow-hidden shadow-lg">
                  <div className="relative">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-seu-navy/70 to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-seu-navy mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="bg-seu-gold/10 p-4 rounded-lg">
                      <h4 className="text-seu-navy font-semibold mb-2">Impact:</h4>
                      <p className="text-gray-700 text-sm">{event.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Organizations Can Apply */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-seu-navy mb-12 text-center">How to Apply for Support</h2>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-seu-navy mb-4">Eligibility Requirements</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="text-seu-gold mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>501(c)(3) nonprofit organization or community group</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-seu-gold mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>Event serves Central Coast community</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-seu-gold mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>Educational, charitable, or community benefit focus</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-seu-gold mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>Demonstrated financial need for security services</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-seu-gold mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>Event expected attendance of 100+ people</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-seu-navy mb-4">Application Process</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-seu-gold rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-seu-navy font-bold">1</div>
                        <div>
                          <h4 className="font-semibold text-seu-navy">Submit Application</h4>
                          <p className="text-gray-600 text-sm">Complete our online application at least 6 weeks before your event</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-seu-gold rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-seu-navy font-bold">2</div>
                        <div>
                          <h4 className="font-semibold text-seu-navy">Review Process</h4>
                          <p className="text-gray-600 text-sm">Our team reviews your application and event needs within 5 business days</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-seu-gold rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-seu-navy font-bold">3</div>
                        <div>
                          <h4 className="font-semibold text-seu-navy">Site Visit</h4>
                          <p className="text-gray-600 text-sm">Free security consultation and venue assessment</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-seu-gold rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-seu-navy font-bold">4</div>
                        <div>
                          <h4 className="font-semibold text-seu-navy">Approval & Planning</h4>
                          <p className="text-gray-600 text-sm">Customized security plan and service agreement</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button asChild size="lg" className="bg-seu-gold text-seu-navy hover:bg-yellow-500">
                    <Link href="/contact">Apply for Support</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-seu-navy mb-6 text-center">Our Community Partners</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              These local businesses and organizations make community safety possible through their generous support of the 805 Safe Initiative.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {sponsors.map((sponsor, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{sponsor.logo}</div>
                    <h4 className="text-lg font-semibold text-seu-navy mb-2">{sponsor.name}</h4>
                    <p className="text-gray-600 text-sm">{sponsor.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-6">Join these community leaders in supporting Central Coast safety.</p>
              <Button asChild variant="outline" size="lg">
                <a href="#become-sponsor">View All Partners</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Sponsor */}
      <section id="become-sponsor" className="py-20 bg-seu-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Become a 805 Safe Sponsor</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join local business leaders in supporting community safety while gaining valuable brand exposure and demonstrating your commitment to the Central Coast.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8 text-center">
                  <Building2 className="text-seu-gold w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">Bronze Sponsor</h3>
                  <div className="text-3xl font-bold text-seu-gold mb-4">$2,500</div>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Logo on event materials</li>
                    <li>• Website recognition</li>
                    <li>• Social media mentions</li>
                    <li>• Supports 2-3 events annually</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-seu-gold border-2">
                <CardContent className="p-8 text-center">
                  <Award className="text-seu-gold w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">Silver Sponsor</h3>
                  <div className="text-3xl font-bold text-seu-gold mb-4">$5,000</div>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• All Bronze benefits</li>
                    <li>• Event booth opportunity</li>
                    <li>• Newsletter features</li>
                    <li>• Supports 5-6 events annually</li>
                    <li>• Quarterly impact reports</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8 text-center">
                  <Heart className="text-seu-gold w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">Gold Sponsor</h3>
                  <div className="text-3xl font-bold text-seu-gold mb-4">$10,000</div>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• All Silver benefits</li>
                    <li>• Co-branding opportunities</li>
                    <li>• VIP event access</li>
                    <li>• Supports 10+ events annually</li>
                    <li>• Custom partnership benefits</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">Ready to Make a Difference?</h3>
              <p className="text-gray-300 mb-8">
                Contact us to learn more about sponsorship opportunities and how your business can help keep our community safe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-seu-gold text-seu-navy hover:bg-yellow-500">
                  <Link href="/contact">Become a Sponsor</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-seu-navy">
                  <a href="tel:8055557233">Call (805) 555-SAFE</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-seu-navy mb-6">Together, We Build Safer Communities</h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're an organization needing security support or a business looking to give back, the 805 Safe Initiative offers meaningful ways to contribute to Central Coast community safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-seu-gold text-seu-navy hover:bg-yellow-500">
                <Link href="/contact">Get Involved Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn About SEU</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
