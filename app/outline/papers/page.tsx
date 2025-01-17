"use client"

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import { Paper, findPaper, paperDatabase } from '@/data/paperDatabase'

export default function OutlinePapers() {
  const searchParams = useSearchParams()
  const topic = searchParams.get('topic')
  const title = searchParams.get('title')

  const [papers, setPapers] = useState<Paper[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    // Simulate pre-populated papers from the search step
    const prePopulatedPapers = paperDatabase.slice(0, 3) // Get first 3 papers as pre-populated
    setPapers(prePopulatedPapers)
  }, [])

  const handleAddPaper = () => {
    const foundPaper = findPaper(searchQuery)
    if (foundPaper && !papers.some(p => p.id === foundPaper.id)) {
      setPapers([...papers, foundPaper])
      setSearchQuery('')
    } else {
      alert('Paper not found or already added')
    }
  }

  const handleRemove = (id: string) => {
    setPapers(papers.filter(paper => paper.id !== id))
  }

  const handleNext = () => {
    // Redirect to generate-section page
    window.location.href = `/outline/generate-section?topic=${encodeURIComponent(topic || '')}&title=${encodeURIComponent(title || '')}`
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Paper List Generation</h1>
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-2">
            <Input
              placeholder="Enter paper title or ID"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={handleAddPaper}>Add Paper</Button>
          </div>
        </CardContent>
      </Card>
      <div className="space-y-4">
        {papers.map((paper) => (
          <Card key={paper.id}>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-2">{paper.title}</h2>
              <p className="text-sm text-gray-600 mb-2">Authors: {paper.authors}</p>
              <p className="text-sm text-gray-700 mb-4">{paper.description}</p>
              <Button variant="destructive" size="sm" onClick={() => handleRemove(paper.id)}>Remove</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-between">
        <Link href="/outline/topic">
          <Button variant="outline">Back</Button>
        </Link>
        <Button onClick={handleNext}>Next: Generate Section</Button>
      </div>
    </div>
  )
}