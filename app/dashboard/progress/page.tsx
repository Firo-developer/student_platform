import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BookOpen, BrainCircuit, Calculator, Code, FileText, FlaskRoundIcon as Flask } from "lucide-react"
import { SubjectProgressCard } from "@/components/subject-progress-card"
import { WeeklyActivityChart } from "@/components/weekly-activity-chart"
import { LearningStreak } from "@/components/learning-streak"
import { SkillBreakdown } from "@/components/skill-breakdown"

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Progress Tracker</h1>
        <Button>Download Report</Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="subjects">Subjects</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <SubjectProgressCard
              subject="Mathematics"
              progress={78}
              color="bg-blue-100 dark:bg-blue-900/30"
              icon={<Calculator className="h-4 w-4 text-blue-500" />}
            />
            <SubjectProgressCard
              subject="Science"
              progress={65}
              color="bg-green-100 dark:bg-green-900/30"
              icon={<Flask className="h-4 w-4 text-green-500" />}
            />
            <SubjectProgressCard
              subject="Programming"
              progress={92}
              color="bg-purple-100 dark:bg-purple-900/30"
              icon={<Code className="h-4 w-4 text-purple-500" />}
            />
          </div>

          <WeeklyActivityChart />

          <div className="grid gap-4 md:grid-cols-2">
            <LearningStreak />
            <SkillBreakdown
              title="Top Skills"
              skills={[
                { name: "Problem Solving", progress: 85 },
                { name: "Critical Thinking", progress: 72 },
                { name: "Data Analysis", progress: 68 },
                { name: "Communication", progress: 76 },
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="subjects" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <SubjectProgressCard
              subject="Mathematics"
              progress={78}
              color="bg-blue-100 dark:bg-blue-900/30"
              icon={<Calculator className="h-4 w-4 text-blue-500" />}
            />
            <SubjectProgressCard
              subject="Science"
              progress={65}
              color="bg-green-100 dark:bg-green-900/30"
              icon={<Flask className="h-4 w-4 text-green-500" />}
            />
            <SubjectProgressCard
              subject="Programming"
              progress={92}
              color="bg-purple-100 dark:bg-purple-900/30"
              icon={<Code className="h-4 w-4 text-purple-500" />}
            />
            <SubjectProgressCard
              subject="Literature"
              progress={58}
              color="bg-yellow-100 dark:bg-yellow-900/30"
              icon={<BookOpen className="h-4 w-4 text-yellow-500" />}
            />
            <SubjectProgressCard
              subject="History"
              progress={42}
              color="bg-red-100 dark:bg-red-900/30"
              icon={<FileText className="h-4 w-4 text-red-500" />}
            />
            <SubjectProgressCard
              subject="AI & Machine Learning"
              progress={81}
              color="bg-indigo-100 dark:bg-indigo-900/30"
              icon={<BrainCircuit className="h-4 w-4 text-indigo-500" />}
            />
          </div>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <SkillBreakdown
              title="Technical Skills"
              skills={[
                { name: "Problem Solving", progress: 85 },
                { name: "Data Analysis", progress: 68 },
                { name: "Coding", progress: 92 },
                { name: "Algorithms", progress: 76 },
                { name: "Mathematics", progress: 78 },
              ]}
            />
            <SkillBreakdown
              title="Soft Skills"
              skills={[
                { name: "Critical Thinking", progress: 72 },
                { name: "Communication", progress: 76 },
                { name: "Teamwork", progress: 81 },
                { name: "Time Management", progress: 65 },
                { name: "Creativity", progress: 70 },
              ]}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

