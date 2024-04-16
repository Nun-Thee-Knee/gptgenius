'use server'

import OpenAI from "openai"

export const generateChatResponse = async(chatMessage) => {
    const openai = new OpenAI({
        apiKey: process.env.apiKey
      });
      
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "user",
            "content":chatMessage
          }
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      const message = response.choices[0]
      console.log(message)
      return message
}