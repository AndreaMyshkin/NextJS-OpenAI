import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
  console.log("ENTRO");
  const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(config);
  const topic = "Top 10 tips for cat owners";
  const keywords = "first-time cat owners, cat health issues, cat prejudices";

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    temperature: 0,
    max_tokens: 3600,
    prompt: `Write a long and detailed SEO-friendly post about ${topic}, that targets the following comma-separated keywords: ${keywords}. The content should be formatted in SEO-friendly HTML. The response must also include appropiate HTML title and meta description content.
    The return format must be stringified JSON in the following format:
    {
      "postContent": "your post content",
      "title": "your post title",
      "metaDescription": "your post meta description goes here"
    }
    `,
  });
  console.log(response);
  res.status(200).json({ post: JSON.parse(response.data.choices[0].text.split("\n").join("")) });
}
