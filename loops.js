function forLoop(arr){
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      arr.push('I am 1 strange loop.')
    } else {
      arr.push('I am ${i} strange loops.')
    }
  }
  return arr
}

function whileLoop(n){
while (n > 0) {
  console.log(--n)
}
return "done"
}


function doWhileLoop(array){
<<<<<<< HEAD
  function maybeTrue() {
  return Math.random() >= 0.5
}
 
do {
  array.pop();
} while (array.length > -1 && maybeTrue())
return array;}
=======
  --array
  do{
  } while (array.length > 0 && maybeTrue());
}
>>>>>>> ab90fe3aa3938b940f498ad161f120695d9b85a6
