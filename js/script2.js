window.onload = () => {
  const cardREef = document.querySelector(".card");
  const distanceRef = document.querySelector("#distance");

  const widthImg = cardREef.clientWidth;
  const heightImg = cardREef.clientHeight;

  //   console.log(cardREef, distanceRef);
  //   console.log(widthImg);
  //   console.log(heightImg);

  //   console.dir(cardREef);

  function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
  }

  function getDistance(event) {
    const x = event.offsetX - target.x;
    const y = event.offsetY - target.y;
    // console.log(x, y);
    return Math.sqrt(x ** 2 + y ** 2);
  }

  function getDistanceInt(distance) {
    if (distance < 10) {
      return "Згорите";
    } else if (distance < 20) {
      return "Дуже гаряче";
    } else if (distance < 40) {
      return "Гаряче";
    } else if (distance < 80) {
      return "Тепло";
    } else if (distance < 160) {
      return "Холодно";
    } else if (distance < 320) {
      return "Сильно холодно";
    } else {
      return "Замерзнете";
    }
  }

  function findTreasure(event) {
    // console.log(event);
    const distance = getDistance(event);
    // console.log(distance);
    const text = getDistanceInt(distance);
    // console.log(text);
    distanceRef.textContent = text;
    if (distance < 8) {
      alert("Поздоровляємо! Ви знайшли клад)");
    }
  }

  const target = {
    x: getRandomNumber(widthImg),
    y: getRandomNumber(heightImg),
  };
  //   console.log(target);

  cardREef.addEventListener("click", findTreasure);
};
