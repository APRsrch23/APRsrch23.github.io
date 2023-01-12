'use strict'

var hasSamplePlayed = false;

function playSampleAudio() {
    console.log('playing audio!');
    hasSamplePlayed = true;
    if (sampleAudio.paused) return;
    sampleAudio.play();
    setTimeout(function () {
        sampleAudio.pause();
        sampleAudio.currentTime = 0;
    }, 3400);
    /*if (continueLink.classList.contains('hidden')) {
        continueLink.setAttribute('href', './public/index.html');
        continueLink.classList.remove('hidden');
        continueLink.classList.add('visible');
    }*/
}

var sampleAudio = document.getElementById("sampleClickTrack");
var sampleButton = document.getElementById("sampleButton");
var continueLink = document.getElementById("continueLink");
var audibleCheckbox = document.getElementById("audibleCheck");

sampleButton.addEventListener('click', playSampleAudio())
audibleCheckbox.addEventListener('change', function () {
    if(this.checked && hasSamplePlayed == true) {
        continueLink.setAttribute('href', './public/index.html');
        continueLink.classList.add('visible');
    } else {
        continueLink.setAttribute('href', '');
        if(continueLink.classList.contains('visible')) continueLink.classList.remove('visible');
        if(!continueLink.classList.contains('hidden')) continueLink.classList.add('hidden');
    }
}
)