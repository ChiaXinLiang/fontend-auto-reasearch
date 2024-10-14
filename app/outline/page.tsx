import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PenTool } from "lucide-react"

export default function OutlineHome() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold">Generate Outline</h1>
      <Card className="bg-white shadow-sm">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <PenTool className="mx-auto h-12 w-12 text-primary" />
            <h2 className="text-2xl font-semibold">Create Your Outline</h2>
            <p className="text-muted-foreground">
              Generate a structured outline for your research paper or article.
            </p>
            <Link href="/outline/topic">
              <Button className="mt-4">Start Outline</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}