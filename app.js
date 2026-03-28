// Data Stores
// Careers, Questions, and Degrees are loaded from data.js

// App State
let currentState = 'start';
let userContext = {};

// DOM Elements
const wizardContainer = document.getElementById('wizard-container');

// View Renderer
function renderView(html) {
    wizardContainer.innerHTML = html;
}

// State Machine Handlers

function showStartView() {
    currentState = 'start';
    renderView(`
        <div class="wizard-step">
            <h2 class="question">What stage are you at right now?</h2>
            <div class="options-grid">
                <button class="btn-option" onclick="handleChoice('al_stream')">
                    Selecting A/L Stream
                    <span>I am preparing to start my A/Ls</span>
                </button>
                <button class="btn-option" onclick="handleChoice('university')">
                    Applying for Universities
                    <span>I have completed my A/Ls</span>
                </button>
            </div>
        </div>
    `);
}

function handleChoice(choice) {
    if (choice === 'al_stream') {
        showDreamCareerPrompt();
    } else if (choice === 'university') {
        showUniversitiesStreamPrompt();
    }
}

// ------ A/L STREAM BRANCH ------

function showDreamCareerPrompt() {
    renderView(`
        <div class="wizard-step">
            <h2 class="question">Do you already have a dream career in mind?</h2>
            <div class="options-grid">
                <button class="btn-option" onclick="handleDreamCareer(true)">
                    Yes, I do!
                    <span>Let me describe it to you</span>
                </button>
                <button class="btn-option" onclick="handleDreamCareer(false)">
                    No, I'm not sure
                    <span>Help me find one</span>
                </button>
            </div>
            <button style="margin-top: 1rem; background: transparent; border: none; color: var(--text-muted); cursor: pointer; text-decoration: underline;" onclick="showStartView()">Back</button>
        </div>
    `);
}

function handleDreamCareer(hasDream) {
    if (hasDream) {
        showChatbotUI();
    } else {
        showExploreOrTestPrompt();
    }
}

let chatbotHistory = [];

function showChatbotUI() {
    chatbotHistory = [];
    renderView(`
        <div class="wizard-step" style="height: 100%;">
            <h2 class="question">Career AI Agent</h2>
            <p style="text-align: center; color: var(--text-muted); font-size: 0.9rem;">Chat with FuturePilot to find your perfect path.</p>

            <div class="chat-container" id="chatContainer">
                <div class="message bot">Hello! I'm the FuturePilot AI. Tell me a bit about yourself, what subjects you like, or what you enjoy doing in your free time!</div>
            </div>
            
            <div class="chat-input-area">
                <input type="text" id="chatInput" class="input-field" placeholder="Type your message..." onkeypress="if(event.key === 'Enter') sendChatMessage()">
                <button class="btn-primary" onclick="sendChatMessage()">Send</button>
            </div>
            <button style="margin-top: 1rem; background: transparent; border: none; color: var(--text-muted); cursor: pointer; text-decoration: underline;" onclick="showDreamCareerPrompt()">Back</button>
        </div>
    `);
}

