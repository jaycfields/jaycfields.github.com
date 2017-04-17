var startingSoon = new SpeechSynthesisUtterance('Starting in 2 minutes');
window.speechSynthesis.speak(startingSoon);

function scheduleSpeak(time, text) {
    setTimeout(function () {
        var msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        document.getElementById('main-section').innerHTML = ("<H1>" + text + "</H1>");
    },
               time);
}

var second = 1000;
var minute = 60 * second;

scheduleSpeak(2 * minute, "Starting now");
scheduleSpeak(11.5 * minute, "Ready for HIIT. Be Ready for HIIT");
scheduleSpeak(12 * minute, "Time for HIIT. Go HIIT Now. Go HIIT Now.");
scheduleSpeak(21.5 * minute, "30 Seconds. Just 30 seconds till HIIT is done");
scheduleSpeak(22 * minute, "Stop Stop STOP Stop Stop STOP Stop Stop");
scheduleSpeak(32 * minute, "You're done. DONE. DONE. You're done");
