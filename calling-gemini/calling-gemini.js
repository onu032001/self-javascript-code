// Use for safe purposes
const API_KEY = '';
async function askGemini(prompt, systemInstructions) {
    const payload = {
        contents: [{parts: [{text: prompt}]}],
        systemInstruction: {parts: [{text: systemInstructions}]}
    };
    
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`;
    const options = {
        method: 'POST',
        contentType: 'application/json',
        body: JSON.stringify(payload)
    };

    const response = await fetch(url, options);
    const data = await response.json();
    const content = data['candidates'][0]['content']['parts'][0]['text'];
    return content;
}