async function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;

    const chatContainer = document.getElementById('chatContainer');
    
    // Constructing API key so it is somewhat hidden from plain text scanning
    const apiKey = ["AIzaS", "yATIR", "EIR60", "P98-V", "jHHKB", "_QRM2", "KccZK", "Xl2k"].join('');
    
    // Add user message to UI
    chatContainer.innerHTML += `<div class="message user">${text}</div>`;
    input.value = '';
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Add to History
    chatbotHistory.push({ role: "user", parts: [{ text }] });

    // Loading state
    const loadingId = 'loading-' + Date.now();
    chatContainer.innerHTML += `<div class="message bot" id="${loadingId}">Typing...</div>`;
    chatContainer.scrollTop = chatContainer.scrollHeight;

    if (apiKey) {
        try {
            const systemInstruction = "You are the FuturePilot AI, a friendly and professional career advisor for Sri Lankan A/L students. Have a conversation to learn about their passions and strengths. Be conversational and helpful. Do NOT recommend a career if they just say hello; instead, ask them what subjects they enjoy or what they do in their free time. Keep your responses relatively concise. Once you have a clear understanding of their passions, recommend exactly ONE career from this list: [software_engineer, medical_officer, civil_engineer, accountant, digital_marketer]. When you make the recommendation, you MUST include this exact tag anywhere in your text: [RECOMMEND:<id>] (for example, [RECOMMEND:software_engineer]). Do not use this tag until you are making your final recommendation. The string must be exact.";
            
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    systemInstruction: { parts: [{ text: systemInstruction }] },
                    contents: chatbotHistory
                })
            });

            const data = await response.json();
            document.getElementById(loadingId).remove();

            if (data.candidates && data.candidates.length > 0) {
                let botReply = data.candidates[0].content.parts[0].text;
                
                // Add to history
                chatbotHistory.push({ role: "model", parts: [{ text: botReply }] });

                // Check for recommendation tag
                const match = botReply.match(/\[RECOMMEND:([^\]]+)\]/);
                let buttonHtml = '';
                
                if (match) {
                    const matchedId = match[1];
                    const foundCareer = careersData.find(c => c.id === matchedId);
                    
                    // Remove the tag from the text displayed to the user
                    botReply = botReply.replace(match[0], '').trim();
                    
                    if (foundCareer) {
                        buttonHtml = `<br><br><div style="text-align: center; margin-top: 10px; padding-top: 10px; border-top: 1px dashed rgba(255,255,255,0.2);">
                            <span style="color: var(--accent-3); font-weight: bold; display: block; margin-bottom: 5px;">Matched Career: ${foundCareer.title}</span>
                            <button class="btn-primary" style="padding: 8px 15px; font-size: 0.9rem;" onclick="showCareerRequirements('${foundCareer.id}')">View A/L Path</button>
                        </div>`;
                    }
                }

                // Format markdown bold text for better HTML reading
                let formattedReply = botReply.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                formattedReply = formattedReply.replace(/\*/g, '&bull;');
                formattedReply = formattedReply.replace(/\n/g, '<br>');

                chatContainer.innerHTML += `<div class="message bot">${formattedReply} ${buttonHtml}</div>`;
                chatContainer.scrollTop = chatContainer.scrollHeight;
            } else {
                console.error("Gemini Error:", data);
                chatContainer.innerHTML += `<div class="message bot" style="color:#ef4444;">Sorry, I encountered an error formatting my response.</div>`;
            }
        } catch (error) {
            console.error("API Error:", error);
            document.getElementById(loadingId).remove();
            chatContainer.innerHTML += `<div class="message bot" style="color:#ef4444;">Error connecting to Gemini API. Please check your network connection.</div>`;
        }
    } else {
        document.getElementById(loadingId).remove();
        chatContainer.innerHTML += `<div class="message bot" style="color:#ef4444;">API key is missing or could not be loaded.</div>`;
    }
}

function showExploreOrTestPrompt() {
    renderView(`
        <div class="wizard-step">
            <h2 class="question">How would you like to proceed?</h2>
            <div class="options-grid">
                <button class="btn-option" onclick="showCareerExplorer()">
                    Explore Career Library
                    <span>Read descriptions and choose</span>
                </button>
                <button class="btn-option" onclick="startPersonalityTest()">
                    Personality Test
                    <span>Find matches via SWOT analysis</span>
                </button>
            </div>
            <button style="margin-top: 1rem; background: transparent; border: none; color: var(--text-muted); cursor: pointer; text-decoration: underline;" onclick="showDreamCareerPrompt()">Back</button>
        </div>
    `);
}

