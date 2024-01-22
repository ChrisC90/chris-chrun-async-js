const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

async function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject(new Error("Alarm delay must not be negative"));
    } else {
      setTimeout(() => {
        resolve(`Wake up, ${person}!`);
      }, delay);
    }
  });
}

button.addEventListener("click", async () => {
  try {
    const person = name.value;
    const alarmDelay = parseInt(delay.value);

    const result = await alarm(person, alarmDelay);
    output.textContent = result;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
});



// const name = document.querySelector("#name");
// const delay = document.querySelector("#delay");
// const button = document.querySelector("#set-alarm");
// const output = document.querySelector("#output");

// function alarm(person, delay) {
//   return new Promise((resolve, reject) => {
//     if (delay < 0) {
//       throw new Error("Alarm delay must not be negative");
//     }
//     setTimeout(() => {
//       resolve(`Wake up, ${person}!`);
//     }, delay);
//   });
// }

// button.addEventListener("click", async () => {
//   try {
//     const message = await alarm(name.value, delay.value);
//     output.textContent = message;
//   } catch (error) {
//     output.textContent = `Couldn't set alarm: ${error}`;
//   }
// });



// const name = document.querySelector("#name");
// const delay = document.querySelector("#delay");
// const button = document.querySelector("#set-alarm");
// const output = document.querySelector("#output");

// function alarm(person, delay) {
//   return new Promise((resolve, reject) => {
//     if (delay < 0) {
//       throw new Error("Alarm delay must not be negative");
//     }
//     setTimeout(() => {
//       resolve(`Wake up, ${person}!`);
//     }, delay);
//   });
// }

// button.addEventListener("click", () => {
//   alarm(name.value, delay.value)
//     .then((message) => (output.textContent = message))
//     .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
// });




// function alarm(person, delay) {
//     return new Promise((resolve, reject) => {
//       if (delay < 0) {
//         throw new Error("Alarm delay must not be negative");
//       }
//       setTimeout(() => {
//         resolve(`Wake up, ${person}!`);
//       }, delay);
//     });
//   }
  



// const output = document.querySelector("#output");
// const button = document.querySelector("#set-alarm");

// function setAlarm() {
//   setTimeout(() => {
//     output.textContent = "Wake up!";
//   }, 1000);
// }

// button.addEventListener("click", setAlarm);
