'use strict'
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
const q = query(sensorimotor, orderBy("timestamp"), limit = (1000));
var arraysOutput = []
function calculateAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}
function getMeanAsynchronyMilliseconds(tapsData) {
    tapsData.forEach(time => {
        time += 200;
        time = time % 400;
        time -= 200;
    })
    return calculateAverage(tapsData)
}
for (var subject in q) {
    let times = subject.tapsData;
    arraysOutput.push(getMeanAsynchronyMilliseconds(times))
}
arraysElement.innerHTML = arraysOutput;

var arraysElement = document.getElementById("arrays");
const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);