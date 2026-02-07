"use client"

import React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "baut", label: "Baut & Mur", count: 245 },
  { id: "pengereman", label: "Pengereman", count: 128 },
  { id: "carbon", label: "Body Carbon", count: 89 },
  { id: "velg", label: "Velg & Ban", count: 156 },
  { id: "cnc", label: "Aksesoris CNC", count: 312 },
]

const motors = [
  { id: "rxking", label: "Yamaha RX-King" },
  { id: "ninja", label: "Kawasaki Ninja" },
  { id: "vario", label: "Honda Vario" },
  { id: "aerox", label: "Yamaha Aerox" },
  { id: "nmax", label: "Yamaha NMAX" },
  { id: "pcx", label: "Honda PCX" },
]

interface FilterGroupProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

function FilterGroup({ title, children, defaultOpen = true }: FilterGroupProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-border pb-4">
      <button
        type="button"
        className="flex w-full items-center justify-between py-2 text-sm font-bold text-foreground"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="mt-2 space-y-2">{children}</div>}
    </div>
  )
}

export function FilterSidebar() {
  return (
    <aside className="w-full rounded-lg border border-border bg-card p-4 lg:w-64">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-black text-foreground">Filter</h2>
        <Button variant="ghost" size="sm" className="h-8 text-xs text-primary hover:text-primary">
          Reset
        </Button>
      </div>

      <div className="space-y-4">
        <FilterGroup title="Kategori">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id={category.id} />
                <Label
                  htmlFor={category.id}
                  className="cursor-pointer text-sm text-muted-foreground hover:text-foreground"
                >
                  {category.label}
                </Label>
              </div>
              <span className="text-xs text-muted-foreground">({category.count})</span>
            </div>
          ))}
        </FilterGroup>

        <FilterGroup title="Tipe Motor">
          {motors.map((motor) => (
            <div key={motor.id} className="flex items-center gap-2">
              <Checkbox id={motor.id} />
              <Label
                htmlFor={motor.id}
                className="cursor-pointer text-sm text-muted-foreground hover:text-foreground"
              >
                {motor.label}
              </Label>
            </div>
          ))}
        </FilterGroup>
      </div>
    </aside>
  )
}
