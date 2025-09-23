const days = document.querySelector(".days");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const dateTitle = document.querySelector("#date");

let currentDate = new Date(2025, 6);

renderMonth();
nextButton.addEventListener("click", nextMonth);
prevButton.addEventListener("click", prevMonth);

function renderMonth() {
  dateTitle.textContent = currentDate.toLocaleDateString("nl-NL", {
    month: "long",
    year: "numeric",
  });

  days.innerHTML = "";

  let firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  if (firstDayOfMonth === 0) firstDayOfMonth = 7;

  for (let i = 0; i < firstDayOfMonth - 1; i++) {
    const emptyDay = document.createElement("li");
    emptyDay.classList.add("empty");
    days.appendChild(emptyDay);
  }

  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const numberOfDays = lastDayOfMonth.getDate();

  for (let i = 1; i <= numberOfDays; i++) {
    const day = document.createElement("li");
    day.classList.add("day");
    day.textContent = i;
    days.appendChild(day);
  }
}

function nextMonth() {
  currentDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    1
  );
  renderMonth();
}

function prevMonth() {
  currentDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    1
  );
  renderMonth();
}
