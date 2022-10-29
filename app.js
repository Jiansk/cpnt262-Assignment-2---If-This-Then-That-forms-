// should've add animation when the buttons are clicked

const btns = document.getElementsByName("colors");
  
for (const btn of btns) {
  btn.onclick = changeBg;
}

function changeBg() {
  document.body.style.background = this.value;
}