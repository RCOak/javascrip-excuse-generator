window.onload = function() {
  let who = ["the dog ", "my granma ", "his turtle ", "my bird "];
  let what = ["eat ", "pissed ", "crushed ", "broke "];
  let when = [
    "before the class",
    "right in time",
    "when i finished",
    "during my lunch",
    "while I was praying"
  ];
  let result =
    who[Math.floor(Math.random() * who.length)] +
    what[Math.floor(Math.random() * what.length)] +
    when[Math.floor(Math.random() * when.length)];
  console.log(result);
  document.getElementById("excuse").innerHTML = result;
};
