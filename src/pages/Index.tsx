
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Zap, Users, Globe, Palette, Code, Smartphone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-gray-900 dark:via-background dark:to-gray-800">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            Build Professional Websites Without Code
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-blue-800 to-purple-800 dark:from-gray-100 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Create Stunning Websites
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              In Minutes
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            The perfect website builder for students, NGOs, and small businesses. Drag, 
            drop, and publish your dream website with our intuitive platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://demo.puckeditor.com/edit" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg"
              >
                Start Building Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg border-2 hover:bg-muted"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Hero Image/Demo */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
              <div className="bg-background rounded-xl p-8">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                    <h3 className="text-2xl font-semibold text-foreground">Website Builder Interface</h3>
                    <p className="text-muted-foreground mt-2">Drag & Drop Editor Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Everything You Need to Build Amazing Websites</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help you create professional websites without any coding knowledge.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Drag & Drop Editor</CardTitle>
                <CardDescription>
                  Intuitive visual editor that lets you build websites by simply dragging and dropping elements.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Professional Templates</CardTitle>
                <CardDescription>
                  Choose from dozens of beautiful, responsive templates designed for different industries.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Mobile Responsive</CardTitle>
                <CardDescription>
                  All websites automatically adapt to look perfect on desktop, tablet, and mobile devices.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>No Code Required</CardTitle>
                <CardDescription>
                  Build professional websites without writing a single line of code. Perfect for beginners.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle>Fast Publishing</CardTitle>
                <CardDescription>
                  Publish your website instantly with one click. Get online in minutes, not hours.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Team Collaboration</CardTitle>
                <CardDescription>
                  Work together with your team members on projects with real-time collaboration features.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">About Webilo</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Webilo is a powerful website builder designed specifically for students, NGOs, and small businesses. 
              We believe everyone deserves a professional online presence without the complexity and cost of traditional 
              web development.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
                <p className="text-muted-foreground">Active Users</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">100K+</div>
                <p className="text-muted-foreground">Websites Created</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
                <p className="text-muted-foreground">Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about Webilo
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  What is Webilo and how does it work?
                </AccordionTrigger>
                <AccordionContent>
                  Webilo is a no-code website builder that allows you to create professional websites using a simple drag-and-drop interface. 
                  Simply choose a template, customize it with your content, and publish your site with one click. No technical skills required!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Is Webilo really free to use?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! Webilo offers a completely free plan that includes all the essential features you need to build and publish a basic website. 
                  We also offer premium plans with advanced features like custom domains, unlimited pages, and priority support for those who need more.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Do I need coding knowledge to use Webilo?
                </AccordionTrigger>
                <AccordionContent>
                  Not at all! Webilo is designed for users with zero coding experience. Our intuitive drag-and-drop editor makes it easy 
                  for anyone to create beautiful websites. If you can use a word processor, you can build a website with Webilo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Can I use my own domain name?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! You can connect your existing domain name to your Webilo website or purchase a new one through our platform. 
                  Free plans come with a Webilo subdomain (yoursite.webilo.com), while premium plans support custom domains.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Are Webilo websites mobile-friendly?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely! All Webilo websites are automatically responsive and optimized for mobile devices. Your site will look 
                  great on smartphones, tablets, and desktop computers without any extra effort on your part.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  How many websites can I create?
                </AccordionTrigger>
                <AccordionContent>
                  With the free plan, you can create up to 3 websites. Premium plans offer unlimited website creation, perfect for 
                  agencies, freelancers, or businesses managing multiple brands.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  Is there customer support available?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! We offer email support for all users, including those on the free plan. Premium users get priority support 
                  with faster response times, live chat, and phone support options.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  Can I export my website?
                </AccordionTrigger>
                <AccordionContent>
                  Premium users can export their website's HTML, CSS, and JavaScript files for backup or hosting elsewhere. 
                  This gives you complete ownership and control over your website's code.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. 
                  All payments are processed securely through our encrypted payment gateway.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left">
                  Can I cancel my subscription anytime?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! You can cancel your subscription at any time from your account dashboard. There are no cancellation fees, 
                  and you'll continue to have access to your premium features until the end of your billing period.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Get in Touch</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions or need help? We're here for you!
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Email Support</h3>
                  <p className="text-muted-foreground">support@webilo.com</p>
                  <p className="text-sm text-muted-foreground mt-2">Response within 24 hours</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
                  <p className="text-muted-foreground">Available 9 AM - 6 PM EST</p>
                  <p className="text-sm text-muted-foreground mt-2">For premium users</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Community Forum</h3>
                  <p className="text-muted-foreground">community.webilo.com</p>
                  <p className="text-sm text-muted-foreground mt-2">Join our community</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students, NGOs, and small businesses who trust Webilo to create their online presence.
          </p>
          <a href="https://demo.puckeditor.com/edit" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            >
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
