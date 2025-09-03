import { gemini20Flash, googleAI } from '@genkit-ai/googleai';
import { genkit, z } from 'genkit';

/* 
  1. Imports and Initial Setup (already done)
   
  First, we need to import the necessary libraries from Genkit and the Google
  AI plugin. We then initialize Genkit with the googleAI plugin and specify the
  model we want to use, in this case, gemini-2.0-flash. 
*/
const ai = genkit({
  plugins: [googleAI()],
  model: gemini20Flash,
});

// CONTINUE FROM HERE
// 2. Defining Data Structures with Zod