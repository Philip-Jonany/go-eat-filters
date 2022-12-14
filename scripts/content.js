const body = document.querySelector("body");

// `document.querySelector` may return null if the selector doesn't match anything.
if (body) {
  const text = body.textContent;
  const heading = article.querySelector("h1");
  (heading).insertAdjacentElement("afterend", heading);
  
  console.log("FILTER COMPLETED")
  console.log(heading)

}