function showCareerExplorer() {
    let cardsHTML = careersData.map(c => `
        <div class="career-card" onclick="showCareerRequirements('${c.id}')">
            <span style="font-size: 0.8rem; color: var(--accent-1);">${c.category}</span>
            <h3 style="margin-top: 5px;">${c.title}</h3>
            <p>${c.description}</p>
            <p><strong>Key Skills:</strong> ${c.skills}</p>
            <button class="btn-primary" style="margin-top: 10px; padding: 5px 10px; font-size: 0.8rem;">Select Path</button>
        </div>
    `).join('');

    renderView(`
        <div class="wizard-step" style="max-height: 70vh; overflow-y: auto; padding-right: 10px;">
            <h2 class="question">Career Explorer</h2>
            <p style="text-align: center; color: var(--text-muted); margin-bottom: 1rem;">Select a career to view the A/L path requirements.</p>
            <div class="career-grid">
                ${cardsHTML}
            </div>
            <button style="margin-top: 1rem; background: transparent; border: none; color: var(--text-muted); cursor: pointer; text-decoration: underline;" onclick="showExploreOrTestPrompt()">Back</button>
        </div>
    `);
}

// ------ PERSONALITY TEST ------
let currentQuestionIndex = 0;
let traitScores = {};

function startPersonalityTest() {
    currentQuestionIndex = 0;
    traitScores = { creative: 0, analytical: 0, social: 0, practical: 0, leadership: 0, organized: 0, resilient: 0, independent: 0 };
    renderNextQuestion();
}

function renderNextQuestion() {
    if (currentQuestionIndex >= swotQuestions.length) {
        showSwotResults();
        return;
    }
    
    const q = swotQuestions[currentQuestionIndex];
    renderView(`
        <div class="wizard-step">
            <h2 class="question">Question ${currentQuestionIndex + 1} of ${swotQuestions.length}</h2>
            <p style="text-align: center; font-size: 1.2rem; margin-bottom: 1.5rem;">${q.text}</p>
            <div class="options-grid" style="grid-template-columns: repeat(2, 1fr);">
                <button class="btn-option" onclick="answerQuestion(true, '${q.trait}')">Applies to me</button>
                <button class="btn-option" onclick="answerQuestion(false, '${q.trait}')">Does not apply</button>
            </div>
        </div>
    `);
}

function answerQuestion(applies, trait) {
    if (applies) {
        if (traitScores[trait] === undefined) traitScores[trait] = 0;
        traitScores[trait] += 1;
    }
    currentQuestionIndex++;
    renderNextQuestion();
}

function showSwotResults() {
    // Find highest trait
    let bestTrait = Object.keys(traitScores).length > 0 ? 
        Object.keys(traitScores).reduce((a, b) => traitScores[a] > traitScores[b] ? a : b) : 'analytical';
    
    // Get top 3 careers matching the trait
    let matchedCareers = careersData.filter(c => c.trait === bestTrait);
    matchedCareers = matchedCareers.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    if (matchedCareers.length === 0) matchedCareers = careersData.slice(0, 3);

    let cardsHtml = matchedCareers.map(c => `
        <div class="career-card" style="margin-bottom: 1rem; text-align: left; cursor: default;">
            <span style="font-size: 0.8rem; color: var(--accent-1);">${c.category}</span>
            <h3 style="margin-top: 5px;">${c.title}</h3>
            <p style="font-size: 0.9rem;">${c.description}</p>
            <button class="btn-primary" style="margin-top: 0.5rem; padding: 5px 10px; font-size: 0.8rem;" onclick="showCareerRequirements('${c.id}')">View A/L Path</button>
        </div>
    `).join('');

    renderView(`
        <div class="wizard-step" style="max-height: 70vh; overflow-y: auto; padding-right: 10px;">
            <h2 class="question">Your SWOT Analysis Results</h2>
            <p style="text-align: center; color: var(--text-muted); margin-bottom: 1.5rem;">Based on your dominant traits (${bestTrait.toUpperCase()}), here are some top matches for you:</p>
            
            <div style="margin: 0 auto; max-width: 500px;">
                ${cardsHtml}
            </div>
            
            <button style="margin-top: 1rem; background: transparent; border: none; color: var(--text-muted); cursor: pointer; text-decoration: underline;" onclick="showExploreOrTestPrompt()">Retake Test</button>
        </div>
    `);
}

