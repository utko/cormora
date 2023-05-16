const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const { name, pax_number, travel_type, location, cash_amount } = req.body;
    const prompt = `Hello, I'm ${name} and want to make a travel with ${pax_number} to somewhere. The ideia of for this travel is that we like a trip base in ${travel_type}.  Today im located in ${location} and about the how much i want to expend the base is ${cash_amount}. I know you dont have information in realtime about the prices, but what I want is 3 options for a good trip with the informations that i provide.`;

    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt,
        max_tokens: 150,
        temperature: 0.6,
      },
      {
        headers: {
          'Authorization': `sk-IZdVP95PzoIvVFAtHrvET3BlbkFJXCOgczy2NPz92SNoYL9Nn`, // Replace with your OpenAI API key
          'Content-Type': 'application/json'
        }
      }
    );

    res.status(200).json({ data: response.data.choices[0].text.trim() });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while generating travel ideas.' });
  }
};
