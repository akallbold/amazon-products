import OpenAI from 'openai';

// Exported OpenAI client for custom calls
export const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  //REMOVE BEFORE LOADING
  dangerouslyAllowBrowser: true 
});

export const checkGuess = async (prompt: string): Promise<{ correct: boolean; result: string, error?: boolean }> => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that evaluates guesses about product uses. Provide feedback on how close the guess is to the correct answer.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const result = response.choices[0]?.message?.content || "I couldn't evaluate the guess.";
    console.log({result})
    if (result === "I couldn't evaluate the guess.") {
      return { correct: false, result, error: true };
    }
    if (result === "10") {
      return { correct: true, result: "You got it right!" };
    } 
    if (Number.isNaN(parseInt(result))) {
      return { correct: false, result, error: true };
    }

    return { correct: false, result };
  } catch (error) {
    console.error('Error checking guess:', error);
    return { correct: false, result:error as string, error: true };
  }
};
