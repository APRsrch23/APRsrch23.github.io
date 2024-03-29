'use strict'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
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
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
import { getFirebaseConfig } from './firebase-config.js';
var q = query('sensorimotor');
console.log(q)
var arraysOutput = []
function calculateAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function (item, index) {
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

/*for (var subject in q) {
    let times = subject.tapsData;
    arraysOutput.push(getMeanAsynchronyMilliseconds(times))
}
arraysElement.innerHTML = arraysOutput;*/

arraysElement.innerHTML = q;

var arraysElement = document.getElementById("arrays");
const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);