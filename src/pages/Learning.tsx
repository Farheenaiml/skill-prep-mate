import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  ArrowLeft, 
  Send, 
  BookOpen, 
  TrendingUp, 
  Users, 
  Lightbulb,
  Sparkles,
  MessageCircle
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'alina';
  timestamp: Date;
}

const Learning = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! How can I help you with your interview prep today? I can provide personalized learning paths, skill assessments, and answer any questions you have about interview preparation.",
      sender: 'alina',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    {
      text: "Where am I lacking?",
      icon: TrendingUp,
      color: "text-red-500"
    },
    {
      text: "How to improve my grammar?",
      icon: BookOpen,
      color: "text-blue-500"
    },
    {
      text: "Give me a roadmap",
      icon: Lightbulb,
      color: "text-yellow-500"
    },
    {
      text: "Practice HR Round",
      icon: Users,
      color: "text-green-500"
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = {
        "Where am I lacking?": "Based on your recent mock interviews, I've identified a few areas for improvement:\n\n1. **Technical Communication** (72/100) - Work on explaining complex concepts simply\n2. **Confidence Level** (68/100) - Practice speaking with more authority\n3. **Body Language** (75/100) - Maintain better eye contact\n\nWould you like specific exercises for any of these areas?",
        "How to improve my grammar?": "Great question! Here's a personalized grammar improvement plan:\n\n📚 **Daily Practice:**\n• Read technical articles for 15 minutes\n• Use Grammarly for real-time feedback\n• Practice speaking complex sentences\n\n🎯 **Focus Areas:**\n• Subject-verb agreement\n• Proper tense usage\n• Professional vocabulary\n\nWould you like me to create a 30-day grammar challenge for you?",
        "Give me a roadmap": "Here's your personalized 4-week interview preparation roadmap:\n\n**Week 1: Foundation**\n• Complete skills assessment\n• Practice basic HR questions\n• Improve grammar and vocabulary\n\n**Week 2: Technical Prep**\n• Review core CS concepts\n• Practice coding problems\n• Mock technical interviews\n\n**Week 3: Behavioral Mastery**\n• STAR method practice\n• Company research\n• Mock HR rounds\n\n**Week 4: Final Polish**\n• Full mock interviews\n• Stress testing\n• Confidence building\n\nReady to start with Week 1?",
        "Practice HR Round": "Perfect! Let's practice common HR questions. Here are some areas we can work on:\n\n🎯 **Question Types:**\n• Tell me about yourself\n• Why this company?\n• Strengths and weaknesses\n• Behavioral situations\n• Career goals\n\nI can simulate real HR scenarios and provide feedback on:\n• Content quality\n• Communication style\n• Confidence level\n\nWhich type would you like to practice first?"
      };

      const alinaResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[messageText as keyof typeof responses] || 
              `I understand you're asking about "${messageText}". Let me help you with that! Based on your profile and recent performance, I recommend focusing on building confidence and practicing technical communication. Would you like me to create a specific action plan for this area?`,
        sender: 'alina',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, alinaResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-secondary flex flex-col">
      {/* Header */}
      <header className="bg-glass-bg backdrop-blur-sm border-b border-opacity-20 p-4 flex-shrink-0">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate('/dashboard')}
            className="text-navy-primary hover:text-navy-dark"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <div className="text-center">
            <h1 className="text-xl font-bold text-navy-primary flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Chat with Alina
            </h1>
            <p className="text-sm text-muted-foreground">Your AI Learning Assistant</p>
          </div>
          
          <div className="w-20"></div>
        </div>
      </header>

      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-8 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1">
          {/* Chat Area */}
          <div className="lg:col-span-3 flex flex-col">
            <Card className="glass-card flex-1 flex flex-col">
              {/* Messages */}
              <ScrollArea className="flex-1 p-6">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                    >
                      <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                        {message.sender === 'alina' && (
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                              <Sparkles className="w-4 h-4 text-beige-primary" />
                            </div>
                            <span className="text-sm font-medium text-navy-primary">Alina</span>
                          </div>
                        )}
                        <div
                          className={`p-4 rounded-2xl ${
                            message.sender === 'user'
                              ? 'bg-gradient-primary text-beige-primary ml-4'
                              : 'bg-muted text-foreground mr-4'
                          }`}
                        >
                          <p className="whitespace-pre-line">{message.text}</p>
                          <p className={`text-xs mt-2 ${
                            message.sender === 'user' ? 'text-beige-primary/70' : 'text-muted-foreground'
                          }`}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start animate-fade-in">
                      <div className="max-w-[80%]">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-beige-primary" />
                          </div>
                          <span className="text-sm font-medium text-navy-primary">Alina</span>
                        </div>
                        <div className="bg-muted text-foreground mr-4 p-4 rounded-2xl">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-navy-primary rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-navy-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-navy-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>

              {/* Input Area */}
              <div className="p-6 border-t border-border">
                <div className="flex gap-3">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask Alina anything about interview preparation..."
                    className="flex-1"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button 
                    variant="hero" 
                    size="icon"
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim() || isTyping}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Prompts */}
            <Card className="neuro-card p-6">
              <h3 className="text-lg font-semibold text-navy-primary mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                {quickPrompts.map((prompt, index) => (
                  <Button
                    key={index}
                    variant="glass"
                    className="w-full justify-start text-left h-auto p-3 hover-lift"
                    onClick={() => handleSendMessage(prompt.text)}
                  >
                    <prompt.icon className={`w-4 h-4 mr-3 ${prompt.color}`} />
                    <span className="text-sm">{prompt.text}</span>
                  </Button>
                ))}
              </div>
            </Card>

            {/* Learning Stats */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold text-navy-primary mb-4">
                Learning Progress
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Technical Skills</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Communication</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Confidence</span>
                    <span className="font-medium">72%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Tips */}
            <Card className="neuro-card p-6">
              <h3 className="text-lg font-semibold text-navy-primary mb-4">
                💡 Chat Tips
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Ask specific questions for better responses</li>
                <li>• Request practice scenarios and examples</li>
                <li>• Get personalized study plans</li>
                <li>• Analyze your weak areas</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;