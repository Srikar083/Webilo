
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Zap, Users, Globe, Palette, Code, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            Build Professional Websites Without Code
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Create Stunning Websites
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              In Minutes
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            The perfect website builder for students, NGOs, and small businesses. Drag, 
            drop, and publish your dream website with our intuitive platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/dashboard">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg"
              >
                Start Building Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg border-2 hover:bg-gray-50"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Hero Image/Demo */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
              <div className="bg-white rounded-xl p-8">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                    <h3 className="text-2xl font-semibold text-gray-800">Website Builder Interface</h3>
                    <p className="text-gray-600 mt-2">Drag & Drop Editor Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Build Amazing Websites</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help you create professional websites without any coding knowledge.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
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
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
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
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
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
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
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
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students, NGOs, and small businesses who trust Webilo to create their online presence.
          </p>
          <Link to="/dashboard">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            >
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
