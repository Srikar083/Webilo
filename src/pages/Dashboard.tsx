
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Filter, Folder, Globe, Edit, Trash2, Clock, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const templates = [
    {
      id: 1,
      name: "Business Portfolio",
      category: "Business",
      preview: "/api/placeholder/300/200",
      isPremium: false,
      description: "Perfect for freelancers and agencies"
    },
    {
      id: 2,
      name: "Restaurant Menu",
      category: "Restaurant",
      preview: "/api/placeholder/300/200",
      isPremium: false,
      description: "Beautiful menu display with ordering"
    },
    {
      id: 3,
      name: "NGO Campaign",
      category: "Non-Profit",
      preview: "/api/placeholder/300/200",
      isPremium: false,
      description: "Raise awareness for your cause"
    },
    {
      id: 4,
      name: "Student Portfolio",
      category: "Education",
      preview: "/api/placeholder/300/200",
      isPremium: false,
      description: "Showcase your academic projects"
    },
    {
      id: 5,
      name: "E-commerce Store",
      category: "E-commerce",
      preview: "/api/placeholder/300/200",
      isPremium: false,
      description: "Sell products online with ease"
    },
    {
      id: 6,
      name: "Event Landing",
      category: "Events",
      preview: "/api/placeholder/300/200",
      isPremium: false,
      description: "Promote your events effectively"
    }
  ];

  const myProjects = [
    {
      id: 1,
      name: "My Business Site",
      lastEdited: "2 hours ago",
      status: "Published",
      visits: "1.2k",
      thumbnail: "/api/placeholder/200/150"
    },
    {
      id: 2,
      name: "Personal Portfolio",
      lastEdited: "1 day ago",
      status: "Draft",
      visits: "0",
      thumbnail: "/api/placeholder/200/150"
    },
    {
      id: 3,
      name: "Restaurant Website",
      lastEdited: "3 days ago",
      status: "Published",
      visits: "856",
      thumbnail: "/api/placeholder/200/150"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Your Dashboard</h1>
            <p className="text-gray-600">Create stunning websites with our drag-and-drop builder</p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-2 border-dashed border-blue-200 hover:border-blue-400 transition-colors">
              <CardHeader className="text-center py-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Start from Blank</CardTitle>
                <CardDescription>
                  Begin with a blank canvas and create your website from scratch
                </CardDescription>
                <Link to="/editor/blank">
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                    Create Blank Site
                  </Button>
                </Link>
              </CardHeader>
            </Card>

            <Card className="border-2 border-dashed border-purple-200 hover:border-purple-400 transition-colors">
              <CardHeader className="text-center py-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Folder className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Choose Template</CardTitle>
                <CardDescription>
                  Pick from our collection of free professional templates
                </CardDescription>
                <Button variant="outline" className="mt-4 border-purple-600 text-purple-600 hover:bg-purple-50">
                  Browse Templates
                </Button>
              </CardHeader>
            </Card>
          </div>

          {/* My Projects */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">My Projects</h2>
              <Link to="/editor/blank">
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  New Project
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Globe className="w-8 h-8 mx-auto mb-2 text-gray-500" />
                        <span className="text-sm text-gray-500">Website Preview</span>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      <Badge variant={project.status === 'Published' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {project.lastEdited}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {project.visits} visits
                      </div>
                      <div className="flex space-x-2">
                        <Link to={`/editor/project/${project.id}`}>
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button size="sm" variant="outline">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Templates */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Free Templates</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Search templates..." className="pl-10 w-64" />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 relative">
                    <Badge className="absolute top-2 right-2 bg-green-500 text-white">
                      Free
                    </Badge>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Globe className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                        <span className="text-sm text-gray-600">Template Preview</span>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <Badge variant="outline">{template.category}</Badge>
                    </div>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/editor/template/${template.id}`}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Use Template
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
