import OpenAI from 'openai';

// Exported OpenAI client for custom calls
export const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  //REMOVE BEFORE LOADING
  dangerouslyAllowBrowser: true 
});

export async function checkGuess(prompt: string) {
  const res = await fetch('/.netlify/functions/check-guess', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err || 'Function error');
  }

  const data = await res.json();
  return { result: data.result, error: data.error, correct: data.correct };
}