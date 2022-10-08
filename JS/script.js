 let data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
const buttons = document.querySelectorAll(".activity-tracker__option");
const actiavteClickedButton = (button) => {
  buttons.forEach((b) => b.classList.remove("active"));
  button.classList.add("active");
};

const clearActivities = () => {
    const activities = document.querySelectorAll('.activity-tracker__activity')
    //console.log(activities)
    activities.forEach(a => a.remove())
}
const renderCards = (clickedOption) => {
    clearActivities()
    const activityTracker = document.querySelector("section.activity-tracker")
  const calcTimeframe = (option) => {
    if (option === "daily") {
      return "Yesterday";
    } else if (option === "weekly") {
      return "Last Week";
    } else  {
      return "Last Month";
    }
  };
  data.forEach((activity) => {
    const name = activity.title;
    const activityClass = name.toLowerCase().replace(" ", "-");
    const timeframeData = activity.timeframes[clickedOption];
    const previousTimeframe = calcTimeframe(clickedOption);
    // console.log(previousTimeframe);
    const section = document.createElement('section')
    section.classList.add('activity-tracker__activity', activityClass)
    const stringToInject = `
    <div class="top">
        <img src="./images/icon-${activityClass}.svg" alt="" class="image">
    </div>
    <div class="content">
    <header class="heading">
        <p class="activity__name">${name}</p>
        <img src="./images/icon-ellipsis.svg" alt="">
    </header>
    <div class="activity__timeframes">
    <h1 class="activity__current-timeframes">${timeframeData.current}hrs</h1>
    <h5 class="activity__previous-timeframes">${previousTimeframe}-${timeframeData.previous}hrs</h5>
    </div>
    `
    section.innerHTML = stringToInject
    activityTracker.append(section)
    //console.log(section)
  });
};
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    actiavteClickedButton(button);
    const clickedOption = button.dataset.option;
    renderCards(clickedOption);
   // console.log(clickedOption)
  });
});
buttons[0].click()
