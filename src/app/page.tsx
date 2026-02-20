"use client"

import { QuizForm } from "@/components/quiz-form/quiz-form"
export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center p-10">
      <h1 className="text-4xl font-bold text-center">PDF Quiz Generator</h1>
      <QuizForm />
    </main>
  )
}
