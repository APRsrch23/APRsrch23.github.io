'use strict'

var hasSamplePlayed = false;

function playSampleAudio() {
    hasSamplePlayed = true;
    if (sampleAudio.paused) return;
    sampleAudio.play();
    setTimeout(function () {
        sampleAudio.pause();
        sampleAudio.currentTime = 0;
    }, 3400);
    if (!continueLink.className) {
        continueLink.setAttribute('href', './public/index.html');
        continueLink.classname = "visible";
    }
}

var sampleAudio = document.getElementById("sampleClickTrack");
var sampleButton = document.getElementById("sampleButton");
var continueLink = document.getElementById("continueLink");
var audibleCheckbox = document.getElementById("audibleCheck");

sampleButton.addEventListener('click', playSampleAudio())
audibleCheckbox.addEventListener('change', function () {
    if(this.checked && hasSamplePlayed) {
        continueLink.setAttribute('href', './public/index.html');
        continueLink.setAttribute('class', 'visible'); 
    } else {
        continueLink.removeAttribute('href');
        continueLink.remove('class');
    }
}
)