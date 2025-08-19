import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Heart, Award, Users, Trophy } from "lucide-react";

export default function About() {
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
              Your Safety, Our Legacy
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              We are a local team dedicated to making every community event safe, organized, and family-friendly.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-seu-navy mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-6 text-lg">
                  Security Events Unlimited was founded with a simple mission: to provide professional, community-focused security services that allow event organizers and attendees to focus on what matters most - creating memorable experiences.
                </p>
                <p className="text-gray-700 mb-6">
                  As a local Central Coast company, we understand the unique needs of our community. From high school sports games to large music festivals, we provide scalable security solutions that maintain the welcoming atmosphere our region is known for.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="text-seu-gold mr-3 w-5 h-5" />
                    <span className="text-gray-700">Over 500 successful events secured</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-seu-gold mr-3 w-5 h-5" />
                    <span className="text-gray-700">100% client satisfaction rate</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-seu-gold mr-3 w-5 h-5" />
                    <span className="text-gray-700">Zero major incidents on record</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Professional security team in uniform" 
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-seu-navy mb-12 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center shadow-lg">
                <CardContent className="p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                    alt="Security director and company founder" 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-seu-navy">James Martinez</h3>
                  <p className="text-seu-gold font-medium mb-3">Founder & CEO</p>
                  <p className="text-gray-600 text-sm">Former law enforcement with 15 years of security industry experience. Dedicated to community safety and professional excellence.</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg">
                <CardContent className="p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                    alt="Operations manager and safety coordinator" 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-seu-navy">Lisa Thompson</h3>
                  <p className="text-seu-gold font-medium mb-3">Operations Manager</p>
                  <p className="text-gray-600 text-sm">Emergency medical background and certified safety instructor. Ensures all operations meet the highest safety standards.</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg">
                <CardContent className="p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                    alt="Training coordinator and security specialist" 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-seu-navy">Robert Kim</h3>
                  <p className="text-seu-gold font-medium mb-3">Training Coordinator</p>
                  <p className="text-gray-600 text-sm">Military background and crowd management specialist. Leads our comprehensive training programs for all personnel.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-seu-navy mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-seu-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-seu-navy text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-seu-navy mb-3">Professional Excellence</h3>
                  <p className="text-gray-600">We maintain the highest standards of training, appearance, and conduct in all our security operations.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-seu-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="text-seu-navy text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-seu-navy mb-3">Community First</h3>
                  <p className="text-gray-600">Our local roots run deep. We're committed to supporting and protecting our Central Coast community.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-seu-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Heart className="text-seu-navy text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-seu-navy mb-3">Compassionate Security</h3>
                  <p className="text-gray-600">We believe security should be protective yet approachable, maintaining safety while preserving the joy of events.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-seu-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Trophy className="text-seu-navy text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-seu-navy mb-3">Proven Results</h3>
                  <p className="text-gray-600">Our track record speaks for itself - hundreds of successful events with zero major incidents.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-seu-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-seu-navy text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-seu-navy mb-3">Reliability</h3>
                  <p className="text-gray-600">When you hire SEU, you can count on us to deliver consistent, dependable security services every time.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-seu-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Award className="text-seu-navy text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-seu-navy mb-3">Continuous Improvement</h3>
                  <p className="text-gray-600">We continuously invest in training, technology, and processes to stay ahead of security challenges.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-seu-navy mb-8 text-center">Certifications & Memberships</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="w-16 h-16 bg-seu-gold rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Shield className="text-seu-navy text-2xl" />
                    </div>
                    <h4 className="font-semibold text-seu-navy">CA Licensed</h4>
                    <p className="text-sm text-gray-600">State Security License</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-seu-gold rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Heart className="text-seu-navy text-2xl" />
                    </div>
                    <h4 className="font-semibold text-seu-navy">CPR/AED</h4>
                    <p className="text-sm text-gray-600">American Red Cross</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-seu-gold rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Award className="text-seu-navy text-2xl" />
                    </div>
                    <h4 className="font-semibold text-seu-navy">ASIS Certified</h4>
                    <p className="text-sm text-gray-600">Professional Standards</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-seu-gold rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Users className="text-seu-navy text-2xl" />
                    </div>
                    <h4 className="font-semibold text-seu-navy">Chamber Member</h4>
                    <p className="text-sm text-gray-600">Central Coast</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20 bg-seu-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Community Involvement</h2>
            <p className="text-xl text-gray-300 mb-12">
              Beyond providing security services, we're proud to be active members of the Central Coast community through our 805 Safe Initiative and various local partnerships.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl text-seu-gold mb-4">25+</div>
                  <h4 className="text-white font-semibold mb-2">Community Events</h4>
                  <p className="text-gray-300 text-sm">Supported annually through reduced-cost services</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl text-seu-gold mb-4">$50K+</div>
                  <h4 className="text-white font-semibold mb-2">Donated Services</h4>
                  <p className="text-gray-300 text-sm">In security services to qualifying community events</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl text-seu-gold mb-4">15+</div>
                  <h4 className="text-white font-semibold mb-2">Local Sponsors</h4>
                  <p className="text-gray-300 text-sm">Supporting our 805 Safe Initiative program</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
