import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { 
  Video, 
  Mic, 
  MicOff, 
  VideoOff, 
  ArrowLeft, 
  Play, 
  Square, 
  RotateCcw,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Volume2
} from "lucide-react";

const Interview = () => {
  const navigate = useNavigate();
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [userResponse, setUserResponse] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [alinaMessage, setAlinaMessage] = useState("Hello! Welcome to your mock interview. I'm Alina, your AI interview coach. Let's get started!");

  const questions = [
    "Tell me about yourself and why you're interested in this position.",
    "Describe a challenging project you've worked on and how you overcame obstacles.",
    "What are your greatest strengths and how do they apply to this role?",
    "Where do you see yourself in 5 years?",
    "Do you have any questions for us?"
  ];

  const performanceData = {
    grammar: 85,
    vocabulary: 78,
    expression: 92,
    confidence: 74,
    improvement: 12
  };

  useEffect(() => {
    if (currentQuestion === 1) {
      setTimeout(() => {
        setAlinaMessage(`Great! Let's start with question ${currentQuestion}: ${questions[currentQuestion - 1]}`);
      }, 2000);
    }
  }, [currentQuestion]);

  const handleStartRecording = () => {
    setIsRecording(true);
    setAlinaMessage("I'm listening... Take your time to answer.");
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setShowResults(true);
    setAlinaMessage("Thank you for your response! Let me analyze your answer...");
  };

  const handleRetake = () => {
    setShowResults(false);
    setUserResponse("");
    setAlinaMessage(`Let's try that again. Question ${currentQuestion}: ${questions[currentQuestion - 1]}`);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setShowResults(false);
      setUserResponse("");
      setAlinaMessage(`Moving to question ${currentQuestion + 1}: ${questions[currentQuestion]}`);
    } else {
      navigate('/performance');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      {/* Header */}
      <header className="bg-glass-bg backdrop-blur-sm border-b border-opacity-20 p-4">
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
            <h1 className="text-xl font-bold text-navy-primary">
              Mock Interview Session
            </h1>
            <p className="text-sm text-muted-foreground">
              Question {currentQuestion} of {questions.length}
            </p>
          </div>
          
          <div className="text-right">
            <p className="text-sm text-navy-primary font-medium">Session Time</p>
            <p className="text-xs text-muted-foreground">05:42</p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Call Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Alina Section */}
            <Card className="glass-card p-6 animate-fade-in">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center relative overflow-hidden">
                  <div className="w-24 h-24 rounded-full bg-beige-primary flex items-center justify-center">
                    <span className="text-3xl">🤖</span>
                  </div>
                  {alinaMessage.includes("listening") && (
                    <div className="absolute inset-0 rounded-full border-4 border-navy-primary animate-pulse"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-2">Alina - AI Interview Coach</h3>
                <div className="bg-muted rounded-lg p-4 mb-4">
                  <p className="text-navy-primary">{alinaMessage}</p>
                </div>
                {alinaMessage.includes("listening") && (
                  <div className="flex items-center justify-center gap-2">
                    <Volume2 className="w-4 h-4 text-navy-primary" />
                    <div className="flex gap-1">
                      <div className="w-1 h-3 bg-navy-primary rounded-full animate-pulse"></div>
                      <div className="w-1 h-4 bg-navy-primary rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1 h-2 bg-navy-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* User Video Section */}
            <Card className="glass-card p-6">
              <div className="aspect-video bg-navy-primary/10 rounded-lg mb-4 flex items-center justify-center relative">
                {isVideoOn ? (
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center mb-2">
                      <span className="text-2xl">👤</span>
                    </div>
                    <p className="text-muted-foreground">You</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <VideoOff className="w-12 h-12 text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">Camera Off</p>
                  </div>
                )}
                {isRecording && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-sm">Recording</span>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant={isMicOn ? "accent" : "outline"}
                  size="icon"
                  onClick={() => setIsMicOn(!isMicOn)}
                  className="w-12 h-12 rounded-full"
                >
                  {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                </Button>
                
                <Button
                  variant={isVideoOn ? "accent" : "outline"}
                  size="icon"
                  onClick={() => setIsVideoOn(!isVideoOn)}
                  className="w-12 h-12 rounded-full"
                >
                  {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                </Button>

                {!isRecording ? (
                  <Button
                    variant="hero"
                    onClick={handleStartRecording}
                    className="px-8"
                    disabled={!isMicOn}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start Answer
                  </Button>
                ) : (
                  <Button
                    variant="destructive"
                    onClick={handleStopRecording}
                    className="px-8"
                  >
                    <Square className="w-4 h-4 mr-2" />
                    Stop & Submit
                  </Button>
                )}
              </div>
            </Card>

            {/* Text Response Option */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold text-navy-primary mb-4">
                Or type your response:
              </h3>
              <Textarea
                placeholder="Type your answer here..."
                value={userResponse}
                onChange={(e) => setUserResponse(e.target.value)}
                className="min-h-[120px] mb-4"
              />
              <Button
                variant="accent"
                onClick={handleStopRecording}
                disabled={!userResponse.trim()}
              >
                Submit Written Response
              </Button>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Current Question */}
            <Card className="neuro-card p-6 animate-scale-in">
              <h3 className="text-lg font-semibold text-navy-primary mb-4">
                Question {currentQuestion}
              </h3>
              <p className="text-muted-foreground mb-4">
                {questions[currentQuestion - 1]}
              </p>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                ></div>
              </div>
            </Card>

            {/* Performance Results */}
            {showResults && (
              <Card className="glass-card p-6 animate-slide-up">
                <h3 className="text-lg font-semibold text-navy-primary mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Performance Analysis
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Grammar</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{performanceData.grammar}%</span>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Vocabulary</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{performanceData.vocabulary}%</span>
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Expression</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{performanceData.expression}%</span>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Confidence</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{performanceData.confidence}%</span>
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-800">
                    <strong>+{performanceData.improvement}% improvement</strong> from your last attempt!
                  </p>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button
                    variant="outline"
                    onClick={handleRetake}
                    className="flex-1"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Retake
                  </Button>
                  <Button
                    variant="hero"
                    onClick={handleNextQuestion}
                    className="flex-1"
                  >
                    Next Question
                  </Button>
                </div>
              </Card>
            )}

            {/* Tips */}
            <Card className="neuro-card p-6">
              <h3 className="text-lg font-semibold text-navy-primary mb-4">
                💡 Tips for Success
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Speak clearly and at a moderate pace</li>
                <li>• Make eye contact with the camera</li>
                <li>• Use the STAR method for behavioral questions</li>
                <li>• Take a moment to think before responding</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;