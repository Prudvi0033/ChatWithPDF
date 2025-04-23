import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs"

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <FileText className="h-8 w-8 text-orange-500" />
        <span className="text-2xl font-bold italic tracking-tight">AskMyPDF</span>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </Link>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 shadow-md transition-all hover:shadow-lg">
          <SignedOut>
            <SignUpButton/>
          </SignedOut>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}
