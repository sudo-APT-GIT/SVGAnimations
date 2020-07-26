let count = 0;
const quotes = [
  "<p>“It is during our darkest moments that we must focus to see light.”<br><span>-Aristotle Onassis</span></p>",
  "<p>“Nothing can dim the light which shines from within.”<br><span>-Maya Angelou</span></p>",
];
function switchOn() {
  document.getElementById("hovereffect").style.opacity = 1;
  count++;
  if (count == 2) {
    count = 0;
  }
  document.getElementById("quote").innerHTML = quotes[count];
}

function switchOff() {
  document.getElementById("hovereffect").style.opacity = 0;
  document.getElementById("quote").innerHTML = "";
}
