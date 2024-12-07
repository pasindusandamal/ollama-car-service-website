const axios = require('axios');

exports.handleChat = async (req, res) => {
  try {
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: "deepseek-coder-v2:16b",
      prompt: req.body.message,
      stream: false
    });
    
    res.json({ response: response.data.response });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to process request' });
  }
};