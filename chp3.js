// Q1

function min(a,b){
    if(a<b){return a};
    else if(b<a){return b};
    else {console.log("Equal")};
};
/*
function min(a, b) {
  if (a < b) return a;
  else return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
*/


//Q2

function isEven(n){
    if(n==0){ 
        return true;
   }
   else if(n==1){
    return false;
   }
     else if(n<0){return isEven(-n)}
   else {
    return isEven(n-2);
   }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

/* 
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
//  */



// Q3

function countBs(word){
    let count=0;
    for(let i==0; i< String.length; i++){
        if("string"[i]=="B"){
            count++;
        }
        console.log(count);
    }
}
function countChar(word2){
    let count2=0;
    or(let i==0; i< String.length; i++){
        if("string"[i]!=""){
            count2++;
        }
        console.log(count2);
}

/*
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
*/






