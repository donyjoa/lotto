const lotto = document.querySelector("#lotto");
const btn = document.querySelector("#btn");
const ballOne = document.querySelector("#ball-one");
const ballTwo = document.querySelector("#ball-two");
const ballThree = document.querySelector("#ball-three");
const ballFour = document.querySelector("#ball-four");
const ballFive = document.querySelector("#ball-five");
const ballSix = document.querySelector("#ball-six");

let lottoNumber = [];

const makeNumber = () => {
  let i = 0;
  while (i < 45) {
    i++;
    lottoNumber.push(i);
  }
  // console.log(lottoNumber);
};

const colorCheck = () => {
  // 볼 숫자 불러오기
  const ballOneNum = ballOne.innerText;
  const ballTwoNum = ballTwo.innerText;
  const ballThreeNum = ballThree.innerText;
  const ballFourNum = ballFour.innerText;
  const ballFiveNum = ballFive.innerText;
  const ballSixNum = ballSix.innerText;

  // 숫자에 따라서 볼 색상 결정
  if (ballOneNum <= 10) {
    ballOne.style.backgroundColor = "#FBC400";
  } else if (ballOneNum > 10 && ballOneNum < 21) {
    ballOne.style.backgroundColor = "#69C8F2";
  } else if (ballOneNum > 20 && ballOneNum < 31) {
    ballOne.style.backgroundColor = "#FF7272";
  } else if (ballOneNum > 30 && ballOneNum < 41) {
    ballOne.style.backgroundColor = "#AAAAAA";
  } else if (ballOneNum > 40) {
    ballOne.style.backgroundColor = "#B0D840";
  }

  if (ballTwoNum <= 10) {
    ballTwo.style.backgroundColor = "#FBC400";
  } else if (ballTwoNum > 10 && ballTwoNum < 21) {
    ballTwo.style.backgroundColor = "#69C8F2";
  } else if (ballTwoNum > 20 && ballTwoNum < 31) {
    ballTwo.style.backgroundColor = "#FF7272";
  } else if (ballTwoNum > 30 && ballTwoNum < 41) {
    ballTwo.style.backgroundColor = "#AAAAAA";
  } else if (ballTwoNum > 40) {
    ballTwo.style.backgroundColor = "#B0D840";
  }

  if (ballThreeNum <= 10) {
    ballThree.style.backgroundColor = "#FBC400";
  } else if (ballThreeNum > 10 && ballThreeNum < 21) {
    ballThree.style.backgroundColor = "#69C8F2";
  } else if (ballThreeNum > 20 && ballThreeNum < 31) {
    ballThree.style.backgroundColor = "#FF7272";
  } else if (ballThreeNum > 30 && ballThreeNum < 41) {
    ballThree.style.backgroundColor = "#AAAAAA";
  } else if (ballThreeNum > 40) {
    ballThree.style.backgroundColor = "#B0D840";
  }

  if (ballFourNum <= 10) {
    ballFour.style.backgroundColor = "#FBC400";
  } else if (ballFourNum > 10 && ballFourNum < 21) {
    ballFour.style.backgroundColor = "#69C8F2";
  } else if (ballFourNum > 20 && ballFourNum < 31) {
    ballFour.style.backgroundColor = "#FF7272";
  } else if (ballFourNum > 30 && ballFourNum < 41) {
    ballFour.style.backgroundColor = "#AAAAAA";
  } else if (ballFourNum > 40) {
    ballFour.style.backgroundColor = "#B0D840";
  }

  if (ballFiveNum <= 10) {
    ballFive.style.backgroundColor = "#FBC400";
  } else if (ballFiveNum > 10 && ballFiveNum < 21) {
    ballFive.style.backgroundColor = "#69C8F2";
  } else if (ballFiveNum > 20 && ballFiveNum < 31) {
    ballFive.style.backgroundColor = "#FF7272";
  } else if (ballFiveNum > 30 && ballFiveNum < 41) {
    ballFive.style.backgroundColor = "#AAAAAA";
  } else if (ballFiveNum > 40) {
    ballFive.style.backgroundColor = "#B0D840";
  }

  if (ballSixNum <= 10) {
    ballSix.style.backgroundColor = "#FBC400";
  } else if (ballSixNum > 10 && ballSixNum < 21) {
    ballSix.style.backgroundColor = "#69C8F2";
  } else if (ballSixNum > 20 && ballSixNum < 31) {
    ballSix.style.backgroundColor = "#FF7272";
  } else if (ballSixNum > 30 && ballSixNum < 41) {
    ballSix.style.backgroundColor = "#AAAAAA";
  } else if (ballSixNum > 40) {
    ballSix.style.backgroundColor = "#B0D840";
  }
};

const paintNum = (event) => {
  makeNumber();
  let lottoNum = [];
  while (lottoNum.length < 6) {
    const randomNumber =
      lottoNumber[Math.floor(Math.random() * lottoNumber.length)];
    const num = randomNumber;
    if (lottoNum.indexOf(num) === -1) {
      lottoNum.push(num);
    }
  }
  lottoNum.sort((a, b) => a - b);

  // 볼 숫자 표시
  ballOne.innerText = lottoNum[0];
  ballTwo.innerText = lottoNum[1];
  ballThree.innerText = lottoNum[2];
  ballFour.innerText = lottoNum[3];
  ballFive.innerText = lottoNum[4];
  ballSix.innerText = lottoNum[5];

  // 색 선택 함수
  colorCheck();
};

btn.addEventListener("click", paintNum);
