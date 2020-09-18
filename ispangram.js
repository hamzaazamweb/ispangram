const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


function refineString(str) {


  let x = str.split(" ").join("");
  x = x.toLowerCase();
  x = Array.from(x);

  return x;

}
function compare(arr1,arr2) {


let count =[];


arr1.forEach((item) => {

if(arr2.includes(item) && !count.includes(item)) {

count.push(item);

}


});

if(count.length >= 26 ) {
return true;
}
return  false;
}


let res = refineString('Two driven jocks help fax my big qui');

let result = compare(res,alphabets);

alert(result);