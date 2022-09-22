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
  card.classList.add("col-md-4");
  card.classList.add("col-sm-6");
  card.innerHTML = `
    <div class="card">
      <div class="image-container">
          <img src="${member["image"]}" alt="image" class="image" />
      </div>
      <div class="card-content">
          <div class="name"><h3 class="name-text">${member["name"]}</h3></div>
          <div class="bio"><p class="text-muted">${member["bio"]}</p></div>
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
const min = cards[0].getBoundingClientRect().y;

const appearFunction = (event = null) => {
  const scrollTop = document.scrollingElement.scrollTop;
  const innerHeight = window.innerHeight;
  const max = scrollTop + innerHeight;
  const cards = Array.from(document.querySelectorAll("#team_content .card"));
  const comparator = (a, b) =>
    a.getBoundingClientRect().y > b.getBoundingClientRect().y ? 1 : -1;
  cards.sort(comparator);
  let time_gap = 100;
  let prev = cards[0];
  let cards_collection = [];
  let current_cards = [];
  for (let card of cards) {
    if (card.getBoundingClientRect().y != prev.getBoundingClientRect().y) {
      cards_collection.push(current_cards);
      current_cards = [];
    }
    current_cards.push(card);
    prev = card;
  }
  if (current_cards.length) cards_collection.push(current_cards);
  let final_cards = [];
  for (let i = 0; i < cards_collection.length; i++) {
    if (i % 2) final_cards = final_cards.concat(cards_collection[i]);
    else final_cards = final_cards.concat(cards_collection[i].reverse());
  }
  for (let card of final_cards) {
    const boundingRect = card.getBoundingClientRect();
    if (boundingRect.y + boundingRect.height <= max)
      window.setTimeout((event) => {
        card.style.opacity = 1.0;
      }, time_gap);
    time_gap += 200;
  }
};

appearFunction();
document.addEventListener("scroll", appearFunction);
