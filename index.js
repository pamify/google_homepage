var searchBtn = document.getElementById("g-search-btn");
var searchInput = document.getElementsByClassName("search-input");

searchBtn.addEventListener("click", () => {
  if (searchInput[0].value) {
    console.log("The search query was", searchInput[0].value);
    alert(
      "The search will be sent...eventually when I find a google search API"
    );
  } else {
    alert("Please enter text into the search field.");
  }
});
