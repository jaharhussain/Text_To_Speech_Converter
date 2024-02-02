




let voiceSelect = document.querySelector("select");
let speech = new SpeechSynthesisUtterance();
let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();

    // Set the default voice
    speech.voice = voices[0];

    // Populate the dropdown with available voices
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// Function to speak the provided text
function speakText() {
    let textToSpeak = document.getElementById("textToSpeak").value;
    speech.text = textToSpeak;
    window.speechSynthesis.speak(speech);
}




document.querySelector("button").addEventListener("click",()=>{
    speech.text =document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})