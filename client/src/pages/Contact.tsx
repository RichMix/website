import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Clock, Shield } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      expectedAttendance: "",
      eventLocation: "",
      additionalDetails: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 2 hours during business hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to Send Message",
        description: "Please try again or call us directly at (805) 555-SAFE",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-seu-navy/90 to-seu-navy/60">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800" 
            alt="Security professional on phone" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Secure Your Next Event
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Ready to ensure your event's safety? Get in touch with our security experts today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="text-seu-gold mr-3 w-6 h-6" />
                    <h2 className="text-2xl font-bold text-seu-navy">Get Your Free Security Consultation</h2>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name *</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input type="tel" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="eventType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Event Type</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value || ""}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Event Type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Concert/Music Festival">Concert/Music Festival</SelectItem>
                                <SelectItem value="Sports Event">Sports Event</SelectItem>
                                <SelectItem value="Community Festival">Community Festival</SelectItem>
                                <SelectItem value="Corporate Event">Corporate Event</SelectItem>
                                <SelectItem value="Private Event">Private Event</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="eventDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Event Date</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="expectedAttendance"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Expected Attendance</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value || ""}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Attendance" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Under 100">Under 100</SelectItem>
                                  <SelectItem value="100-500">100-500</SelectItem>
                                  <SelectItem value="500-1,000">500-1,000</SelectItem>
                                  <SelectItem value="1,000-5,000">1,000-5,000</SelectItem>
                                  <SelectItem value="5,000+">5,000+</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="eventLocation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Event Location</FormLabel>
                            <FormControl>
                              <Input placeholder="City, Venue" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="additionalDetails"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Details</FormLabel>
                            <FormControl>
                              <Textarea 
                                rows={4} 
                                placeholder="Tell us about your event's specific security needs..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full bg-seu-gold text-seu-navy hover:bg-yellow-500 py-4 text-lg font-semibold"
                        disabled={contactMutation.isPending}
                      >
                        {contactMutation.isPending ? "Sending..." : "Get My Free Consultation"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-seu-navy mb-6">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-seu-gold rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <Phone className="text-seu-navy text-xl" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-seu-navy mb-1">Phone</h4>
                          <p className="text-gray-600">(805) 555-SAFE (7233)</p>
                          <p className="text-sm text-gray-500">24/7 Emergency Line</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-seu-gold rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <Mail className="text-seu-navy text-xl" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-seu-navy mb-1">Email</h4>
                          <p className="text-gray-600">info@securityeventsunlimited.com</p>
                          <p className="text-sm text-gray-500">Response within 2 hours</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-seu-gold rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <MapPin className="text-seu-navy text-xl" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-seu-navy mb-1">Office</h4>
                          <p className="text-gray-600">123 Main Street<br />San Luis Obispo, CA 93401</p>
                          <p className="text-sm text-gray-500">By appointment only</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-seu-gold rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <Clock className="text-seu-navy text-xl" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-seu-navy mb-1">Business Hours</h4>
                          <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM<br />Weekend: Emergency only</p>
                          <p className="text-sm text-gray-500">24/7 event support available</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Map Placeholder */}
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-seu-navy mb-4">Our Location</h3>
                    <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MapPin className="w-12 h-12 mx-auto mb-4" />
                        <p className="font-semibold">Interactive Google Maps</p>
                        <p className="text-sm">123 Main Street, San Luis Obispo</p>
                        <p className="text-sm mt-2">Central Coast, CA 93401</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-seu-navy mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="w-12 h-12 bg-seu-navy rounded-lg flex items-center justify-center hover:bg-seu-gold hover:text-seu-navy transition-colors group"
                      >
                        <Facebook className="w-5 h-5 text-white group-hover:text-seu-navy" />
                      </a>
                      <a 
                        href="#" 
                        className="w-12 h-12 bg-seu-navy rounded-lg flex items-center justify-center hover:bg-seu-gold hover:text-seu-navy transition-colors group"
                      >
                        <Linkedin className="w-5 h-5 text-white group-hover:text-seu-navy" />
                      </a>
                      <a 
                        href="#" 
                        className="w-12 h-12 bg-seu-navy rounded-lg flex items-center justify-center hover:bg-seu-gold hover:text-seu-navy transition-colors group"
                      >
                        <Instagram className="w-5 h-5 text-white group-hover:text-seu-navy" />
                      </a>
                    </div>
                    <p className="text-gray-600 text-sm mt-4">
                      Stay updated with our latest news, safety tips, and community involvement.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-seu-navy mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-seu-navy mb-3">How far in advance should I book security services?</h4>
                  <p className="text-gray-600">We recommend booking at least 2-4 weeks in advance for optimal planning. However, we can accommodate last-minute requests based on availability and event complexity.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-seu-navy mb-3">Do you provide security for private events?</h4>
                  <p className="text-gray-600">Yes, we provide security services for all types of events including private parties, corporate functions, weddings, and family gatherings.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-seu-navy mb-3">Are your security personnel licensed and insured?</h4>
                  <p className="text-gray-600">Absolutely. All our security personnel are fully licensed by the State of California, bonded, and covered by comprehensive insurance. We maintain all required certifications and exceed industry standards.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-seu-navy mb-3">What areas do you serve?</h4>
                  <p className="text-gray-600">We primarily serve the Central Coast region including San Luis Obispo, Santa Barbara, Monterey, and surrounding areas. Contact us to confirm service availability for your specific location.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
