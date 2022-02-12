const btn = document.querySelector('button');
const popup = document.querySelector('.notif');
const text = document.querySelector('.text');
const name = document.querySelector('.name');

console.log(btn);

btn.addEventListener('click', () => {
  console.log("Cliked");

  if (text.value == "" || name.value == "") {
    console.log("bad");
    popup.innerHTML = "Please enter your name and the text !"
    popup.classList.add("failed");
  }
  else {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "threecolors.console@gmail.com",
        Password: "BlaBlaBla&1",
        To: 'threecolors.console@gmail.com',
        From: "threecolors.console@gmail.com",
        Subject: name.value,
        Body: text.value,
      })
    popup.innerHTML = "Message corectly sent !";
  }

  console.log(text);

  popup.classList.add("visible");
  setTimeout(() => {
    popup.classList.remove("visible");
    setTimeout(() => {
      popup.classList.remove("failed");
    }, 300)
  }, 2000)
})
