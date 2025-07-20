let guess_input = document.getElementById("guess_input");
let check_btn = document.getElementById("check_btn");
let message = document.getElementById("message");
let attempts = document.getElementById("attempts");
let attempts_used = document.getElementById("attempts_used");
let reset_btn = document.getElementById("reset_btn");
let Random_number = Math.round(Math.random() * 100) + 1;
let remaining_attempts = 10;
let used_attempts = 0 ;


// Craet Random Number

check_btn.addEventListener("click", function () {
  let Guessing_number = guess_input.value;
  if (Guessing_number < 1 || Guessing_number > 100) {
  message.textContent = "Please enter a number between 1 and 100";
  message.style.color = "#e63946";
  return;
}
  if (
    Guessing_number == Random_number - 1 ||
    Guessing_number == Random_number + 1
  ) {
    message.textContent = "You Are Very Close !";
    message.style.color = "#2a9d8f";
  } else if (Guessing_number > Random_number) {
    message.textContent = "Try a Smaller Number";
    message.style.color = "#f4a261";
  } else if (Guessing_number < Random_number) {
    message.textContent = "Try a Bigger Number";
    message.style.color = "#f4a261";
  } else if (Guessing_number == Random_number) {
    message.textContent = "Bravoooo !";
    message.style.color = "#2e7d32";
    message.classList.add("win");
    document.body.classList.add("win-effect");
    check_btn.disabled = true;
  }
  remaining_attempts--;
attempts.textContent = `Attempts left : ${remaining_attempts}`;
  used_attempts++;
attempts_used.textContent = `Attempts used : ${used_attempts}`;
if (remaining_attempts <= 0) {
  message.textContent = `No attempts left ! The number was '${Random_number}'`;
  message.style.color = "#a40000ff";
  check_btn.disabled = true;
  reset_btn.classList.remove("hidden");
  return;
}
  message.classList.remove("fade");
  void message.offsetWidth;
  message.classList.add("fade");
  reset_btn.classList.remove("hidden");
});

// Reset
reset_btn.addEventListener("click", function () {
  remaining_attempts = 10;
  attempts.textContent = `Attempts left : ${remaining_attempts}`;
  used_attempts = 0;
  attempts.textContent = `Attempts left : ${used_attempts}`;
  Random_number = Math.floor(Math.random() * 100) + 1;
  console.log("New random number: ", Random_number);
  guess_input.value = "";
  message.textContent = "Ready? Let's begin !";
  message.style.color = "#888";
  message.classList.remove("fade");
  void message.offsetWidth;
  message.classList.add("fade");
  check_btn.disabled = false;
  reset_btn.classList.add("hidden");
   message.classList.remove("win");
    document.body.classList.remove("win-effect");
});
console.log(Random_number);
