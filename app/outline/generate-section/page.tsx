"use client"

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from 'next/link'

export default function GenerateSection() {
  const searchParams = useSearchParams()
  const topic = searchParams.get('topic')
  const title = searchParams.get('title')

  const [outlineSections, setOutlineSections] = useState([
    { title: "I. Introduction", description: "Brief overview, importance, and thesis statement" },
    { title: "II. Background", description: "Historical context, relevant information, and current state" },
    { title: "III. Main Points", description: "Key arguments or ideas" },
    { title: "IV. Analysis", description: "In-depth examination of main points" },
    { title: "V. Counterarguments", description: "Potential objections and rebuttals" },
    { title: "VI. Conclusion", description: "Summary, thesis restatement, and final thoughts" }
  ])

  const [generatedOutline, setGeneratedOutline] = useState('')

  const handleSaveSection = (index: number) => {
    // Implement save functionality here
    console.log(`Saving section ${index}`)
  }

  const handleRemoveSection = (index: number) => {
    setOutlineSections(outlineSections.filter((_, i) => i !== index))
  }

  const handleAddSection = () => {
    setOutlineSections([...outlineSections, { title: "New Section", description: "Description" }])
  }

  const handleGenerateOutline = () => {
    setGeneratedOutline(outlineSections.map(section => `${section.title}\n${section.description}`).join('\n\n'))
    // Redirect to generate-subsection page
    window.location.href = '/outline/generate-subsection'
  }

  const handleSaveProgress = () => {
    // Implement save progress functionality here
    console.log("Saving progress...")
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Outline Generator</h1>
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-2">Generated Outline</h2>
          <Textarea
            placeholder="Input text"
            value={generatedOutline}
            onChange={(e) => setGeneratedOutline(e.target.value)}
            className="w-full h-64"
          />
          <div className="flex justify-between mt-4">
            <Button variant="outline">Download Prompt</Button>
            <Button>Apply</Button>
          </div>
        </CardContent>
      </Card>
      <h2 className="text-2xl font-semibold">Outline Suggestions</h2>
      <div className="space-y-4">
        {outlineSections.map((section, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <Input
                value={section.title}
                onChange={(e) => {
                  const newSections = [...outlineSections]
                  newSections[index].title = e.target.value
                  setOutlineSections(newSections)
                }}
                className="text-xl font-semibold mb-2"
              />
              <Textarea
                value={section.description}
                onChange={(e) => {
                  const newSections = [...outlineSections]
                  newSections[index].description = e.target.value
                  setOutlineSections(newSections)
                }}
                className="text-sm text-gray-700 mb-4"
              />
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="sm" onClick={() => handleSaveSection(index)}>
                  Save
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleRemoveSection(index)}>
                  Remove
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
        <Button onClick={handleAddSection} className="w-full">+</Button>
      </div>
      <div className="flex justify-between">
        <Link href="/outline/papers">
          <Button variant="outline">Back</Button>
        </Link>
        <div className="space-x-2">
          <Button variant="outline" onClick={handleSaveProgress}>Save Progress</Button>
          <Button onClick={handleGenerateOutline}>Generate Outline</Button>
        </div>
      </div>
    </div>
  )
}