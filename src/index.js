'use strict';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { getFirebaseConfig } from './firebase-config.js';

//------------------THE BUTTON PART-------------
var timesRelative = [];
var timesAbsolute = [];
var clickCount = 0;
var lastTime = 0;
var initialTime = 0;

function timerUpdate() {
  let date = Date.now();
  if (!clickCount) {//First click actions
    initialTime = date;
    playAudio();
    tappingButtonInput.className = "buttonSwag shadow centered buttonActive";
  }
  if(date - initialTime >= 60000) {
    tappingButtonInput.setAttribute('disabled', true);
  }
  clickCount++
  timesRelative.push(date - lastTime); // milliseconds since last tap
  timesAbsolute.push(date - initialTime); //milliseconds since initial tap
  lastTime = date;
  tappingDataArrayElement.innerHTML = timesAbsolute;
  toggleButton();
}


//-----------------------------------------------

function toggleButton() {
  if (nameTextInput.value && timesAbsolute.length && initialTime && Date.now() - initialTime >= 60000) {
    nameSubmissionInput.removeAttribute('disabled');
  } else {
    nameSubmissionInput.setAttribute('disabled', 'true');
  }
}

function collectTappingData() {
  return timesAbsolute
}

function getName() {
  return nameTextInput.value
}

function onNameFormSubmit(e) {
  e.preventDefault();//stops it from clearing the text box i think
  saveTappingData();
  tappingButtonInput.setAttribute('disabled', true);
  nameSubmissionInput.setAttribute('disabled', true);
  displayCompletionMessage();
};

function collectSleepHoursData() {
  return sleepHoursNumber.value;
};

//saves tap data to the database (is it the Cloud Firestore? Is is the Realtime Database? Who knows????)
async function saveTappingData() {

  //basically run this code and if you get an error say so
  try {

    //await means like "don't do anything else until this part is done" (await it).
    //AddDoc is adding the object starting with the yellow curly braces to the 
    await addDoc(collection(getFirestore(), 'sensorimotor'), {
      name: getName(),
      sleepHours: collectSleepHoursData(),
      tapsData: collectTappingData(),
      timestamp: serverTimestamp() //to ensure duplicates don't happen
    });
  }
  catch (error) {
    console.error('Error writing new message to Firebase Database', error);
  };
};

function playAudio() {
  clickTrack.play();
}


function displayCompletionMessage() {
  completionMessage.className = "completionMessageHidden completionMessageRevealed centered";
  completionMessage.innerText = "Thank you for participating!"
}

//shortcut to the elements I need
var nameFormElement = document.getElementById("nameSubmissionForm")
var nameTextInput = document.getElementById("name");
var nameSubmissionInput = document.getElementById("submit")
var tappingDataArrayElement = document.getElementById("tappingArray")
var timerDisplay = document.getElementById("timerDisplay")
var tappingButtonInput = document.getElementById("tappingButton")
var clickTrack = document.getElementById("clickTrack")
var completionMessage = document.getElementById("completionMessageHidden");
var sleepHoursNumber = document.getElementById("sleepValue");

//save tapping data on form submit
nameFormElement.addEventListener('submit', onNameFormSubmit);
nameTextInput.addEventListener('keyup', toggleButton);
nameTextInput.addEventListener('change', toggleButton)
tappingButtonInput.addEventListener('click', timerUpdate);

const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);

/*
  TODO: main mage
  tapping the screen on blue button
  blue button will start
  give sample button
  very specific instructions
  goal to tap screen @ same time as the click for the duration of the click track
  keep abridged version
*/
