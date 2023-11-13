let userscore = 0;
let computerscore = 0;
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (userscore !== 5 && computerscore !== 5) {
      computerinput = inputselection();
      userinput = button.textContent;
      let status = document.querySelector(".status");
      status.innerHTML = `You selected ${userinput}+computer selected ${computerinput}`;
      if (
        (userinput == "🐍" && computerinput == "💦") ||
        (userinput == "🔫" && computerinput == "💦") ||
        (userinput == "🔫" && computerinput == "🐍")
      ) {
        userscore++;
      } else if (userinput == computerinput) {
        status.innerHTML = `You selected ${userinput}+computer selected ${computerinput}`;
      } else {
        computerscore++;
      }
      let uscore = document.querySelector(".UserScore");
      let cscore = document.querySelector(".ComputerScore");
      uscore.innerHTML = userscore;
      cscore.innerHTML = computerscore;
    } else {
      let res = document.querySelector(".result");
       res.innerHTML =  "THE WINNER IS--->" + result();
       alert("refersh the page to play again")
    }
  });
});
function inputselection() {
  let arr = ["🐍", "💦", "🔫"];
  let randomguess = Math.floor(Math.random() * 3);
  return arr[randomguess];
}
function result() {
  let winner;
  if (computerscore > userscore) {
    winner = "USER";
  } else if (computerscore == userscore) {
    winner = "TIE";
  } else {
    winner = "COMPUTER";
  }
  return winner;
}