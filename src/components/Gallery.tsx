import React, { useState } from 'react';
import { productsData, ProductData } from '../data/products';
import { checkGuess } from '../utils/openai';

const Gallery: React.FC = () => {
  // Initialize local state with product data
  const [products, setProducts] = useState<ProductData[]>(productsData);
  const [guesses, setGuesses] = useState<string[]>(Array(products.length).fill(''));

  // Evaluate guess via OpenAI
  const evaluateGuess = async (guess: string, answer: string) => {
    // TODO: customize the prompt below. Use variables: guess and answer
    const prompt = `This is a guessing game. There are a bunch of images of products and a user is asked to guess what they think it is. Can you return a number between 0 and 10 to represent how close the guess is to the answer? A 0 should be returned rarely and I am pretty flexible so as long as they are pretty close to the correct answer you can return a 10. I only want you to return a number between 0 and 10 (no decimals) and no other text. Here is the guess and the answer: Guess: ${guess}; Answer: ${answer}.`;
    // Call the API (using existing utility)
    return await checkGuess(prompt);
  };

  const handleInputChange = (index: number, value: string) => {
    const newGuesses = [...guesses];
    newGuesses[index] = value;
    setGuesses(newGuesses);
  };

  const handleGuess = async (index: number) => {
    const guess = guesses[index];
    const answer = products[index].answer;
    // Mark attempted
    setProducts(prev => prev.map((p, i) => i === index ? { ...p, attempted: true } : p));
    // Evaluate via OpenAI
    const { correct, result, error } = await evaluateGuess(guess, answer);
    if (error) {
      // TODO!
      return;
    }
  
    const numeric = Number(result);
    const warmth = Number.isFinite(numeric)
      ? Math.max(0, Math.min(100, Math.round(numeric * 10)))
      : 0;
    setProducts(prev =>
      prev.map((p, i) => (i === index ? { ...p, warmth, answered: correct } : p))
    );
  };

  return (
    <div className="gallery-container">
      <div className="image-grid">
        {products.map((product, index) => (
          <div key={product.name} className="image-card">
            <img src={`/amazon-images/${product.name}.PNG`} alt={product.name} className="gallery-image" />
            <div className="guess-controls">
              {product.answered ? (
                <p className="success-text">You got this right!</p>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Your guess"
                    value={guesses[index]}
                    className="guess-input"
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                  <button className="guess-button" onClick={() => handleGuess(index)}>
                    Submit
                  </button>
                </>
              )}
              <div className="progress-bar">
                <div className="progress" style={{ width: `${product.warmth}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
