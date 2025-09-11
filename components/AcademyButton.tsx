import React from "react"
import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"
import Link from "next/link"

export default function AcademyButton() {
  return (
    <Link href="/academy">
      <Button className="bg-gradient-to-r from-[#627EEA] to-[#8A92B2] hover:from-[#4A67D6] hover:to-[#627EEA] text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-[#627EEA]/30 hover:border-[#627EEA]/60">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-6 w-6" />
          <span className="text-lg font-space-grotesk tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
            ACADEMY
          </span>
        </div>
      </Button>
    </Link>
  )
}
