const clock = document.querySelector("#clock");
const day = document.querySelector("#day");

const paintClcok = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
};

const paintDay = () => {
  const date = new Date();
  const days = date.getDay();
  const year = date.getFullYear();
  const month = date.getMonth();
  const getDate = date.getDate();

  let whatDays = "";
  if (days === 0) {
    console.log("오늘은 일요일입니다.");
    whatDays = "일요일";
  } else if (days === 1) {
    console.log("오늘은 월요일입니다.");
    whatDays = "월요일";
  } else if (days === 2) {
    console.log("오늘은 화요일입니다.");
    whatDays = "화요일";
  } else if (days === 3) {
    console.log("오늘은 수요일입니다.");
    whatDays = "수요일";
  } else if (days === 4) {
    console.log("오늘은 목요일입니다.");
    whatDays = "목요일";
  } else if (days === 5) {
    console.log("오늘은 금요일입니다.");
    whatDays = "금요일";
  } else if (days === 6) {
    console.log("오늘은 토요일입니다.");
    whatDays = "토요일";
  }

  day.innerText = `현재 시각은 ${year}년 ${month}월 ${getDate}일 ${whatDays}입니다. 로또추첨은 매주 토요일 20시 34분에 진행됩니다.`;
};

paintDay();
paintClcok();
setInterval(paintClcok, 1000);
