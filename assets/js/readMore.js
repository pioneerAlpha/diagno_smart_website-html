const readMore = (element) => {
  const text = element.textContent;
  const textLength = text.length;
  const maxLength = 200;
  const trimmedText = text.substr(0, maxLength);

  if (textLength > maxLength) {
    element.textContent = `${trimmedText}...`;
  }

  //   add see more btn
  const seeMoreBtn = document.createElement("button");

  //   conditionally add class to see more btn if text is trimmed or not
  if (textLength > maxLength) {
    seeMoreBtn.textContent = "read more";
  }

  seeMoreBtn.classList.add("see_more-btn", "mt-2");
  element.after(seeMoreBtn);

  //   add event listener to see more btn
  seeMoreBtn.addEventListener("click", () => {
    if (seeMoreBtn.textContent === "read more") {
      element.textContent = text;
      seeMoreBtn.textContent = "read less";
    } else {
      element.textContent = `${trimmedText}...`;
      seeMoreBtn.textContent = "read more";
    }
  });
};

const readMoreElements = document.querySelectorAll("#desc");
readMoreElements.forEach((element) => readMore(element));
