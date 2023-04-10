const express = require('express');
const router = express.Router()

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// router.post('/generate', async (req, res) => {
//     const prompt = req.body.prompt; // Get the prompt from the request body.
  
//     try {
//       const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${OPENAI_API_KEY}`,
//         },
//         body: JSON.stringify({
//           prompt: prompt,
//           max_tokens: 100,
//           n: 1,
//           stop: null,
//           temperature: 1,
//         }),
//       });
  
//       const data = await response.json();
//       res.status(200).json(data.choices[0].text);
//     } catch (error) {
//       res.status(500).json({ message: 'Error generating cocktail recipe' });
//     }
//   });
  
router.post('/generate', async (req, res) => {
  const prompt = req.body.prompt;

  try {
    // Mock response
    const mockData = {
      id: "mock-id",
      object: "text.completion",
      created: 1629390290,
      model: "davinci-codex",
      usage: {
        prompt_tokens: 50,
        completion_tokens: 42,
        total_tokens: 92,
      },
      choices: [
        {
          text: 'Here is a mock cocktail recipe: 1 oz vodka, 1 oz cranberry juice, 1 oz orange juice. Shake with ice and strain into a glass.',
          index: 0,
          logprobs: null,
          finish_reason: "stop",
        },
      ],
    };

    res.status(200).json(mockData.choices[0].text);
  } catch (error) {
    res.status(500).json({ message: 'Error generating cocktail recipe' });
  }
});


router.get('/random', async (req, res) => {
  const randomCocktail = await randomCocktailFunction();

  res.status(200).json(randomCocktail);
})

module.exports = router;