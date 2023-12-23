const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let myVariable;
myVariable = "Bob";
myVariable = "Steve";

/*
 * コメント
 */
// コメント

let iceCream = "チョコレート";
if (iceCream === "チョコレート") {
  alert("やった！チョコレートアイス大好き！");
} else {
  alert("あれれ、でもチョコレートが好きなのに.....");
}

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
console.log(multiply(4, 7));
console.log(multiply(20, 20));
console.log(multiply(0.5, 3));

/* document.querySelector("html").addEventListener("click", function() {
  alert("痛っ！つつくのはやめて！");
}); */
document.querySelector("html").addEventListener("click", () => {
  alert("痛っ！つつくのはやめて！");
});
