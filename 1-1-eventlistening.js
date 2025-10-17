function greet() {
  alert("Hello!")
  console.log("greets");
};

const button = document.createElement("button")
button.innerText = "Say Hello";

document.body.appendChild(button);

button.addEventListener("click", () => {
  greet();
});
// 주의: addEventListener에 익명함수를 전달하는 것과, greet()를 직접 전달하는 것은 어떤 차이가 있을까?
// 후자를 하였을 때 왜 정상작동하지 않을까?: 