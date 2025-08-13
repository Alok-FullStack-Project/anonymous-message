import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST() {
  try {
    const prompt = "Create a list of three open-ended and engaging questions formatted as a single string...";

    const response = streamText({
      model: openai('gpt-3.5-turbo-instruct'),
      prompt,
      // maxTokens: 400, // ← remove this
    });

    return response.toTextStreamResponse();
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
