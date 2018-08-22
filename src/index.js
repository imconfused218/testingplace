import testThis from "./about";

document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;
const me = "somethn";

function testMe(num1, num2) {
  console.log(testThis("matt"));
  1 === 2;
  return num1 + num2;
}

testMe(1, 2);
