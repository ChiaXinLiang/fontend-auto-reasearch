import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search } from "lucide-react"

export default function SearchHome() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold">Paper List Query Search</h1>
      <Card className="bg-white shadow-sm">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <Search className="mx-auto h-12 w-12 text-primary" />
            <h2 className="text-2xl font-semibold">Start Your Research</h2>
            <p className="text-muted-foreground">
              Search for academic papers, apply filters, and analyze results.
            </p>
            <Link href="/search/query">
              <Button className="mt-4">Begin Search</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}