"use client"
import { useState } from "react"
import Link from "next/link"
import { ArrowRight, BellIcon } from "lucide-react"
import { ARE_APPLICATIONS_OPEN } from "@/lib/appConfig"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

/**
 * Defines the props that the component can accept.
 * @param className - Additional CSS classes for layout control (e.g. hidden, md:flex).
 * @param variant - 'default' for desktop view, 'mobile' for a compact view.
 */
interface ApplicationButtonProps {
  className?: string;
  variant?: 'default' | 'mobile';
}

/**
 * ApplicationButton component
 * - Shows an apply button if applications are open.
 * - Shows a dialog to collect emails if applications are closed.
 * - Accepts a 'variant' to adapt its style for desktop or mobile.
 */
const ApplicationButton = ({ className, variant = 'default' }: ApplicationButtonProps): React.ReactElement => {
  // --- State and form logic remain unchanged ---
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    try {
      const response = await fetch("/email_api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setMessage("Thank you! You've been added to the list.")
        setEmail("")
        setTimeout(() => {
          setIsModalOpen(false)
          setMessage("")
        }, 2000)
      } else {
        setMessage("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      setMessage("A network error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  };

  const isMobile = variant === 'mobile';

  return ARE_APPLICATIONS_OPEN ? (
  // OPEN STATE: "Apply Now" button
    <Link href="/apply" className={cn(className)}>
      <Button 
        size="lg"
        className={cn(
          "transition-colors duration-300 text-white w-full",
          isMobile 
            ? "bg-accent-prim/90 hover:bg-accent-prim text-base"
            : "bg-accent-prim hover:bg-accent-yellow"
        )}
      >
        {isMobile ? "Apply Now" : "Apply Now - Limited Spots"}
        {!isMobile && <ArrowRight className="ml-2 h-5 w-5" />}
      </Button>
    </Link>
  ) : (
  // CLOSED STATE: "Get Notified" button
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <div className={cn(className)}>
          <Button
            size="lg"
            className={cn(
              "transition-colors duration-300 text-black w-full",
              isMobile 
                ? "bg-yellow-500/90 hover:bg-yellow-500 text-base"
                : "bg-yellow-500 hover:bg-yellow-400"
            )}
          >
            {isMobile ? "Get Notified" : "Get Notified for Next Cohort"}
            {!isMobile && <BellIcon className="ml-2 h-5 w-5" />}
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get Notified</DialogTitle>
          <DialogDescription>
            Enter your email below, and we'll notify you when applications for the next cohort open.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleNotifySubmit} className="grid gap-4 py-4">
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="col-span-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Enviando..." : "Notify Me"}
          </Button>
          {message && <p className="text-sm text-center text-gray-400">{message}</p>}
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ApplicationButton