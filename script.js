const suppen = [
  "Gemüseboillon",
  "Nudelsuppe",
  "Gebundene Gemüsesuppe",
  "Gemüseeintopf",
  "Rest Day"
];

function pickItem() {
  let randomIndex = Math.floor(Math.random() * suppen.length);
  document.getElementById("result_suppen").innerText = suppen[randomIndex];
}

// Loop Beispiel (wichtig für dein Lernen!)
for (let i = 0; i < suppen.length; i++) {
  console.log("Option:", suppen[i]);
}
