import { Button } from "@/components/ui/button"
import { Upload, Search } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
          Ask questions about your <span className="text-orange-500">PDF documents</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Upload your PDFs and get instant answers. Our AI-powered tool helps you extract information from your
          documents in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 shadow-md transition-all hover:shadow-lg"
          >
            <Upload className="mr-2 h-5 w-5" />
            Upload PDF
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-orange-200 text-orange-700 hover:bg-orange-100 rounded-full px-8"
          >
            <Search className="mr-2 h-5 w-5" />
            Try Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
