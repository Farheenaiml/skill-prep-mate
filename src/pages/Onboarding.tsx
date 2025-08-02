import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Sparkles, GraduationCap, Users, BookOpen, CheckCircle } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);

  const roles = [
    {
      id: "student",
      title: "Student",
      description: "I'm preparing for interviews and job applications",
      icon: GraduationCap,
      color: "text-navy-primary",
    },
    {
      id: "professor",
      title: "Professor",
      description: "I help students with career preparation",
      icon: BookOpen,
      color: "text-navy-light",
    },
    {
      id: "other",
      title: "Other",
      description: "I'm exploring MockMate for different purposes",
      icon: Users,
      color: "text-accent",
    },
  ];

  const handleContinue = () => {
    if (!selectedRole) return;
    setShowWelcome(true);
    
    setTimeout(() => {
      navigate('/dashboard');
    }, 2500);
  };

  if (showWelcome) {
    return (
      <div className="min-h-screen bg-gradient-secondary flex items-center justify-center p-6">
        <Card className="glass-card p-12 text-center max-w-md animate-bounce-in">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-beige-primary" />
          </div>
          <h1 className="text-3xl font-bold text-navy-primary mb-4">
            Welcome to MockMate!
          </h1>
          <p className="text-muted-foreground text-lg mb-6">
            Your personalized interview preparation journey starts now.
          </p>
          <div className="flex items-center justify-center gap-2 text-navy-primary">
            <div className="w-2 h-2 bg-navy-primary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-navy-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-navy-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-secondary flex items-center justify-center p-6">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-navy-light animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-accent animate-bounce"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <Card className="glass-card p-8 animate-scale-in">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-beige-primary" />
            </div>
            <span className="text-3xl font-bold text-navy-primary">MockMate</span>
          </div>

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-navy-primary mb-4">
              Tell us about yourself
            </h1>
            <p className="text-muted-foreground text-lg">
              Help us personalize your MockMate experience
            </p>
          </div>

          {/* Role Selection */}
          <div className="mb-8">
            <RadioGroup
              value={selectedRole}
              onValueChange={setSelectedRole}
              className="space-y-4"
            >
              {roles.map((role, index) => (
                <div key={role.id} className="relative">
                  <RadioGroupItem
                    value={role.id}
                    id={role.id}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={role.id}
                    className={`flex items-center p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-md animate-fade-in peer-checked:border-navy-primary peer-checked:bg-navy-primary/5 ${
                      selectedRole === role.id 
                        ? 'border-navy-primary bg-navy-primary/5 shadow-md' 
                        : 'border-border hover:border-navy-light'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                      selectedRole === role.id 
                        ? 'bg-gradient-primary text-beige-primary' 
                        : 'bg-muted'
                    }`}>
                      <role.icon className={`w-6 h-6 ${selectedRole === role.id ? '' : role.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-navy-primary mb-2">
                        {role.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {role.description}
                      </p>
                    </div>
                    {selectedRole === role.id && (
                      <CheckCircle className="w-6 h-6 text-navy-primary animate-scale-in" />
                    )}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Continue Button */}
          <Button
            onClick={handleContinue}
            variant="hero"
            size="lg"
            className="w-full h-14"
            disabled={!selectedRole}
          >
            Continue to Dashboard
            <Sparkles className="w-5 h-5" />
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;