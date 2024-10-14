import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText } from "lucide-react"

export default function ArticleHome() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold">Generate Article</h1>
      <Card className="bg-white shadow-sm">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <FileText className="mx-auto h-12 w-12 text-primary" />
            <h2 className="text-2xl font-semibold">Create Your Article</h2>
            <p className="text-muted-foreground">
              Transform your outline into a fully-fledged article with our AI-powered writing assistant.
            </p>
            <Link href="/article/input-outline">
              <Button className="mt-4">Start Writing</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}