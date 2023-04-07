function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance < 400){
    return 'This one is on me!';
  } else if ((400 < distance)&&(distance<2000)){
    return 'That will be twenty bucks.';
  }
  else if (2500 < distance){
    return 'No can do.'
  }
  else {
    return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city =="NYC"){
    return 'Ok, sounds good.';
  } else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip == "generous"){
    return 'Thank you so much.';
  }
  else if (tip == "not as generous"){
    return 'Thank you.';
  }
  else {
    return 'Bye.';
  }
}