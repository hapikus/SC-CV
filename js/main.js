let maxItemGlobal = 3;
const darkModeButton = document.querySelector(".dark-mode-button");

// check localStorage
if (localStorage.getItem("darkMode") === "dark") {
  darkModeButton.classList.add("dark-mode-button--active");
  document.body.classList.add("dark");
}

//check system settings
if (
  localStorage.getItem("darkMode") !== "ligth" &&
  window.matchMedia &&
  window.matchMedia("(prefers-colors-scheme: dark)").matches
) {
  localStorage.setItem("darkMode", "dark");
  darkModeButton.classList.add("dark-mode-button--active");
  document.body.classList.add("dark");
}

// dark-mode switch
darkModeButton.onclick = function () {
  darkModeButton.classList.toggle("dark-mode-button--active");
  let isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "ligth");
  }
};

window.addEventListener("resize", changeProjectsContWidth);

function changeProjectsContWidth() {
    const project = document.querySelector(".project");
    const ProjectCardWidth = project.offsetWidth;
  
    const projects = document.querySelector(".projects");
    const projectsColumnGap = parseInt(getComputedStyle(projects).columnGap);
    const containter = document.querySelector(".container");
    const containerWidth = containter.offsetWidth;
  
    maxItems = countMaxItem(containerWidth, ProjectCardWidth, projectsColumnGap);
  
    if (maxItems !== maxItemGlobal) {
      const projectsCont = document.querySelector(".projects-cont");
      projectsCont.style.maxWidth = `${
        maxItems * +ProjectCardWidth + +projectsColumnGap * (maxItems - 1)
      }px`;
      maxItemGlobal = maxItems;
    }
}

function countMaxItem(containerWidth, ProjectCardWidth, projectsColumnGap) {
  let maxItemNum = 1;
  for (let i = 1; i < 4; i++) {
    if (
      +ProjectCardWidth * i + +projectsColumnGap * (i - 1) <=
      +containerWidth - 30
    ) {
      maxItemNum = i;
    }
  }
  return maxItemNum;
}

window.onload = function() {
    changeProjectsContWidth();
}
