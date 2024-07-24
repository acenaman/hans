const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning User");
    }

    else if(hr == 12) {
        speak("Good noon User");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon User");
    }

    else {
        speak("Good Evening User");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating HANS");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello User how are you";
        speech.text = finalText;
    }

    else if(message.includes('fine') || message.includes('good') || message.includes('amazing')) {
        const finalText = "Oh That's good, tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('bad') || message.includes('not good') || message.includes('ill') || message.includes('sad')) {
        const finalText = "Oh thats not good, tell me something to make you happy";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine user tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is HANS";
        speech.text = finalText;
    }

    else if(message.includes('bye')) {
        const finalText = "Ok! Goodbye dear user. nice talking to you";
        speech.text = finalText;
    }

    else if(message.includes('created you') || message.includes('your creators') || message.includes('made you')) {
        const finalText = "Naman Sharma, Himanshu Takhi, Aditya Kaushal, Shubham Jassal of 10th B class created me under the guidance of Mr.Navdeep Singh";
        speech.text = finalText;
    }

    else if(message.includes('you do') || message.includes('concept') || message.includes('your use')) {
        const finalText = "I am a service robot.";
        speech.text = finalText;
    }

    else if(message.includes('shut up')) {
        const finalText = "can't you keep your mouth shut you stupid";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else if(message.includes('rock paper scissors') || message.includes('stone paper scissors')) {
        window.open('https://www.online-stopwatch.com/chance-games/rock-paper-scissors/')
        const finalText = "Opening Rock Paper Scissors";
        speech.text = finalText;
    }

    else if(message.includes('tic tac toe') || message.includes('tic-tac-toe')|| message.includes('kanta zero')) {
        window.open('ttt/index.html')
        const finalText = "Opening Tic Tac Toe";
        speech.text = finalText;
    }

    else if(message.includes('flappy bird')) {
        window.open('https://flappy-bird.co/')
        const finalText = "Opening Flappy Bird";
        speech.text = finalText;
    }

    else if(message.includes('quick draw')) {
        window.open('https://quickdraw.withgoogle.com/')
        const finalText = "Opening Quick Draw";
        speech.text = finalText;
    }

    else if(message.includes('dino game')) {
        window.open('chrome://dino/')
        const finalText = "Opening Dino Game";
        speech.text = finalText;
    }

    else if(message.includes('semantris')) {
        window.open('https://research.google.com/semantris/')
        const finalText = "Opening Semantris";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}