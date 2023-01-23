import { query, orderBy, limit } from "firebase/firestore";
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