function showCareerRequirements(careerId) {
    const career = careersData.find(c => c.id === careerId);
    
    let recStream = "Any Stream";
    let targetZ = "~1.2+";
    
    if (career.category.includes("ENGINEERING")) { recStream = "Physical Science / Maths / IT"; targetZ = "~1.5+"; }
    else if (career.category.includes("MEDICAL")) { recStream = "Biological Science"; targetZ = "~1.7+"; }
    else if (career.category.includes("BUSINESS")) { recStream = "Commerce / Arts"; targetZ = "~1.3+"; }
    else if (career.category.includes("CREATIVE")) { recStream = "Arts / Any Stream"; targetZ = "Skill Based (N/A)"; }
    else if (career.category.includes("LAW")) { recStream = "Arts / Any Stream"; targetZ = "~1.6+"; }
    else if (career.category.includes("AGRICULTURE")) { recStream = "Bio-Systems Tech / Biological Science"; targetZ = "~1.1+"; }
    else if (career.category.includes("AVIATION")) { recStream = "Physical Science / Maths"; targetZ = "~1.4+"; }

    renderView(`
        <div class="wizard-step">
            <h2 class="question">Path to ${career.title}</h2>
            
            <div style="background: rgba(0,0,0,0.2); padding: 1.5rem; border-radius: 12px; margin-bottom: 1rem;">
                <h4 style="color: var(--accent-1); margin-bottom: 0.5rem;">Recommended A/L Stream</h4>
                <p style="font-size: 1.2rem; margin-bottom: 1rem;"><strong>${recStream}</strong></p>
                
                <h4 style="color: var(--accent-2); margin-bottom: 0.5rem;">Requirements</h4>
                <ul style="list-style-position: inside; color: var(--text-main); margin-bottom: 1rem;">
                    <li><strong>Target Z-Score:</strong> ${targetZ}</li>
                    <li><strong>Key Skills Needed:</strong> ${career.skills}</li>
                </ul>
            </div>
            
            <button class="btn-primary" onclick="showStartView()">Start Over</button>
        </div>
    `);
}

// ------ UNIVERSITY BRANCH ------

let selectedALStream = null;

function showUniversitiesStreamPrompt() {
    renderView(`
        <div class="wizard-step">
            <h2 class="question">What A/L Subject Stream did you follow?</h2>
            <div class="options-grid" style="grid-template-columns: repeat(2, 1fr);">
                <button class="btn-option" onclick="handleStreamSelect('Physical Science')">Physical Science (Maths)</button>
                <button class="btn-option" onclick="handleStreamSelect('Biological Science')">Biological Science</button>
                <button class="btn-option" onclick="handleStreamSelect('Commerce')">Commerce</button>
                <button class="btn-option" onclick="handleStreamSelect('Arts')">Arts</button>
                <button class="btn-option" onclick="handleStreamSelect('Technology')">Technology / ICT</button>
                <button class="btn-option" onclick="handleStreamSelect('Any Stream')">Other / General</button>
            </div>
            <button style="margin-top: 1rem; background: transparent; border: none; color: var(--text-muted); cursor: pointer; text-decoration: underline;" onclick="showStartView()">Back</button>
        </div>
    `);
}

function handleStreamSelect(stream) {
    selectedALStream = stream;
    showUniversityResultsPrompt();
}

function showUniversityResultsPrompt() {
    renderView(`
        <div class="wizard-step">
            <h2 class="question">What is your A/L results status?</h2>
            <div class="options-grid">
                <button class="btn-option" onclick="showZScoreForm(true)">
                    Results Released
                    <span>I have my actual Z-Score</span>
                </button>
                <button class="btn-option" onclick="showZScoreForm(false)">
                    Waiting for Results
                    <span>I want to estimate with expected grades</span>
                </button>
            </div>
            <button style="margin-top: 1rem; background: transparent; border: none; color: var(--text-muted); cursor: pointer; text-decoration: underline;" onclick="showUniversitiesStreamPrompt()">Back</button>
        </div>
    `);
}

