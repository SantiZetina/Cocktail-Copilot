const axios = require("axios");

exports.sendMessage = async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const reply = response.data.choices[0].message.content.trim();

    res.json({ message: reply });
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    res.status(500).json({ message: "Error processing the request" });
  }
};
