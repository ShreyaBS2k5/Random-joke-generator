function getJoke() {
  let jokeElement = document.getElementById("joke");
  jokeElement.textContent = "Loading joke... 😂";

  // Fetching joke using a Promise
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // returns another Promise
    })
    .then(data => {
      jokeElement.textContent = `${data.setup} 🤔 ... ${data.punchline}`;
    })
    .catch(error => {
      jokeElement.textContent = "Oops! Couldn't fetch a joke 😭";
      console.error("Error fetching joke:", error);
    });
}
