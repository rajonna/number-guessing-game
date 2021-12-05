var num = Math.floor((Math.random() * 100) + 1);
var c1 = 0
function myFunction(){
  c1 = c1+1
  document.getElementById("count").innerHTML =`Guess count ${c1} `
  var v = document.getElementById("inp").value;
  if( v == num){
    document.getElementById("guess").innerHTML = "CORRECT ANSWER"
    document.getElementById("guessdisplay").innerHTML = `Took you ${c1} guesses`
    document.getElementById("count").style.display="none";
  }
  else{
    if (v>num) {
      document.getElementById("guess").innerHTML = "you guessed: too high"
    }
    else{
      document.getElementById("guess").innerHTML = "you guessed: too low"
    }
  }
}
