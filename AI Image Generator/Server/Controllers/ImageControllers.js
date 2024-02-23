const OpenAI = require('openai');
const Image = require('../Models/Image');
const config = require('../Config');

const openai = new OpenAI({
  apiKey: "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"
});

exports.generateImage = async (req, res) => {
  const { description } = req.body;
  
  try {
    const prompt = `Generate an image based on the description: "${description}"`;
    const gptResponse = await openai.images.generate({
      model: "dall-e-3",
      prompt,
      quality: "hd",
    });
    
    const imageUrl = gptResponse.data[0].url;
    
    const newImage = new Image({
      description,
      imageUrl
    });
    
    await newImage.save();
    
    res.status(201).json(newImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
