const chatgptKeyAI = " hier key rein ";
const OpenAI = require('openai');
const openai = new OpenAI({
    apiKey: chatgptKeyAI
});
const http = require('http');
var port = 1312;
const fs = require('fs'); 
const path = require('path');

const chatHistory = new Map(); 

http.createServer((request, response) => { 
  const homePath = path.join(__dirname, 'Homepage.html');
  const tutorPath = path.join(__dirname, 'KI.html');
  const aboutUsPath = path.join(__dirname, 'AboutUs.html');
  const helpPath = path.join(__dirname, 'Help.html');
  const contactPath = path.join(__dirname, 'Contact.html');
  const touPath = path.join(__dirname, 'Nutzungsbedingung.html');
  const dataProtPath = path.join(__dirname, 'Datenschutz.html');
  const goofy = path.join(__dirname, 'goofy.png');
  const logo = path.join(__dirname, 'Logo.png');
  const meth = path.join(__dirname, 'Meth.png');
  const david = path.join(__dirname, 'David.png');
  const chrisi = path.join(__dirname, 'chrisi.png');
  const ki_cr_emmyljs_adobe = path.join(__dirname, 'ki_cr_emmyljs_adobe.jpg');

  if (request.url === '/goofy.png') {
    fs.readFile(goofy, (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Error loading goofy image');
        return;
      }
      response.writeHead(200, { 'Content-Type': 'image/png' });
      response.end(data);
    });
  } else if (request.url === '/Logo.png') {
    fs.readFile(logo, (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Error loading logo image');
        return;
      }
      response.writeHead(200, { 'Content-Type': 'image/png' });
      response.end(data);
    });
  } else if (request.url === '/ki_cr_emmyljs_adobe.jpg') {
    fs.readFile(ki_cr_emmyljs_adobe, (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Error loading logo image');
        return;
      }
      response.writeHead(200, { 'Content-Type': 'image/png' });
      response.end(data);
    });
  } else if (request.url === '/chrisi.png') {
    fs.readFile(chrisi, (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Error loading logo image');
        return;
      }
      response.writeHead(200, { 'Content-Type': 'image/png' });
      response.end(data);
    });
  } else if (request.url === '/David.png') {
    fs.readFile(david, (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Error loading logo image');
        return;
      }
      response.writeHead(200, { 'Content-Type': 'image/png' });
      response.end(data);
    });
  } else if (request.url === '/Meth.png') {
    fs.readFile(meth, (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Error loading logo image');
        return;
      }
      response.writeHead(200, { 'Content-Type': 'image/png' });
      response.end(data);
    });
  } else if (request.url === '/tutor') {
    fs.readFile(tutorPath, (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Error loading file');
        return;
      }

      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    });
  } else if (request.url === '/contactMessage' && request.method === 'POST') {
    let body = '';
    request.on('data', chunk => {
      body += chunk.toString(); // Convert Buffer to string
    });
    request.on('end', () => {
      const urlEncodedData = new URLSearchParams(body);
      const userMessage = urlEncodedData.get('message');
      const userName = urlEncodedData.get('nameVar'); // Updated to match expected form data key
      const userEmail = urlEncodedData.get('email'); // Get the user's email
      console.log(userEmail)
      // Create an object to store the message details
      const messageData = {
        name: userName,
        email: userEmail,
        message: userMessage,
        timestamp: new Date().toISOString() // Add a timestamp
      };

      // Append the message data to messages.json
      fs.readFile('messages.json', (err, fileData) => {
        if (err) {
          console.error('Error reading messages.json:', err);
          return;
        }
        let messages;
        try {
          messages = JSON.parse(fileData);
        } catch (parseError) {
          console.error('Error parsing messages.json:', parseError);
          messages = []; // Initialize as an empty array if parsing fails
        }
        messages.push(messageData);
        fs.writeFile('messages.json', JSON.stringify(messages, null, 2), (err) => {
          if (err) {
            console.error('Error writing to messages.json:', err);
          }
        });
      });

      fs.readFile(homePath, (err, data) => {
        if (err) {
          response.writeHead(500, { 'Content-Type': 'text/plain' });
          response.end('Error loading file');
          return;
        }
  
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
      });
    });
  } else if (request.url === '/help') {
    fs.readFile(helpPath, (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Error loading file');
        return;
      }

      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    });
  } else if (request.url === '/contact') {
    fs.readFile(contactPath, (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Error loading file');
        return;
      }

      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    });
  } else if (request.url === '/termsOfUse') {
    fs.readFile(touPath, (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Error loading file');
        return;
      }

      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    });
  } else if (request.url === '/dataProt') {
    fs.readFile(dataProtPath, (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Error loading file');
        return;
      }

      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    });
  } else if (request.url === '/aboutUs') {
    fs.readFile(aboutUsPath, (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Error loading file');
        return;
      }
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    });
  } else if (request.url === '/message' && request.method === 'POST') {
    let body = '';
    
    request.on('data', chunk => {
      body += chunk.toString(); // Convert Buffer to string
    });
    request.on('end', async () => {
      const data = JSON.parse(body);
      const userMessage = data.message;
      const sessionId = data.sessionId || 'default'; // Client muss eine sessionId mitschicken

      async function getChatGPTResponse(userMessage, sessionId) {
        try {
          console.log("anfrage von " + sessionId);// Hole bisherigen Chat-Verlauf oder erstelle neuen
            if (!chatHistory.has(sessionId)) {
                chatHistory.set(sessionId, [
                    {
                        role: "system",
                        content: "antworte mal so auf deutsch bitti und red so"
                    }
                ]);
            }
            
            // Füge neue Nachricht hinzu
            const currentHistory = chatHistory.get(sessionId);
            currentHistory.push({
                role: "user",
                content: userMessage
            });

            const completion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: currentHistory,
                temperature: 0.7,
                max_tokens: 500
            });

            // Speichere die Antwort auch im Verlauf
            const assistantResponse = completion.choices[0].message.content;
            currentHistory.push({
                role: "assistant",
                content: assistantResponse
            });

            return assistantResponse;
        } catch (error) {
            console.error('Error calling ChatGPT API:', error);
            return "oopsie hat gar nicht funktionierti manno";
        }
      }
      
      try {
        const responseMessage = await getChatGPTResponse(userMessage, sessionId);
        console.log(responseMessage);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ 
            response: responseMessage,
            sessionId: sessionId 
        }));
      } catch (error) {
        console.error('Error processing response:', error);
        response.writeHead(500, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ error: 'Internal server error' }));
      }
    });
  }  else {
    console.log("home");
    fs.readFile(homePath, (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Error loading file');
        return;
      }

      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    });
  }
}).listen(port); // Listen on all IP addresses