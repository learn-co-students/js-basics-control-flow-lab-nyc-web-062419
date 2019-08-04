function scuberGreetingForFeet(arg){
  if (arg <= 400){
    return "This one is on me!"
  } else if (arg > 2000 && arg < 2500){
    return "I will gladly take your thirty bucks."
  }else if (arg > 2500){
    return "No can do."
  }



}

function ternaryCheckCity(arg){
  return arg === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}



function switchOnCharmFromTip(arg){
switch(arg){
case "generous":
  return "Thank you so much."
  break;
  case "not as generous":
    return "Thank you."
    break;
    default:
      return "Bye."
}


}