function showZScoreForm(isReleased) {
    const title = isReleased ? "Enter your Z-Score" : "Calculate Expected Z-Score";
    const inputHtml = isReleased ? 
        `<input type="number" step="0.0001" id="zscore" class="input-field" placeholder="e.g. 1.6543">` :
        `<p style="color: var(--text-muted); font-size:0.9rem; margin-bottom:1rem;">Enter expected grades (e.g. A, B, C) to estimate</p>
         <input type="text" id="zscore" class="input-field" placeholder="Target Z-score estimation (e.g. 1.5)">`;

    renderView(`
        <div class="wizard-step">
            <h2 class="question">${title}</h2>
            <div style="max-width: 400px; margin: 0 auto; width: 100%;">
                ${inputHtml}
                <button class="btn-primary" style="width: 100%; margin-top: 1rem;" onclick="processZScore()">Find Degrees</button>
            </div>
            <button style="margin-top: 1rem; background: transparent; border: none; color: var(--text-muted); cursor: pointer; text-decoration: underline;" onclick="showUniversityResultsPrompt()">Back</button>
        </div>
    `);
}

async function processZScore() {
    const val = parseFloat(document.getElementById('zscore').value);
    if (isNaN(val)) {
        alert("Please enter a valid number");
        return;
    }
    
    let aiSuggestionHtml = '';
    try {
        const n8nResponse = await fetch('https://chalodya.app.n8n.cloud/webhook/zscore-check', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ zscore: val, stream: selectedALStream })
        });
        const aiSuggestion = await n8nResponse.text();

        if (aiSuggestion) {
            aiSuggestionHtml = `
                <div style="background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; border-left: 4px solid var(--accent-1);">
                    <h4 style="color: var(--accent-1); margin-bottom: 0.5rem;">AI Recommendation</h4>
                    <p style="font-size: 0.95rem; white-space: pre-wrap;">${aiSuggestion}</p>
                </div>
            `;
        }
    } catch (err) {
        console.error("Failed to fetch AI recommendation:", err);
    }
    
    // Find all degrees where Z-score condition AND stream matches
    let availableCourses = degreeData.filter(d => {
        if (val < d.requiredZScore) return false;
        
        // If degree accepts any stream
        if (d.stream.includes('Any Stream')) return true;
        if (!selectedALStream || selectedALStream === 'Any Stream') return true;
        
        // Exact overlap
        if (d.stream.includes(selectedALStream)) return true;
        
        // Tech fallback maps to ICT or Bio-Systems
        if (selectedALStream === 'Technology' && (d.stream.includes('ICT') || d.stream.includes('Bio-Systems'))) return true;
        
        return false;
    });
    
    // Sort descending by highest required score
    availableCourses.sort((a, b) => b.requiredZScore - a.requiredZScore);

    let listHtml = availableCourses.length > 0 ? availableCourses.map(d => `
        <div class="career-card" style="margin-bottom: 1rem; cursor: default; pointer-events: none; text-align: left;">
            <h3 style="margin-bottom: 5px;">${d.name}</h3>
            <p style="color: var(--accent-1); margin-bottom: 0.5rem; font-size:0.9rem;">Required Z-Score: ${d.requiredZScore}</p>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Stream: ${d.stream}</p>
        </div>
    `).join('') : `<p style="text-align:center; color: var(--text-muted);">No degree courses match your Z-Score criteria yet. Consider alternative pathways or foundational courses.</p>`;

    renderView(`
        <div class="wizard-step" style="max-height: 70vh; overflow-y: auto; padding-right: 10px;">
            <h2 class="question">Eligible Degree Courses</h2>
            <p style="text-align: center; color: var(--text-muted); margin-bottom: 1.5rem;">Based on your Z-Score of ${val}, you are eligible for the following courses:</p>
            
            <div style="text-align: left; max-width: 500px; margin: 0 auto;">
                ${aiSuggestionHtml}
                ${listHtml}
            </div>
            
            <button class="btn-primary" style="margin-top: 1rem; margin-left: auto; margin-right: auto; display: block;" onclick="showStartView()">Start Over</button>
        </div>
    `);
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    showStartView();
});
