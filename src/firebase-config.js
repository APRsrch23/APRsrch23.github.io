const config = {
    apiKey: "AIzaSyCKrWGijKukqnbkhxJ8PfOmMetHXKQ3HA0",
    authDomain: "sensorimotor-synchronization.firebaseapp.com",
    databaseURL: "https://sensorimotor-synchronization-default-rtdb.firebaseio.com",
    projectId: "sensorimotor-synchronization",
    storageBucket: "sensorimotor-synchronization.appspot.com",
    messagingSenderId: "866213943222",
    appId: "1:866213943222:web:324d3f6c85527531ded317"
}

export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
    } else {
      return config;
    }
  }