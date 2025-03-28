const inputElement = document.getElementById("markdown-input");
const previewElement = document.getElementById("preview");
const clearBtn = document.getElementById("clear-btn");

//preview
inputElement.addEventListener("input", () => {
  previewElement.innerHTML = marked.parse(inputElement.value);
});

// clear button
clearBtn.addEventListener("click", () => {
  inputElement.value = "";
  previewElement.innerHTML = "";
});
