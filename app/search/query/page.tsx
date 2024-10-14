"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter } from "lucide-react"
import Link from 'next/link'

export default function SearchQuery() {
  const [query, setQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to results page
    window.location.href = `/search/results?query=${encodeURIComponent(query)}`
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold">Paper List Query Search</h1>
      <Card className="bg-white shadow-sm">
        <CardContent className="pt-6">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex gap-2">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  placeholder="Enter your research query (e.g., machine learning in healthcare)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pr-10 bg-gray-50 border-gray-300"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <Button type="submit" className="bg-gray-700 hover:bg-gray-600">
                Search
              </Button>
            </div>
            <Button
              type="button"
              variant="outline"
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 flex items-center justify-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {showFilters && (
        <Card className="bg-gray-50 border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl text-gray-700">Filter Options</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add filter options here */}
            <p className="text-muted-foreground">Filter options will be implemented here.</p>
          </CardContent>
        </Card>
      )}

      <div className="text-center">
        <Link href="/search">
          <Button variant="outline">Back to Search Home</Button>
        </Link>
      </div>
    </div>
  )
}