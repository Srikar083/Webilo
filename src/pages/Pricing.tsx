
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      icon: Zap,
      features: [
        "3 websites",
        "Basic templates",
        "Webilo subdomain",
        "5GB storage",
        "Community support",
        "Basic analytics"
      ],
      buttonText: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "month",
      description: "For serious website builders",
      icon: Crown,
      features: [
        "Unlimited websites",
        "Premium templates",
        "Custom domain",
        "50GB storage",
        "Priority support",
        "Advanced analytics",
        "Remove Webilo branding",
        "SEO tools",
        "Team collaboration"
      ],
      buttonText: "Start Pro Trial",
      popular: true
    },
    {
      name: "Agency",
      price: "$29.99",
      period: "month",
      description: "For agencies and teams",
      icon: Star,
      features: [
        "Everything in Pro",
        "White-label solution",
        "Client management",
        "Unlimited storage",
        "24/7 phone support",
        "Custom integrations",
        "Advanced team features",
        "Priority feature requests"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  const templatePricing = [
    {
      name: "Premium Business",
      price: "$5",
      category: "Business",
      features: ["Mobile responsive", "Contact forms", "SEO optimized"]
    },
    {
      name: "E-commerce Pro",
      price: "$10",
      category: "E-commerce",
      features: ["Shopping cart", "Payment integration", "Inventory management"]
    },
    {
      name: "Event Landing",
      price: "$7",
      category: "Events",
      features: ["Ticket booking", "Event calendar", "Social sharing"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. Start free and upgrade as you grow.
            </p>
          </div>

          {/* Subscription Plans */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <Card key={plan.name} className={`relative ${plan.popular ? 'border-2 border-blue-500 shadow-xl scale-105' : 'border shadow-lg'} hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-1">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-2">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                    plan.popular ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-blue-600' : 'text-gray-600'}`} />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-600">/{plan.period}</span>
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Template Pricing */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Premium Templates</h2>
              <p className="text-gray-600">
                One-time purchase for premium templates with advanced features
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {templatePricing.map((template) => (
                <Card key={template.name} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <Badge variant="outline">{template.category}</Badge>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{template.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {template.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full">
                      Preview & Buy
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-left">
                <h3 className="font-semibold mb-2">Can I switch plans anytime?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                <p className="text-gray-600">Yes, all paid plans come with a 14-day free trial. No credit card required.</p>
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
                <p className="text-gray-600">Absolutely. Cancel anytime with no questions asked. Your sites remain active until the end of your billing period.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
