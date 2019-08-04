let distance = 20;
let cost;

function scuberGreetingForFeet(distance){
  if (distance > 2500) {
    return "No can do.";
  } else if (distance > 2000) {
    cost = 30;
    return "I will gladly take your thirty bucks.";
  } else if (distance <= 400) {
      cost = 0;
      return "This one is on me!";
  }
}


let city;

function ternaryCheckCity(city){
  return (city === "NYC" ? "Ok, sounds good." : "No go.");
}

let tip;

function switchOnCharmFromTip(tip){
  switch(tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
      break;
  }
}