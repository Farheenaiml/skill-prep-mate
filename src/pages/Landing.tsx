import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Video, BookOpen, TrendingUp, Sparkles, Users } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const features = [
    {
      icon: Video,
      title: "AI-Powered Mock Interviews",
      description: "Practice with Alina, your AI interview coach",
    },
    {
      icon: Brain,
      title: "Personalized Learning Paths",
      description: "Get customized roadmaps for your career goals",
    },
    {
      icon: TrendingUp,
      title: "Real-time Performance Analytics",
      description: "Track your progress with detailed insights",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Question Bank",
      description: "Access thousands of curated interview questions",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-navy-light animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 rounded-full bg-accent animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full bg-navy-primary animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="p-6">
          <nav className="flex items-center justify-between max-w-7xl mx-auto">
            <div className={`flex items-center gap-3 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-beige-primary" />
              </div>
              <span className="text-2xl font-bold text-navy-primary">MockMate</span>
            </div>
            
            <div className={`flex items-center gap-4 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-4'}`}>
              <Button 
                variant="ghost" 
                onClick={() => navigate('/login')}
                className="text-navy-primary hover:text-navy-dark"
              >
                Login
              </Button>
              <Button 
                variant="accent" 
                onClick={() => navigate('/signup')}
                className="hover-lift"
              >
                Sign Up
              </Button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <div className={`${isVisible ? 'animate-bounce-in' : 'opacity-0 scale-90'}`}>
              <div className="inline-flex items-center gap-2 bg-glass-bg backdrop-blur-sm border border-opacity-20 rounded-full px-6 py-2 mb-8">
                <Users className="w-4 h-4 text-navy-primary" />
                <span className="text-sm text-navy-primary">Trusted by 10,000+ Engineering Students</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-navy-primary mb-6 leading-tight">
                MockMate
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Your Smart Interview Coach
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Master your interview skills with AI-powered mock interviews, personalized feedback, 
                and comprehensive learning paths designed for engineering students.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => navigate('/signup')}
                  className="group"
                >
                  Start Practicing Now
                  <Video className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
                
                <Button 
                  variant="glass" 
                  size="xl"
                  onClick={() => navigate('/demo')}
                  className="backdrop-blur-sm"
                >
                  Watch Demo
                  <BookOpen className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl font-bold text-navy-primary mb-4">
                Why Choose MockMate?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the future of interview preparation with cutting-edge AI technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className={`p-8 glass-card hover-lift cursor-pointer group ${
                    isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-beige-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Card className={`p-12 glass-card ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold text-navy-primary mb-6">
                Ready to Ace Your Next Interview?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of engineering students who have successfully landed their dream jobs with MockMate
              </p>
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => navigate('/signup')}
                className="hover-lift"
              >
                Get Started for Free
                <Sparkles className="w-5 h-5" />
              </Button>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;