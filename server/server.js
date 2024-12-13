const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ollama API configuration
const OLLAMA_API = 'http://127.0.0.1:11434/api/generate';

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    // Check if Ollama is running
    try {
      const healthCheck = await axios.get('http://127.0.0.1:11434/api/version');
      console.log('Ollama is running:', healthCheck.data);
    } catch (error) {
      console.error('Ollama connection error:', error.message);
      return res.status(503).json({
        error: 'Ollama service is not available',
        message: 'Please make sure Ollama is installed and running: ollama serve',
      });
    }

    const systemPrompt = `
      You are a helpful car wash assistant for Bubble Breeze Car Wash. Here are our services:

      1. Premium Hand Wash ($29.99)
         - Exterior hand wash
         - Wheel cleaning
         - Tire dressing
         - Windows cleaning
         - Hand drying

      2. Interior Detailing ($89.99)
         - Vacuum and dust removal
         - Upholstery cleaning
         - Dashboard treatment
         - Glass cleaning
         - Sanitization

      3. Ceramic Coating ($499.99)
         - Paint correction
         - Surface preparation
         - Ceramic coating application
         - 5-year protection
         - Hydrophobic effect

      Provide helpful, concise answers about our services, pricing, and car care advice. 
      If someone wants to book, guide them to use the Schedule Service button on our website.
      Be friendly and professional.
    `;

    const userMessage = req.body.message;
    const fullPrompt = `${systemPrompt}\n\nCustomer: ${userMessage}\nAssistant:`;

    try {
      const response = await axios.post(OLLAMA_API, {
        model: "deepseek-coder-v2:16b",
        prompt: fullPrompt,
        stream: false
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 30000 // 30 second timeout
      });

      if (response.data && response.data.response) {
        res.json({ response: response.data.response });
      } else {
        throw new Error('Invalid response from Ollama');
      }
    } catch (error) {
      console.error('Ollama API error:', error.message);
      throw error;
    }
  } catch (error) {
    console.error('Server error:', error.message);
    res.status(500).json({ 
      error: 'Failed to process request',
      message: error.message,
      action: 'Please ensure Ollama is running with "ollama serve" command'
    });
  }
});

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  // console.log('Important steps:');
  // console.log('1. Make sure Ollama is installed: https://ollama.ai/download');
  // console.log('2. Run "ollama serve" in a separate terminal');
  // console.log('3. Run "ollama pull llama2" to download the model');
});