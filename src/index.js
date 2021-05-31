import cipher from './cipher.js';

console.log(cipher);

document.getElementById("encode").addEventListener("click",function(){
  let originalMessage= document.getElementById("originalMessage").value;
  console.log(originalMessage)
  let offSet= parseInt(document.getElementById("offSet").value);
  console.log(offSet)
     document.getElementById("codedMessage").value= cipher.encode(originalMessage, offSet);
})

document.getElementById("decode").addEventListener("click",function(){
  let secretMessage= document.getElementById("secretMessage").value;
  console.log(secretMessage)
  let offSetTwo= parseInt(document.getElementById("offSetTwo").value);
  console.log(offSetTwo)
     document.getElementById("revealedMessage").value= cipher.decode(secretMessage, offSetTwo);
   })

document.getElementById("pageTwo").style.display = "none";
document.getElementById("toDecode").addEventListener("click",function(){
  let changePage= document.getElementById("pageOne").style.display= "none";
  document.getElementById("pageTwo").style.display= "block";
})
