const team = [
  {
    image: "../img/logos/ivy_logo_only.png",
    name: "Name Name",
    bio: "CS Undergraduate at UCL, [something personal about you>].",
    github: "namename",
    discord: "xxxx",
  },
  {
    image: "../img/logos/ivy_logo_only.png",
    name: "Name Name",
    bio: "CS Undergraduate at UCL, [something personal about you>].",
    github: "namename",
    discord: "xxxx",
  },
  {
    image: "../img/logos/ivy_logo_only.png",
    name: "Name Name",
    bio: "CS Undergraduate at UCL, [something personal about you>].",
    github: "namename",
    discord: "xxxx",
  },
  {
    image: "../img/logos/ivy_logo_only.png",
    name: "Name Name",
    bio: "CS Undergraduate at UCL, [something personal about you>].",
    github: "namename",
    discord: "xxxx",
  },
  {
    image: "../img/logos/ivy_logo_only.png",
    name: "Name Name",
    bio: "CS Undergraduate at UCL, [something personal about you>].",
    github: "namename",
    discord: "xxxx",
  },
  {
    image: "../img/logos/ivy_logo_only.png",
    name: "Name Name",
    bio: "CS Undergraduate at UCL, [something personal about you>].",
    github: "namename",
    discord: "xxxx",
  },
  {
    image: "../img/logos/ivy_logo_only.png",
    name: "Name Name",
    bio: "CS Undergraduate at UCL, [something personal about you>].",
    github: "namename",
    discord: "xxxx",
  },
  {
    image: "../img/logos/ivy_logo_only.png",
    name: "Name Name",
    bio: "CS Undergraduate at UCL, [something personal about you>].",
    github: "namename",
    discord: "xxxx",
  },
  {
    image: "../img/logos/ivy_logo_only.png",
    name: "Name Name",
    bio: "CS Undergraduate at UCL, [something personal about you>].",
    github: "namename",
    discord: "xxxx",
  },
  {
    image: "../img/logos/ivy_logo_only.png",
    name: "Name Name",
    bio: "CS Undergraduate at UCL, [something personal about you>].",
    github: "namename",
    discord: "xxxx",
  },
];

const team_container = document.querySelector(".team-container");

for (let member of team) {
  const card = document.createElement("div");
  card.classList.add("card-container");
  card.classList.add("col-lg-3");
  card.classList.add("col-md-4");
  card.classList.add("col-sm-6");
  card.innerHTML = `
    <div class="card">
      <div class="image-container">
          <img src="${member["image"]}" alt="image" class="image" />
      </div>
      <div class="card-content">
          <div class="name">${member["name"]}</div>
          <div class="bio">${member["bio"]}</div>
          <div class="icons">
            <div class="github"><a href="https://github.com/${member["github"]}" target="_blank"><img src = "../font-awesome/svgs/github-brands.svg" width="25" height="25" class="profile-icon"/></a></div>
            <div class="discord"><a href="https://discord.com/users/${member["discord"]}" target="_blank"><img src = "../font-awesome/svgs/discord.svg" width="25" height="25" class="profile-icon"/></a></div>
          </div>
      </div>
    </div>
    `;
  team_container.appendChild(card);
}

const cards = document.querySelectorAll("#team_content .card");
let time_gap = 100;
for (let card of cards) {
  setTimeout(() => {
    card.style.opacity = 1.0;
  }, time_gap);
  time_gap += 100;
}
