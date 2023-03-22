const button = document.querySelector("button");
const SpeechRecognition  = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
 
recognition.onstart = function (){
    console.log("speech recognition started");
}
recognition.onresult = function (event){
    console.log(event);
    const talkedWord = event.result[0] [0].transcript;
    console.log("these are your words", talkedWord);
    computerSpeech(talkedWord);

}
function computerSpeech(words){
const speech = new SpeechSynthesisUtterance();
speech.lang = "en-us";
speech.pitch = 0.9;
speech.volume = 1;
speech.rate = 1;
speech.text = words;
windows.SpeechSynthesis.speak(speech);
}


button.addEventListener("click",()=>{
recognition.onstart();
});

