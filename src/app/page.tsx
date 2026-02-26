"use client"

import { QuizForm } from "@/components/quiz-form/quiz-form"
export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center p-10">
      <h1 className="text-4xl font-bold text-center text-[48px] text-[var(--dlb)]">
        Turn any PDF into a Quiz
      </h1>
      <div className="max-w-[600px] flex items-center flex-col gap-1">
        <span className="text-center text-md text-gray-600 ">
          Perfect for educators, students, and anyone looking to test their
          knowledge. Try it now and turn your PDFs into interactive learning
          experiences!
        </span>
      </div>
      <QuizForm />
    </main>
  )
}
