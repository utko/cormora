const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const { destination, budget } = req.body;

    const response = await axios({
      method: 'post',
      url: 'https://api.openai.com/v4/engines/davinci-codex/completions',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      data: {
        prompt: `${destination} travel under ${budget}`,
        max_tokens: 60
      }
    });

    res.status(200).json({ data: response.data.choices[0].text });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
