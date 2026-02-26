import { NextRequest, NextResponse } from "next/server"
import fs from "fs/promises"
import { client } from "@/lib/gemini-ai"

export async function POST(req: NextRequest) {
  const data = await req.json()
  const text = data.text

  try {
    const instructions = await fs.readFile("instructions.txt", "utf-8")
    const response = await client.models.generateContent({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: instructions,
      },
      contents: text,
    })

    return NextResponse.json(
      { result: response.text },
      {
        status: 200,
      },
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Failed to generate Questionnaire please try again later." },
      {
        status: 500,
      },
    )
  }
}
