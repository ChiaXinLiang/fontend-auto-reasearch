"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText } from "lucide-react"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function GenerateArticle() {
  const [outline, setOutline] = useState('')
  const [article, setArticle] = useState('')
  const searchParams = useSearchParams()

  useEffect(() => {
    const outlineParam = searchParams.get('outline')
    if (outlineParam) {
      setOutline(decodeURIComponent(outlineParam))
    }
  }, [searchParams])

  const handleGenerateArticle = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual article generation
    setArticle(`
# Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Main Point 1

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Subpoint A

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

### Subpoint B

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Main Point 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

# Conclusion

In conclusion, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `)
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Generate Article</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Create Your Article
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleGenerateArticle} className="space-y-4">
            <div>
              <label htmlFor="outline" className="block text-sm font-medium mb-1">Outline</label>
              <Textarea
                id="outline"
                placeholder="Your outline will appear here"
                value={outline}
                onChange={(e) => setOutline(e.target.value)}
                className="w-full h-64"
                readOnly
              />
            </div>
            <Button type="submit">Generate Article</Button>
          </form>
        </CardContent>
      </Card>
      {article && (
        <Card>
          <CardHeader>
            <CardTitle>Generated Article</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={article}
              readOnly
              className="w-full h-96 font-mono text-sm"
            />
          </CardContent>
        </Card>
      )}
      <div className="text-center">
        <Link href="/article/input-outline">
          <Button variant="outline">Back to Input Outline</Button>
        </Link>
      </div>
    </div>
  )
}