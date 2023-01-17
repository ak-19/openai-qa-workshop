import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

async function makeCall(prompt) {
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt + '$',
    temperature: 0,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["$"],
  });

  return response.data.choices[0]?.text;
}


export default makeCall;