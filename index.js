import { ok } from "assert";

function scuberGreetingForFeet(feet){
  if (feet <= 400){
    return "This one is on me!"
  } else if (feet > 2000 && feet < 2500){
    return "I will gladly take your thirty bucks."
  }else if (feet > 2500){
    return "No can do."
  }

 }	

function ternaryCheckCity(city){
  if (city == "NYC") {
    return "Ok, sounds good."
  } else if (city == "Pittsburgh") {
    return "No go."
  }
}

function switchOnCharmFromTip(charm){
  switch(charm){
    case "generous": 
      return "Thank you so much.";
    break;
    case  "not as generous":
      return "Thank you.";
    break; 
    default:
      return "Bye.";
      break;
  }

  }