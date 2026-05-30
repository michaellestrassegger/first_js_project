const suppen = [
  "Gemüseboillon",
  "Nudelsuppe",
  "Gebundene Gemüsesuppe",
  "Gemüseeintopf"
];

function pickItem() {
  let randomIndex = Math.floor(Math.random() * suppen.length);
  document.getElementById("result_suppen").innerText = suppen[randomIndex];
}

// Loop Beispiel (wichtig für dein Lernen!)
for (let i = 0; i < suppen.length; i++) {
  console.log("Option:", suppen[i]);
}

const salate = [
  "Salat mit Essig-Öl-Dressing",
  "Salat mit Joghurt-Senf-Dressing",
  "Karottensalat",
  "Krautsalat",
  "Zaziki",
  "Bohnensalat",
  "Nudelsalat",
  "Obstsalat",
  "Mein Alles-Was-Zuhause-Ist-Mix-Salat"
];

function pickItem() {
  let randomIndex = Math.floor(Math.random() * salate.length);
  document.getElementById("result_salate").innerText = salate[randomIndex];
}

// Loop Beispiel (wichtig für dein Lernen!)
for (let i = 0; i < salate.length; i++) {
  console.log("Option:", salate[i]);
}

const frühstück = [
  "Porrige mit Früchten",
  "Belegtes Brötchen",
  "Joghurt mit Beeren oder Äpfeln"
];

function pickItem() {
  let randomIndex = Math.floor(Math.random() * frühstück.length);
  document.getElementById("result_frühstück").innerText = frühstück[randomIndex];
}

// Loop Beispiel (wichtig für dein Lernen!)
for (let i = 0; i < frühstück.length; i++) {
  console.log("Option:", frühstück[i]);
}

const desserts = [
  "Schokomousse aus Seidentofu mit Himmbeerspiegel",
  "frische Früchte"
];

function pickItem() {
  let randomIndex = Math.floor(Math.random() * desserts.length);
  document.getElementById("result_desserts").innerText = desserts[randomIndex];
}

// Loop Beispiel (wichtig für dein Lernen!)
for (let i = 0; i < desserts.length; i++) {
  console.log("Option:", desserts[i]);
}
