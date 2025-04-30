// netlify/functions/check-guess.ts
import { Handler } from '@netlify/functions'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY,    // set via Netlify UI or local .env
})

export const handler: Handler = async (event) => {
  try {
    const { prompt } = JSON.parse(event.body || '{}')
    if (!prompt) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing prompt' }) }
    }
    const resp = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    })
    let result: string
    let error = false
    let correct = false
    result = resp.choices[0]?.message?.content || "I couldn't evaluate the guess.";
    if (result === "I couldn't evaluate the guess.") {
      correct = false
      error = true
    } else if (result === "10") {
      correct = true
      error = false
    } else if (Number.isNaN(parseInt(result))) {
      correct = false
      error = true
    } else {
      correct = false
      error = false
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ result, correct, error }),
    }
  } catch (e) {
    console.error(e)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error' }),
    }
  }
}