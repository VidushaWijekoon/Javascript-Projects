let count_number = document.getElementById("count_number");
let number = 0;

const plus = () => {
  number++;
  count_number.textContent = number;
  if (number > 0) {
    count_number.style.color = "green";
  } else if (number == 0) {
    count_number.style.color = "blue";
  }
};

const minus = () => {
  number--;
  count_number.textContent = number;
  if (number < 0) {
    count_number.style.color = "red";
  } else if (number == 0) {
    count_number.style.color = "blue";
  }
};
