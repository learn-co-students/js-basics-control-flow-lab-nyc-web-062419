function scuberGreetingForFeet(num){
  // Write your code here!
  let res
  if (num < 400) {
    res = 'This one is on me!';
  } else if (1999 < num && num < 2500){
    res = 'I will gladly take your thirty bucks.';
  } else {
    res = 'No can do.';
  }
  return res
}

function ternaryCheckCity(n){
  // Write your code here!
  return (n === 'NYC' ? 'Ok, sounds good.' : 'No go.')
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let res
  switch (tip) {
    case 'generous':
      res = 'Thank you so much.'
      break;
    case 'not as generous':
      res = 'Thank you.'
      break;
    case 'thanks for everything':
      res = 'Bye.'
    default:
      break;
  }
  return res
}