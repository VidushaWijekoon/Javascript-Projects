const fetchJsonData = () => {
  fetch("./assign.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error !Staus: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(`unable to fetch data: `, error));
};

fetchJsonData();
