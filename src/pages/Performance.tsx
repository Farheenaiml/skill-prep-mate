import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  TrendingUp, 
  Calendar, 
  Target, 
  Award,
  Clock,
  CheckCircle,
  Star,
  Trophy,
  BarChart3
} from "lucide-react";

const Performance = () => {
  const navigate = useNavigate();

  const overallStats = [
    {
      label: "Overall Score",
      value: "82%",
      change: "+15%",
      icon: Target,
      color: "text-navy-primary"
    },
    {
      label: "Sessions Completed",
      value: "24",
      change: "+8",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      label: "Total Practice Time",
      value: "18.5h",
      change: "+5.2h",
      icon: Clock,
      color: "text-blue-500"
    },
    {
      label: "Streak",
      value: "12 days",
      change: "+3",
      icon: Star,
      color: "text-yellow-500"
    }
  ];

  const skillProgress = [
    { skill: "Technical Communication", current: 85, previous: 72, color: "bg-navy-primary" },
    { skill: "Grammar & Vocabulary", current: 78, previous: 65, color: "bg-blue-500" },
    { skill: "Confidence Level", current: 92, previous: 74, color: "bg-green-500" },
    { skill: "Body Language", current: 75, previous: 60, color: "bg-purple-500" },
    { skill: "Problem Solving", current: 88, previous: 82, color: "bg-orange-500" },
  ];

  const recentSessions = [
    {
      date: "Today",
      type: "Technical Interview",
      score: 88,
      duration: "25 min",
      improvement: "+12%"
    },
    {
      date: "Yesterday",
      type: "HR Round",
      score: 92,
      duration: "18 min",
      improvement: "+8%"
    },
    {
      date: "2 days ago",
      type: "Behavioral Questions",
      score: 76,
      duration: "30 min",
      improvement: "+5%"
    },
    {
      date: "3 days ago",
      type: "Technical Interview",
      score: 84,
      duration: "22 min",
      improvement: "+15%"
    }
  ];

  const badges = [
    { name: "First Interview", icon: "🏆", unlocked: true },
    { name: "Week Warrior", icon: "⚡", unlocked: true },
    { name: "Grammar Master", icon: "📚", unlocked: true },
    { name: "Confidence Builder", icon: "💪", unlocked: false },
    { name: "Technical Expert", icon: "🔧", unlocked: false },
    { name: "Perfect Score", icon: "🌟", unlocked: false },
  ];

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
            <h1 className="text-xl font-bold text-navy-primary flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Performance Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">Track your interview preparation progress</p>
          </div>
          
          <div className="w-20"></div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {overallStats.map((stat, index) => (
            <Card 
              key={index}
              className="neuro-card p-6 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-card flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-muted-foreground text-sm">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skills Progress */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="glass-card p-6 animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-navy-primary">Skills Progress</h2>
                <TrendingUp className="w-6 h-6 text-navy-primary" />
              </div>
              
              <div className="space-y-6">
                {skillProgress.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-navy-primary">{skill.skill}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{skill.previous}%</span>
                        <span className="text-sm">→</span>
                        <span className="text-sm font-bold text-navy-primary">{skill.current}%</span>
                        <span className="text-xs text-green-600">+{skill.current - skill.previous}%</span>
                      </div>
                    </div>
                    <div className="relative">
                      <Progress value={skill.current} className="h-3" />
                      <div 
                        className="absolute top-0 h-3 bg-muted rounded-full opacity-30"
                        style={{ width: `${skill.previous}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Sessions */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-navy-primary">Recent Sessions</h2>
                <Calendar className="w-6 h-6 text-navy-primary" />
              </div>
              
              <div className="space-y-4">
                {recentSessions.map((session, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <span className="text-xl">{session.score >= 90 ? '🌟' : session.score >= 80 ? '👍' : '💪'}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-primary">{session.type}</h3>
                        <p className="text-sm text-muted-foreground">{session.date} • {session.duration}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-navy-primary">{session.score}%</div>
                      <div className="text-sm text-green-600">{session.improvement}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                className="w-full mt-4"
                onClick={() => navigate('/interview')}
              >
                Start New Session
              </Button>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievement Badges */}
            <Card className="neuro-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-navy-primary">Achievements</h3>
                <Trophy className="w-5 h-5 text-navy-primary" />
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {badges.map((badge, index) => (
                  <div 
                    key={index}
                    className={`text-center p-3 rounded-lg transition-all ${
                      badge.unlocked 
                        ? 'bg-gradient-primary text-beige-primary shadow-md hover:scale-105' 
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <div className="text-2xl mb-1">{badge.icon}</div>
                    <div className="text-xs font-medium">{badge.name}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Weekly Goal */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold text-navy-primary mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Weekly Goal
              </h3>
              
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-navy-primary">4/5</div>
                <div className="text-sm text-muted-foreground">Mock Interviews</div>
              </div>
              
              <Progress value={80} className="mb-4" />
              
              <p className="text-sm text-muted-foreground text-center">
                Almost there! Complete 1 more session to reach your goal.
              </p>
              
              <Button 
                variant="hero" 
                className="w-full mt-4"
                onClick={() => navigate('/interview')}
              >
                Complete Goal
              </Button>
            </Card>

            {/* Quick Actions */}
            <Card className="neuro-card p-6">
              <h3 className="text-lg font-semibold text-navy-primary mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <Button 
                  variant="glass" 
                  className="w-full justify-start hover-lift"
                  onClick={() => navigate('/interview')}
                >
                  <CheckCircle className="w-4 h-4 mr-3" />
                  Practice Interview
                </Button>
                
                <Button 
                  variant="glass" 
                  className="w-full justify-start hover-lift"
                  onClick={() => navigate('/learning')}
                >
                  <TrendingUp className="w-4 h-4 mr-3" />
                  Analyze Weak Areas
                </Button>
                
                <Button 
                  variant="glass" 
                  className="w-full justify-start hover-lift"
                  onClick={() => navigate('/learning')}
                >
                  <Award className="w-4 h-4 mr-3" />
                  Get Learning Path
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;