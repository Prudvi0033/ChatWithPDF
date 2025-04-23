import { Button } from "@/components/ui/button"
import { Upload, Search } from "lucide-react"
import { Montserrat } from "next/font/google"

const monte = Montserrat({ subsets: ["latin"] })

export default function HeroSection() {
    return (
        <section className="container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-2xl mx-auto text-center space-y-4">
                <h1 className={`text-4xl lg:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 ${monte.className}`}>
                    Ask questions about your <span className="text-orange-500 italic">PDF documents</span>
                </h1>
                <p className="text-sm text-gray-600 max-w-lg mx-auto">
                    Seamlessly upload your PDFs and let our AI do the heavy lifting — get instant, intelligent answers extracted in seconds.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-orange-200 text-orange-700 hover:bg-orange-100 cursor-pointer rounded-full px-8"
                    >
                        <Upload className="mr-2 h-5 w-5" />
                        Upload PDF
                    </Button>
                </div>
            </div>
        </section>
    )
}
