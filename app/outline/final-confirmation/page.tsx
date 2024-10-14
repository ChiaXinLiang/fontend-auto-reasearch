"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import Link from 'next/link'

export default function FinalConfirmation() {
  const [outline, setOutline] = useState(`1.Introduction
  Background of the topic
  Importance of the research
  Thesis statement

2.Literature Review
  Overview of existing research
  Key theories and concepts
  Gaps in current knowledge

3.Methodology
Research design
  Data collection methods
  Data analysis techniques

4.Results and Discussion
  Presentation of findings
  Interpretation of results
  Comparison with previous studies

5.Conclusion
  Summary of key points
  Implications of the research
  Suggestions for future studies`)

  const handleConfirmAndDownload = () => {
    // Logic to download the outline
    const element = document.createElement("a");
    const file = new Blob([outline], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "research_outline.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  const handleDownloadPrompt = () => {
    // Logic to download the prompt (you can replace this with the actual prompt content)
    const promptContent = "This is the prompt for generating the outline...";
    const element = document.createElement("a");
    const file = new Blob([promptContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "outline_prompt.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Final Confirmation</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Please review and confirm your modified outline before submission.
            <Button onClick={handleDownloadPrompt}>Download Prompt</Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={outline}
            onChange={(e) => setOutline(e.target.value)}
            className="w-full h-[60vh] font-mono text-sm"
          />
        </CardContent>
      </Card>
      <div className="flex justify-between">
        <Link href="/outline/generate-subsection">
          <Button variant="outline">Back</Button>
        </Link>
        <Button onClick={handleConfirmAndDownload}>Confirm and Download</Button>
      </div>
    </div>
  )
}