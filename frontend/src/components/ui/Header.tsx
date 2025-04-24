import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs"
import { Montserrat } from "next/font/google"

const monte = Montserrat({ subsets: ["latin"] })

export default function Header() {
    return (
        <header className={`container mx-auto px-[14.5rem] py-6 flex justify-around items-center ${monte.className}`}>
            <div className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-orange-500" />
                <span className="text-xl font-bold italic tracking-tight">AskMyPDF</span>
            </div>
            <div className="flex items-center gap-4">
                <SignedIn>
                    <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                        <UserButton />
                    </Link>
                </SignedIn>
                <SignedOut>
                    <Button className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white rounded-full px-6 shadow-md transition-all hover:shadow-lg">
                        <SignUpButton />
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </SignedOut>
            </div>
        </header>
    )
}
