// components/ApplicationButton.tsx

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

/**
 * ApplicationButton component
 * - Shows an apply button if applications are open.
 * - Shows a dialog to collect email for notifications if applications are closed.
 */
const ApplicationButton = (): React.ReactElement => {
  // --- State for handling the form ---
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  /**
   * Handles notification form submission by calling the backend API.
   */
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
        setEmail("") // Clear the input
        // Close the modal after 2 seconds so the user can see the message
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
  }

  return ARE_APPLICATIONS_OPEN ? (
  // Show apply button if applications are open
    <Link href="/apply">
      <Button size="lg" className="bg-accent-prim hover:bg-accent-yellow text-white transition-colors duration-300">
        Apply Now - Limited Spots
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </Link>
  ) : (
  // Show dialog to collect email if applications are closed
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-yellow-500 hover:bg-yellow-400 text-black transition-colors duration-300"
        >
          Get Notified for Next Cohort
          <BellIcon className="ml-2 h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get Notified</DialogTitle>
          <DialogDescription>
            Enter your email below, and we'll notify you when applications for the next cohort open.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleNotifySubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
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
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Enviando..." : "Notify Me"}
          </Button>
          {/* Show success or error message */}
          {message && <p className="text-sm text-center text-gray-400">{message}</p>}
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ApplicationButton