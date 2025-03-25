import * as React from "react"

import { cn } from "@/lib/utils"

const Shell = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("container relative mx-auto space-y-8 lg:py-12", className)} {...props} />
})
Shell.displayName = "Shell"

export { Shell }

