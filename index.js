import https from 'https';
import dotenv from 'dotenv';

// .env 파일에서 환경 변수 로드
dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;
const apiEndpoint = '/v1/chat/completions';
const requestData = JSON.stringify({
  model: 'gpt-3.5-turbo',
  messages: [{ role: 'user', content: "Please use your imagination to describe today's horoscope in a fun and unique way. Include insights on career, relationships, and health, using intriguing symbols or metaphors."}],
  max_tokens: 60,
  temperature: 0.8,
  n: 10
});

const options = {
  hostname: 'api.openai.com',
  port: 443,
  path: apiEndpoint,
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    'Content-Length': requestData.length
  }
};

const req = https.request(options, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    const parsedData = JSON.parse(data);
    console.log('Response:', parsedData);
    if (parsedData.choices && parsedData.choices.length > 0) {
      // console.log(parsedData.choices[0].message);
      parsedData.choices.forEach((choice, index) => {
        console.log(`Message ${index + 1}:`, choice.message);
      });
    }
  });
});

req.on('error', (e) => {
  console.error('Error:', e.message);
});

req.write(requestData);
req.end();
