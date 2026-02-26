import { NextRequest, NextResponse } from "next/server"
import fs from "fs/promises"
import { client } from "@/lib/gemini-ai"

export async function POST(req: NextRequest) {
  const data = await req.json()
  const { questions, answers, context } = data.data

  try {
    const instructions = await fs.readFile("submit-quiz.txt", "utf-8")
    const response = await client.models.generateContent({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: instructions,
      },
      contents: {
        parts: [
          {
            text: context,
          },
          {
            text: questions.join("\n\n"),
          },
          {
            text: answers.join("\n\n"),
          },
        ],
      },
    })

    return NextResponse.json(
      { result: response.text },
      {
        status: 200,
      },
    )
  } catch (error) {
    console.error({ error })
    return NextResponse.json(
      { message: "Failed to submit please try again later." },
      {
        status: 500,
      },
    )
  }
}
