
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold">Webilo</span>
            </div>
            <p className="text-gray-400">
              Build beautiful websites without code. Perfect for students, NGOs, and small businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <div className="space-y-2">
              <Link to="/features" className="block text-gray-400 hover:text-white transition-colors">
                Features
              </Link>
              <Link to="/pricing" className="block text-gray-400 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link to="/templates" className="block text-gray-400 hover:text-white transition-colors">
                Templates
              </Link>
              <Link to="/dashboard" className="block text-gray-400 hover:text-white transition-colors">
                Dashboard
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <Link to="/help" className="block text-gray-400 hover:text-white transition-colors">
                Help Center
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link to="/faq" className="block text-gray-400 hover:text-white transition-colors">
                FAQ
              </Link>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Community
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Blog
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Careers
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Webilo. All rights reserved. Built with ❤️ for creators worldwide.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
