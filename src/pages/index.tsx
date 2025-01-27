import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

const apps = [
  {
    name: "AI Image Generator",
    icon: "🎨",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Health and Fitness",
    icon: "👥",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    name: "Dashboard",
    icon: "📊",
    gradient: "from-orange-500 to-red-500"
  },
  {
    name: "Startup Dashboard",
    icon: "📈",
    gradient: "from-blue-400 to-purple-500"
  },
  {
    name: "Travel Booking",
    icon: "📍",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    name: "Ticket tool",
    icon: "📊",
    gradient: "from-blue-400 to-purple-500"
  }
]

const workflowData = [
  { name: "Daily Post Instagram", executions: 52, credits: "24,737" },
  { name: "Daily Fact", executions: 54, credits: "156.46" },
  { name: "Reply to Ig Comments", executions: 63, credits: "87.98" },
  { name: "Text2Speech", executions: 22, credits: "50.66" },
  { name: "Clearevo Workflow", executions: 6, credits: "4.14" },
  { name: "Web Demo", executions: 11, credits: "3.05" },
  { name: "Computer games", executions: 3, credits: "2.10" },
  { name: "Instagram Jostonic basic", executions: 2, credits: "2.07" },
  { name: "Leadmap Installer", executions: 1, credits: "1.72" }
]

const recentExecutions = [
  { name: "Daily Fact", time: "about 12 hours ago", status: "success", credits: "3.40" },
  { name: "Daily Fact", time: "1 day ago", status: "success", credits: "3.43" },
  { name: "Daily Fact", time: "2 days ago", status: "success", credits: "3.41" },
  { name: "Daily Fact", time: "3 days ago", status: "error", credits: "3.43" },
  { name: "Daily Fact", time: "4 days ago", status: "success", credits: "3.43" },
  { name: "Daily Fact", time: "5 days ago", status: "success", credits: "3.39" },
  { name: "Reply to Ig Comments", time: "6 days ago", status: "success", credits: "1.03" },
  { name: "Reply to Ig Comments", time: "6 days ago", status: "success", credits: "1.08" },
  { name: "Daily Fact", time: "6 days ago", status: "success", credits: "3.39" }
]

export default function IndexPage() {
  return (
    <div className="flex flex-col gap-6 p-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Hello, Pau</h1>
          <p className="text-muted-foreground">Let's take a look at your activity</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">Invite</Button>
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <img src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
            <span className="font-medium">CAPS</span>
          </div>
        </div>
      </div>

      {/* Create App Card */}
      <Card className="p-6 bg-card/50">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <Input 
              className="bg-background"
              placeholder="A landing page for my business"
              prefix={
                <Button variant="ghost" className="px-2">
                  <span className="mr-2">App</span>
                  <span className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                </Button>
              }
            />
          </div>
          <Button>Create</Button>
        </div>
      </Card>

      {/* Quick Links */}
      <div className="flex gap-4 text-sm text-muted-foreground">
        <span>Personal Finance Dashboard</span>
        <span>Recipe Manager</span>
        <span>Habit Tracker</span>
        <span>Project Management Tool</span>
        <span>Social Media</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b">
        <button className="pb-2 border-b-2 border-primary font-medium">My Apps</button>
        <button className="pb-2 text-muted-foreground">Community</button>
        <button className="pb-2 text-muted-foreground">Featured</button>
      </div>

      {/* Apps Grid */}
      <div className="grid grid-cols-6 gap-4">
        {apps.map((app, i) => (
          <Card key={i} className="p-4 flex flex-col items-center gap-2 hover:bg-accent/50 cursor-pointer">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${app.gradient} flex items-center justify-center text-xl`}>
              {app.icon}
            </div>
            <span className="text-sm font-medium text-center">{app.name}</span>
          </Card>
        ))}
      </div>

      {/* Workflows and Executions */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Top Workflows by Usage</h2>
          <ScrollArea className="h-[300px] pr-4">
            {workflowData.map((workflow, i) => (
              <div key={i} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">{workflow.name}</span>
                  <span className="text-sm text-muted-foreground">{workflow.executions}</span>
                </div>
                <span className="text-sm">{workflow.credits}</span>
              </div>
            ))}
          </ScrollArea>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Executions</h2>
          <ScrollArea className="h-[300px] pr-4">
            {recentExecutions.map((execution, i) => (
              <div key={i} className="flex items-center justify-between py-2">
                <div className="flex flex-col">
                  <span>{execution.name}</span>
                  <span className="text-sm text-muted-foreground">{execution.time}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-sm ${execution.status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                    {execution.status === 'success' ? '✓ Success' : '✕ Error'}
                  </span>
                  <span className="text-sm">{execution.credits}</span>
                </div>
              </div>
            ))}
          </ScrollArea>
        </Card>
      </div>
    </div>
  )
}