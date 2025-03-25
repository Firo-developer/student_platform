import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Skill {
  name: string
  progress: number
}

interface SkillBreakdownProps {
  skills: Skill[]
  title: string
}

export function SkillBreakdown({ skills, title }: SkillBreakdownProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="font-medium">{skill.name}</div>
                <div className="text-sm text-muted-foreground">{skill.progress}%</div>
              </div>
              <Progress value={skill.progress} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>
    )
  }

