import { Button } from "@/components/ui/button"
import { Upload, Search } from "lucide-react"
import { Montserrat } from "next/font/google"
import Link from "next/link"

const monte = Montserrat({ subsets: ["latin"] })

export default function HeroSection() {
    return (
        <section className="container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-2xl mx-auto text-center space-y-4">
                <h1 className={`text-5xl lg:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 ${monte.className}`}>
                    Ask questions about your <span className="text-white/80 italic">PDF documents</span>
                </h1>
                <p className="text-sm text-gray-700 max-w-lg mx-auto">
                    Seamlessly upload your PDFs and let our AI do the heavy lifting — get instant, intelligent answers extracted in seconds.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href='/chat'
                        className={`bg-[#ea580c] hover:bg-[#fec390] text-sm flex p-2 font-semibold text-white cursor-pointer rounded-full px-8 transition-colors duration-300 ${monte.className}`}
                    >
                        <Upload className="mr-2 mt-0.5 h-4 w-4" />
                        Upload PDF
                    </Link>
                </div>
            </div>
        </section>
    )
}
