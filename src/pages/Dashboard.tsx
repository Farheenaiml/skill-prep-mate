import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Video, 
  BookOpen, 
  TrendingUp, 
  Clock, 
  Target, 
  Sparkles,
  User,
  LogOut,
  Settings
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      label: "Mock Interviews",
      value: "12",
      icon: Video,
      color: "text-navy-primary",
    },
    {
      label: "Hours Practiced",
      value: "8.5",
      icon: Clock,
      color: "text-navy-light",
    },
    {
      label: "Improvement Score",
      value: "85%",
      icon: TrendingUp,
      color: "text-accent",
    },
    {
      label: "Goal Progress",
      value: "67%",
      icon: Target,
      color: "text-navy-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary">
      {/* Header */}
      <header className="bg-glass-bg backdrop-blur-sm border-b border-opacity-20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-beige-primary" />
              </div>
              <span className="text-2xl font-bold text-navy-primary">MockMate</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-navy-primary">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-navy-primary">
                <User className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-navy-primary"
                onClick={() => navigate('/')}
              >
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-navy-primary mb-4">
            Welcome back! 👋
          </h1>
          <p className="text-xl text-muted-foreground">
            Ready to continue your interview preparation journey?
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="neuro-card p-6 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-card flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-navy-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-muted-foreground">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Practice Interview Card */}
          <Card className="glass-card p-8 hover-lift cursor-pointer group animate-slide-up">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Video className="w-10 h-10 text-beige-primary" />
              </div>
              <h2 className="text-3xl font-bold text-navy-primary mb-4">
                Practice Interview with AI
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Meet Alina, your AI interview coach. Practice real interview scenarios 
                with personalized feedback and improvement suggestions.
              </p>
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => navigate('/interview')}
                className="group w-full"
              >
                Start Mock Interview
                <Video className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Learning Path Card */}
          <Card className="glass-card p-8 hover-lift cursor-pointer group animate-slide-up">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-10 h-10 text-beige-primary" />
              </div>
              <h2 className="text-3xl font-bold text-navy-primary mb-4">
                Get Learning Path
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Chat with Alina to get personalized learning recommendations, 
                skill assessments, and customized interview preparation roadmaps.
              </p>
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => navigate('/learning')}
                className="group w-full"
              >
                Start Learning Journey
                <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-navy-primary mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button 
              variant="glass" 
              className="h-16 text-left justify-start hover-lift"
              onClick={() => navigate('/performance')}
            >
              <TrendingUp className="w-6 h-6 mr-3" />
              <div>
                <div className="font-semibold">View Performance</div>
                <div className="text-sm text-muted-foreground">Track your progress</div>
              </div>
            </Button>
            
            <Button 
              variant="glass" 
              className="h-16 text-left justify-start hover-lift"
              onClick={() => navigate('/interview')}
            >
              <Video className="w-6 h-6 mr-3" />
              <div>
                <div className="font-semibold">Quick Practice</div>
                <div className="text-sm text-muted-foreground">5-minute session</div>
              </div>
            </Button>
            
            <Button 
              variant="glass" 
              className="h-16 text-left justify-start hover-lift"
              onClick={() => navigate('/learning')}
            >
              <BookOpen className="w-6 h-6 mr-3" />
              <div>
                <div className="font-semibold">Ask Alina</div>
                <div className="text-sm text-muted-foreground">Get instant help</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;