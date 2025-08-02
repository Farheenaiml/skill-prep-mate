import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-secondary">
      <div className="text-center animate-bounce-in">
        <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-10 h-10 text-beige-primary" />
        </div>
        <h1 className="text-5xl font-bold text-navy-primary mb-4">MockMate</h1>
        <p className="text-xl text-muted-foreground mb-8">Your Smart Interview Coach</p>
        <Button 
          variant="hero" 
          size="xl"
          onClick={() => navigate('/dashboard')}
          className="hover-lift"
        >
          Enter MockMate
        </Button>
      </div>
    </div>
  );
};

export default Index;
