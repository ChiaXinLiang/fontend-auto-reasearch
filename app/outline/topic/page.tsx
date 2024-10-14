"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Link from 'next/link'

export default function OutlineTopic() {
  const [topic, setTopic] = useState('')
  const [selectedTitle, setSelectedTitle] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to paper list page
    window.location.href = `/outline/papers?topic=${encodeURIComponent(topic)}&title=${encodeURIComponent(selectedTitle)}`
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Choose Your Topic</h1>
      <Card>
        <CardHeader>
          <CardTitle>Title Generation</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="topic">Your Topic</Label>
              <Input
                id="topic"
                placeholder="Enter your research topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            <div>
              <Label>Suggested Titles</Label>
              <RadioGroup value={selectedTitle} onValueChange={setSelectedTitle}>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <RadioGroupItem value="title1" id="title1" />
                    <Label htmlFor="title1" className="ml-2">Revolutionizing Patient Care: AI's Role in Medical Diagnosis</Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="title2" id="title2" />
                    <Label htmlFor="title2" className="ml-2">AI in Healthcare: Challenges and Opportunities for the Future</Label>
                  </div>
                  {/* Add more title options as needed */}
                </div>
              </RadioGroup>
            </div>
            <Button type="submit">Confirm Title</Button>
          </form>
        </CardContent>
      </Card>
      <div className="text-center">
        <Link href="/outline">
          <Button variant="outline">Back to Outline Home</Button>
        </Link>
      </div>
    </div>
  )
}