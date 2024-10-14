"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from 'next/link'
import { Outline, OutlineSection, getRandomOutline } from '@/data/sampleOutlines'

export default function GenerateSubsectionContent() {
  const [outline, setOutline] = useState<Outline | null>(null)
  const [selectedSection, setSelectedSection] = useState('')
  const [selectedSubsection, setSelectedSubsection] = useState('')
  const [subsectionDescription, setSubsectionDescription] = useState('')
  const [generatedContent, setGeneratedContent] = useState('')
  const [summary, setSummary] = useState('')
  const [papers, setPapers] = useState(['Paper 1', 'Paper 2', 'Paper 3'])

  const citations = [
    'Author, A. (2025). Title of the paper. Journal, 10(2), 123-456.',
    'Researcher, B. (2025). Another relevant study. Conference Proceedings, 78-90.'
  ]

  useEffect(() => {
    const randomOutline = getRandomOutline()
    setOutline(randomOutline)
    if (randomOutline.sections.length > 0) {
      setSelectedSection(randomOutline.sections[0].title)
      if (randomOutline.sections[0].subsections.length > 0) {
        setSelectedSubsection(randomOutline.sections[0].subsections[0])
      }
    }
  }, [])

  const handleGenerateContent = () => {
    setGeneratedContent('Generated content for ' + selectedSubsection + ' will appear here.')
  }

  const handleGenerateRelatedPapers = () => {
    setPapers([...papers, 'New Related Paper'])
  }

  const handleGenerateSummary = () => {
    setSummary('Summary of the generated content for ' + selectedSubsection + '...')
  }

  const handleDownloadPrompt = () => {
    console.log('Downloading prompt...')
  }

  const handleEditAllPapers = () => {
    console.log('Editing all papers...')
    // Implement the logic to edit all papers here
  }

  const getCurrentSubsectionIndex = () => {
    const currentSection = outline?.sections.find(s => s.title === selectedSection)
    return currentSection?.subsections.indexOf(selectedSubsection) || 0
  }

  const getAdjacentSubsection = (direction: 'previous' | 'next') => {
    const currentSection = outline?.sections.find(s => s.title === selectedSection)
    if (!currentSection) return null

    const currentIndex = getCurrentSubsectionIndex()
    const newIndex = direction === 'previous' ? currentIndex - 1 : currentIndex + 1

    if (newIndex >= 0 && newIndex < currentSection.subsections.length) {
      return currentSection.subsections[newIndex]
    }

    return null
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Generate Subsection Content</h1>
      
      <Select value={selectedSection} onValueChange={setSelectedSection}>
        <SelectTrigger>
          <SelectValue placeholder="Choose a section" />
        </SelectTrigger>
        <SelectContent>
          {outline?.sections.map((section) => (
            <SelectItem key={section.title} value={section.title}>
              {section.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-semibold mb-4">{selectedSubsection}</h2>
          <Textarea
            placeholder="Input description"
            value={subsectionDescription}
            onChange={(e) => setSubsectionDescription(e.target.value)}
            className="w-full h-32 mb-4"
          />
          <div className="space-y-2">
            <h3 className="font-semibold">Reference Papers</h3>
            <div className="flex justify-between items-center">
              <Button variant="outline" size="sm" onClick={handleEditAllPapers}>edit all papers</Button>
              <Button onClick={handleGenerateRelatedPapers}>Generate Related Papers</Button>
            </div>
            {papers.map((paper, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id={`paper-${index}`} />
                <label htmlFor={`paper-${index}`}>{paper}</label>
              </div>
            ))}
            <Button variant="link">Show More ...</Button>
          </div>
          <div className="flex justify-between mt-4">
            <Button variant="outline" onClick={handleDownloadPrompt}>Download Prompt</Button>
            <Button onClick={handleGenerateContent}>Generate Content</Button>
          </div>
        </CardContent>
      </Card>

      {generatedContent && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Generated Content</h3>
            <Textarea value={generatedContent} readOnly className="w-full h-64" />
          </CardContent>
        </Card>
      )}

      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Citations</h3>
            <Button variant="outline" size="sm" onClick={handleEditAllPapers}>edit all papers</Button>
          </div>
          {citations.map((citation, index) => (
            <p key={index} className="text-sm text-gray-600">{citation}</p>
          ))}
          <Button variant="link">Show More ...</Button>
          <Button onClick={handleGenerateSummary} className="mt-4">Generate Summary</Button>
        </CardContent>
      </Card>

      {summary && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Summary</h3>
            <Textarea value={summary} readOnly className="w-full h-32" />
          </CardContent>
        </Card>
      )}

      <div className="flex justify-between items-center">
        <Button 
          variant="link" 
          onClick={() => {
            const prevSubsection = getAdjacentSubsection('previous')
            if (prevSubsection) setSelectedSubsection(prevSubsection)
          }}
          disabled={!getAdjacentSubsection('previous')}
        >
          ← {getAdjacentSubsection('previous') || 'No previous subsection'}
        </Button>
        <Button 
          variant="link"
          onClick={() => {
            const nextSubsection = getAdjacentSubsection('next')
            if (nextSubsection) setSelectedSubsection(nextSubsection)
          }}
          disabled={!getAdjacentSubsection('next')}
        >
          {getAdjacentSubsection('next') || 'No next subsection'} →
        </Button>
      </div>

      <div className="flex justify-between">
        <Link href="/article/input-outline">
          <Button variant="outline">Back</Button>
        </Link>
        <Button>Generate Section</Button>
      </div>
    </div>
  )
}