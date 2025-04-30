import OpenAI from 'openai';

// Exported OpenAI client for custom calls
export const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  //REMOVE BEFORE LOADING
  dangerouslyAllowBrowser: true 
});

export async function checkGuess(prompt: string): Promise<{ result: string; error: string; correct: boolean }> {
  const res = await fetch('/.netlify/functions/check-guess', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error || 'Function error')
  return { result: data.result, error: data.error, correct: data.correct }
}

    
