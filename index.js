import questions from "./data.js";

const bodyEl = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("container");
bodyEl.appendChild(container);

const icon = document.createElement("img");
icon.src = "./images/illustration-woman-online-mobile.svg";
icon.classList.add("icon");
container.append(icon);

const contentContainer = document.createElement("div");
contentContainer.classList.add("content-container");
container.append(contentContainer);

const faqtitle = document.createElement("h1");
faqtitle.textContent = "FAQ";
faqtitle.classList.add("faqtitle");
contentContainer.append(faqtitle);

const allIdeaElements = questions.map((q) => {
  const dropdownIcon = document.createElement("img");
  dropdownIcon.classList.add("dropdown-icon");
  dropdownIcon.src = "./images/icon-arrow-down.svg";

  const ideaEl = document.createElement("div");
  ideaEl.classList.add("idea");

  const question = document.createElement("div");
  question.classList.add("question");

  const answer = document.createElement("div");
  answer.classList.add("answer");

  const questionText = document.createElement("p");
  questionText.textContent = q.question;

  question.append(questionText);
  question.append(dropdownIcon);
  ideaEl.append(question, answer);

  return ideaEl;
});

allIdeaElements.forEach((ideaEl, index) => {
  contentContainer.append(ideaEl);

  ideaEl.addEventListener("click", () => {
    for (let i of allIdeaElements) {
      if (i !== ideaEl) {
        i.classList.remove("open");
        i.children[1].textContent = "";
      }
    }
    ideaEl.classList.toggle("open");

    if (ideaEl.classList.contains("open")) {
      ideaEl.children[1].textContent = questions[index].answer;
    } else {
      ideaEl.children[1].textContent = "";
    }
  });
});
