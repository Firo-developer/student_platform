"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const subjects = [
  {
    value: "all",
    label: "All Subjects",
  },
  {
    value: "math",
    label: "Mathematics",
  },
  {
    value: "science",
    label: "Science",
  },
  {
    value: "english",
    label: "English",
  },
  {
    value: "history",
    label: "History",
  },
  {
    value: "geography",
    label: "Geography",
  },
  {
    value: "computer-science",
    label: "Computer Science",
  },
  {
    value: "physics",
    label: "Physics",
  },
  {
    value: "chemistry",
    label: "Chemistry",
  },
  {
    value: "biology",
    label: "Biology",
  },
]

export function SubjectSelector() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("all")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {value ? subjects.find((subject) => subject.value === value)?.label : "Select subject..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search subject..." />
          <CommandList>
            <CommandEmpty>No subject found.</CommandEmpty>
            <CommandGroup>
              {subjects.map((subject) => (
                <CommandItem
                  key={subject.value}
                  value={subject.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === subject.value ? "opacity-100" : "opacity-0")} />
                  {subject.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

