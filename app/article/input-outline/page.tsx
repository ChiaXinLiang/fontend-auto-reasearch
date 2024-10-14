"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function InputOutline() {
  const [outline, setOutline] = useState('')
  const router = useRouter()

  const handleUploadOutline = () => {
    // TODO: Implement file upload functionality
    console.log("Upload outline functionality to be implemented")
  }

  const handleProcessOutline = () => {
    // TODO: Implement outline processing
    console.log("Processing outline:", outline)
    // Navigate to the generate subsection content page
    router.push(`/article/generate-subsection-content?outline=${encodeURIComponent(outline)}`)
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Input Outline</h1>
      <Card>
        <CardHeader>
          <CardTitle>Enter your outline:</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Input text"
            value={outline}
            onChange={(e) => setOutline(e.target.value)}
            className="w-full h-64"
          />
          <div className="flex justify-between mt-4">
            <Button variant="outline" onClick={handleUploadOutline}>Upload Outline</Button>
            <Button onClick={handleProcessOutline}>Process Outline</Button>
          </div>
        </CardContent>
      </Card>
      <div className="text-center">
        <Link href="/article">
          <Button variant="outline">Back to Article Home</Button>
        </Link>
      </div>
    </div>
  )
}