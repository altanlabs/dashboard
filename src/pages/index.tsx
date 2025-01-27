import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Apps, Search } from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("myApps");

  const myApps = [
    { name: "AI Image Generator", icon: "🎨", gradient: "from-pink-500 to-purple-500" },
    { name: "Health Tracker", icon: "💪", gradient: "from-blue-500 to-cyan-500" },
    { name: "PenAI 2", icon: "✍️", gradient: "from-orange-500 to-red-500" },
    { name: "Travel Booking", icon: "✈️", gradient: "from-green-500 to-emerald-500" },
  ];

  const workflowData = [
    { name: "Daily Post Instagram", executions: 52, credits: "24,737" },
    { name: "Daily Fact", executions: 54, credits: "15,646" },
    { name: "Reply to IG Comments", executions: 63, credits: "8,798" },
    { name: "TextToSpeech", executions: 22, credits: "5,066" },
  ];

  const recentExecutions = [
    { name: "Daily Fact", time: "about 12 hours ago", status: "Success", credits: "3.40" },
    { name: "Daily Fact", time: "1 day ago", status: "Success", credits: "3.43" },
    { name: "Daily Fact", time: "2 days ago", status: "Success", credits: "3.41" },
    { name: "Daily Fact", time: "3 days ago", status: "Error", credits: "3.43" },
  ];

  const communityApps = [
    {
      author: "Sarah K.",
      avatar: "/avatars/sarah.jpg",
      appName: "Budget Tracker Pro",
      description: "Keep track of your expenses with AI-powered insights",
      rating: 4.8,
    },
    {
      author: "Mike R.",
      avatar: "/avatars/mike.jpg",
      appName: "Workout Planner",
      description: "AI-generated workout plans based on your goals",
      rating: 4.9,
    },
  ];

  const featuredApps = [
    {
      author: "Altan",
      avatar: "/avatars/altan.jpg",
      appName: "AI Assistant Pro",
      description: "Your personal AI assistant for daily tasks",
      rating: 5.0,
    },
    {
      author: "Altan",
      avatar: "/avatars/altan.jpg",
      appName: "Code Generator",
      description: "Generate code snippets with AI",
      rating: 4.9,
    },
  ];

  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Hello, Pau</h1>
          <p className="text-muted-foreground">Let's take a look at your activity</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">Invite</Button>
          <Avatar className="h-8 w-8">
            <img src="/avatars/pau.jpg" alt="Pau" />
          </Avatar>
        </div>
      </div>

      <Card className="p-4 w-[600px] mx-auto">
        <div className="flex items-center gap-2">
          <Apps className="h-5 w-5" />
          <div className="relative flex-1">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input className="pl-8 w-full" placeholder="A landing page for my business" />
          </div>
          <Button>Create</Button>
        </div>
      </Card>

      <div className="flex gap-4 overflow-x-auto">
        <Button variant="ghost" size="sm">Personal Finance Dashboard</Button>
        <Button variant="ghost" size="sm">Recipe Manager</Button>
        <Button variant="ghost" size="sm">Habit Tracker</Button>
        <Button variant="ghost" size="sm">Project Management Tool</Button>
        <Button variant="ghost" size="sm">Social Media Dashboard</Button>
      </div>

      <div className="flex gap-4">
        <Button
          variant={activeTab === "myApps" ? "default" : "ghost"}
          onClick={() => setActiveTab("myApps")}
        >
          My Apps
        </Button>
        <Button
          variant={activeTab === "community" ? "default" : "ghost"}
          onClick={() => setActiveTab("community")}
        >
          Community
        </Button>
        <Button
          variant={activeTab === "featured" ? "default" : "ghost"}
          onClick={() => setActiveTab("featured")}
        >
          Featured
        </Button>
      </div>

      {activeTab === "myApps" && (
        <>
          <div className="grid grid-cols-4 gap-4">
            {myApps.map((app) => (
              <Card key={app.name} className={`p-4 bg-gradient-to-br ${app.gradient}`}>
                <div className="text-3xl mb-2">{app.icon}</div>
                <h3 className="font-semibold text-white">{app.name}</h3>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4">
              <h3 className="font-semibold mb-4">Top Workflows by Usage</h3>
              <ScrollArea className="h-[300px]">
                {workflowData.map((workflow) => (
                  <div key={workflow.name} className="flex justify-between items-center py-2">
                    <span>{workflow.name}</span>
                    <span>{workflow.executions}</span>
                    <span>{workflow.credits}</span>
                  </div>
                ))}
              </ScrollArea>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold mb-4">Recent Executions</h3>
              <ScrollArea className="h-[300px]">
                {recentExecutions.map((execution) => (
                  <div key={execution.time} className="flex justify-between items-center py-2">
                    <span>{execution.name}</span>
                    <span>{execution.time}</span>
                    <span className={execution.status === "Success" ? "text-green-500" : "text-red-500"}>
                      {execution.status}
                    </span>
                    <span>{execution.credits}</span>
                  </div>
                ))}
              </ScrollArea>
            </Card>
          </div>
        </>
      )}

      {activeTab === "community" && (
        <div className="grid grid-cols-2 gap-4">
          {communityApps.map((app) => (
            <Card key={app.appName} className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <Avatar>
                  <img src={app.avatar} alt={app.author} />
                </Avatar>
                <div>
                  <h3 className="font-semibold">{app.appName}</h3>
                  <p className="text-sm text-muted-foreground">by {app.author}</p>
                </div>
              </div>
              <p className="mb-3">{app.description}</p>
              <div className="flex justify-between items-center">
                <span>⭐ {app.rating}</span>
                <Button>Clone</Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "featured" && (
        <div className="grid grid-cols-2 gap-4">
          {featuredApps.map((app) => (
            <Card key={app.appName} className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <Avatar>
                  <img src={app.avatar} alt={app.author} />
                </Avatar>
                <div>
                  <h3 className="font-semibold">{app.appName}</h3>
                  <p className="text-sm text-muted-foreground">by {app.author}</p>
                </div>
              </div>
              <p className="mb-3">{app.description}</p>
              <div className="flex justify-between items-center">
                <span>⭐ {app.rating}</span>
                <Button>Clone</Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}