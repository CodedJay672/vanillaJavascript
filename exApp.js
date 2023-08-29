async function fetchData() {
  try {
    const response = await fetch("https://favqs.com/api/qotd", {
      mode: "no-cors",
      header: {
        "content-type": "application/json"
    }});
    if (!response.ok) {
      throw new Error("something horrible happened");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
      console.log(error);
  }
}

console.log('started fetching data');
fetchData();
console.log('finished fetching data');
