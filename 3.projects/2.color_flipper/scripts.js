let color = document.getElementById("color");
// let submit_btn = document.getElementById("submit-btn");

let color_array = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9];

const submit_btn = () => {
  let hex_color = "#";

  for (let i = 0; i < 6; i++) {
    hex_color += color_array[get_random_number()];
  }

  color.textContent = hex_color;
  document.body.style.backgroundColor = hex_color;
};

const get_random_number = () => {
  return Math.floor(Math.random() * color_array.length);
};
