import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

const config = new Configuration({
  apiKey: "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"
})

const openai = new OpenAIApi(config);

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages
  })
  
  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream); 
}