"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from 'next/link'

export default function GenerateSubsection() {
  const [selectedSection, setSelectedSection] = useState('Introduction')
  const [generatedOutline, setGeneratedOutline] = useState('')
  const [subsections, setSubsections] = useState([
    { title: "I. Subsection 1-1", description: "Description" },
    { title: "I. Subsection 1-2", description: "Description" },
    { title: "I. Subsection 1-3", description: "Description" }
  ])

  const handleSaveSubsection = (index: number) => {
    // Implement save functionality here
    console.log(`Saving subsection ${index}`)
  }

  const handleRemoveSubsection = (index: number) => {
    setSubsections(subsections.filter((_, i) => i !== index))
  }

  const handleAddSubsection = () => {
    setSubsections([...subsections, { title: "New Subsection", description: "Description" }])
  }

  const handleGenerateSubsection = () => {
    // Implement subsection generation logic here
    console.log("Generating subsection...")
    // Redirect to final confirmation page
    window.location.href = '/outline/final-confirmation'
  }

  const handleSaveProgress = () => {
    // Implement save progress functionality here
    console.log("Saving progress...")
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Subsections Outline Generator</h1>
      <div className="flex justify-between items-center">
        <Select value={selectedSection} onValueChange={setSelectedSection}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select section" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Introduction">Introduction</SelectItem>
            {/* Add more sections as needed */}
          </SelectContent>
        </Select>
        <Button>Save Subsection</Button>
      </div>
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
            <Button variant="outline">Download Papers</Button>
            <Button variant="outline">Download Prompt</Button>
            <Button>Apply</Button>
          </div>
        </CardContent>
      </Card>
      <h2 className="text-2xl font-semibold">Subsections Suggestions</h2>
      <div className="space-y-4">
        {subsections.map((subsection, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <Input
                value={subsection.title}
                onChange={(e) => {
                  const newSubsections = [...subsections]
                  newSubsections[index].title = e.target.value
                  setSubsections(newSubsections)
                }}
                className="text-xl font-semibold mb-2"
              />
              <Textarea
                value={subsection.description}
                onChange={(e) => {
                  const newSubsections = [...subsections]
                  newSubsections[index].description = e.target.value
                  setSubsections(newSubsections)
                }}
                className="text-sm text-gray-700 mb-4"
              />
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="sm" onClick={() => handleSaveSubsection(index)}>
                  Save
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleRemoveSubsection(index)}>
                  Remove
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
        <Button onClick={handleAddSubsection} className="w-full">+</Button>
      </div>
      <div className="flex justify-between">
        <Link href="/outline/generate-section">
          <Button variant="outline">Back</Button>
        </Link>
        <div className="space-x-2">
          <Button variant="outline" onClick={handleSaveProgress}>Save Progress</Button>
          <Button onClick={handleGenerateSubsection}>Generate Subsection</Button>
        </div>
      </div>
    </div>
  )
}