window.onload = () => {
  const inputRef = document.querySelector("input");
  const buttonsRef = document.querySelector(".buttons");

  console.log(inputRef);
  console.log(buttonsRef);

  const data = [
    "%",
    "/",
    "*",
    "-",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
  ];

  const markup = data.map((item) => {
    // const tag = document.createElement("li");
    return `<li class='button'>${item}<\li>`;
  });
  console.log(markup.join(" "));
  buttonsRef.insertAdjacentHTML("beforeend", markup.join(" "));
};
