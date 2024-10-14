import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileSearch, FileText, PenTool } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Research Assistant</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your all-in-one tool for academic research and writing. Search papers, generate outlines, and create articles with ease.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileSearch className="h-6 w-6 text-primary" />
              Search Papers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <CardDescription>
              Find relevant academic papers for your research with our powerful search tool.
            </CardDescription>
            <Link href="/search">
              <Button className="w-full">Start Searching</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PenTool className="h-6 w-6 text-primary" />
              Generate Outline
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <CardDescription>
              Create structured outlines for your articles based on your chosen topic.
            </CardDescription>
            <Link href="/outline">
              <Button className="w-full">Create Outline</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              Generate Article
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <CardDescription>
              Transform your outline into a fully-fledged article with our AI-powered writing assistant.
            </CardDescription>
            <Link href="/article">
              <Button className="w-full">Write Article</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}