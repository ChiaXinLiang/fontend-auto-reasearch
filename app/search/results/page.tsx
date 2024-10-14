"use client"

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, PieChart } from "lucide-react"
import Link from 'next/link'

export default function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('query')
  const [results, setResults] = useState([])

  useEffect(() => {
    // Simulating API call for results
    setResults([
      {
        title: "Machine Learning Applications in Healthcare: A Comprehensive Review",
        authors: "John Doe, Jane Smith",
        year: 2025,
        description: "This paper provides a comprehensive review of machine learning applications in healthcare, covering areas such as diagnosis, treatment planning, and patient monitoring."
      },
      {
        title: "Deep Learning for Medical Image Analysis: Current Trends and Future Directions",
        authors: "Alice Johnson, Bob Williams",
        year: 2025,
        description: "This study explores the current trends and future directions of deep learning applications in medical image analysis, focusing on areas such as radiology, pathology, and ophthalmology."
      }
    ])
  }, [query])

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold">Search Results</h1>
      <p className="text-muted-foreground">Showing results for: {query}</p>

      <div className="space-y-6">
        {results.map((paper, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-2">{paper.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{paper.authors} | {paper.year}</p>
              <p className="text-sm text-gray-700 mb-4">{paper.description}</p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">View Full Paper</Button>
                <Button variant="outline" size="sm">Add to References</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Results Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Distribution by Year</h3>
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <BarChart className="h-12 w-12 text-gray-400" />
                <span className="ml-2 text-gray-500">Chart: Publication Year Distribution</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Top Categories</h3>
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <PieChart className="h-12 w-12 text-gray-400" />
                <span className="ml-2 text-gray-500">Chart: Top Research Categories</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Link href="/search/query">
          <Button variant="outline">Back to Search</Button>
        </Link>
      </div>
    </div>
  )
}