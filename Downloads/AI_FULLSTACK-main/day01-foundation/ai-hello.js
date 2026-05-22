// ai-hello.js
// Day 1: First AI integration (future-ready)

// Load environment variables from .env file
require("dotenv").config();

// Import OpenAI SDK
const OpenAI = require("openai");

// Create OpenAI client using API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // never hardcode keys
});

// Function to ask AI a question
async function askAI(question) {
  try {
    // Show what is being sent
    console.log("\n📤 Sending to AI:", question);

    // Call OpenAI Responses API
    const response = await openai.responses.create({
      model: "gpt-4.1-mini", // cheap + current model
      input: question,       // simple input for beginners
    });

    // Get final AI text safely
    const aiReply = response.output_text;

    // Print AI response
    console.log("\n🤖 AI Response:");
    console.log(aiReply);

  } catch (error) {
    // Print any error clearly
    console.error("\n❌ Error:", error.message);
  }
}

// Test call (must print output)
askAI("Summarize what a full-stack developer does in 3 bullet points.");