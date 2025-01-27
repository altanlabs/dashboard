import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

const apps = [
  {
    name: "AI Image Generator",
    icon: "🎨",
    gradient: "from-[#FF3366] to-[#FF6B6B]"
  },
  {
    name: "Health and Fitness",
    icon: "👥",
    gradient: "from-[#4A90E2] to-[#357ABD]"
  },
  {
    name: "Pema 2",
    icon: "📊",
    gradient: "from-[#FF6B6B] to-[#FF3366]"
  },
  {
    name: "PaidAI",
    icon: "😊",
    gradient: "from-[#4A90E2] to-[#357ABD]"
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
  { name: "Daily Fact", time: "5 days ago", status: "success", credits: "3.39" }
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
          <Button variant="outline" className="text-[#4A90E2] border-[#4A90E2]">Invite</Button>
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
        <div className="flex items-center gap-4 max-w-2xl mx-auto">
          <div className="flex-1">
            <Input 
              className="bg-background"
              placeholder="A landing page for my business"
              startContent={
                <Button variant="ghost" className="px-2">
                  <span className="mr-2">App</span>
                  <span className="w-4 h-4 rounded-full bg-gradient-to-r from-[#FF3366] to-[#FF6B6B]" />
                </Button>
              }
            />
          </div>
          <Button className="bg-[#4A90E2] hover:bg-[#357ABD]">Create</Button>
        </div>
      </Card>

      {/* Quick Links */}
      <div className="flex gap-4 text-sm text-muted-foreground overflow-x-auto">
        <span>Personal Finance Dashboard</span>
        <span>Recipe Manager</span>
        <span>Habit Tracker</span>
        <span>Project Management Tool</span>
        <span>Social Media</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b">
        <button className="pb-2 border-b-2 border-[#4A90E2] font-medium">My Apps</button>
        <button className="pb-2 text-muted-foreground">Community</button>
        <button className="pb-2 text-muted-foreground">Featured</button>
      </div>

      {/* Apps Grid */}
      <div className="grid grid-cols-4 gap-4">
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