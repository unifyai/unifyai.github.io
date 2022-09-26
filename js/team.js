const team = [
  {
    image: "../img/team/Johan.png",
    name: "Johan Jino",
    bio: "ElE undergrad at Imperial College London. Constantly learning to innovate and invent for a better world tomorrow!",
    github: "johanjino",
  },
  {
    image: "../img/team/Felix.png",
    name: "Felix Nshuti",
    bio: "CS undergrad at PDEU. Likes to explore new cool stuff in tech., he is a footballer in his free time.",
    github: "hirwa-nshuti",
  },
  {
    image: "../img/team/Zilin.png",
    name: "Zilin Xiao",
    bio: "CS undergrad previously at MEGVII, SenseTime and Microsoft. While life goes on, coding follows.",
    github: "MrZilinXiao",
  },
  {
    image: "../img/team/simone.png",
    name: "Simone Gordon",
    bio: "PhD at the University of Edinburgh in computational astrophysics. When waiting for simulated stars to explode, she likes climbing, cold-water swimming and listening to audiobooks.",
    github: "simonetgordon",
  },
  {
    image: "../img/team/rashul.png",
    name: "Rashul Chutani",
    bio: "Bachelors and Masters in CS, Indian Institute of Technology Delhi (IIT Delhi). Extremely Passionate about using Technology for making a positive impact on people's lives!",
    github: "RashulChutani",
  },
  {
    image: "../img/team/Jamie.png",
    name: "Jamie Line",
    bio: "Computer Science and Maths student at Lancaster University.  Away from the code, he's often found trying 'inventive' strategies in League of Legends.",
    github: "JamieLine",
  },
  {
    image: "../img/team/Tianye.png",
    name: "Tianye Ding",
    bio: "CS undergrad at Northeastern University in artificial intelligence. Believes in all logical questions can have their corresponding program solutions.",
    github: "JerryGCDing",
  },
  {
    image: "../img/team/Zoe.png",
    name: "Zoe Dominguez",
    bio: "Software Engineering undergrad at ITESM. Loves writing code... and poetry. Either way, she can always be found typing some cryptic words on a computer.",
    github: "ZoeCD",
  },
  {
    image: "../img/team/Oliver.png",
    name: "Oliver Toh",
    bio: "CS+Math undergrad at Northeastern University. Busy bruising shins trying to land unispins.",
    github: "CerberusLatrans",
  },
  {
    image: "../img/team/Mustafa.png",
    name: "Mustafa Hani",
    bio: "Ai undergrad at CU. Learning to learn, madly obsessed with music and gatitos, love helping people.",
    github: "CatB1t",
  },
  {
    image: "../img/team/ved.png",
    name: "Ved Patwardhan",
    bio: "BE Computer Engineering Student at PICT. Força Barça",
    github: "VedPatwardhan",
  },
  {
    image: "../img/team/Zaeem.png",
    name: "Zaeem Ansari",
    bio: "Ex Data Engineer at Blutech Consulting. Trusts on AI, can be a better car driver than most humans nowadays.",
    github: "zaeemansari70",
  },
  {
    image: "../img/team/Mohamad.png",
    name: "Mohamad Danesh",
    bio: "MSc from Oregon State University with a focus on RL. When he's not banging his head against the wall from having to deal with bugs, he enjoys playing tennis.",
    github: "modanesh",
  },
  {
    image: "../img/team/Atakan.png",
    name: "Atakan Coban",
    bio: "CS undergrad that dropped out to pursue a better suited learning path. Treats his approach, health and many other layers of existence as technically as his job.",
    github: "atakanoc",
  },
  {
    image: "../img/team/aarsh.png",
    name: "Aarsh Chaube",
    bio: "Final Year CS undergrad. When not in front of the screen, can be found at the gym in a football jersey.",
    github: "Aarsh2001",
  },
  {
    image: "../img/team/James.png",
    name: "James Keane",
    bio: "AI Undergrad at the University of Edinburgh. All things fitness, outdoors and of course AI!",
    github: "jkeane508",
  },
  {
    image: "../img/team/pawas.png",
    name: "Pawas Rituja",
    bio: "Computer vision intern @motionsCloud GmbH. Finds Mathematics and Images interesting. CS grad from Delhi University. Loves cycling, adventures and photography. ",
    github: "RitujaPawas",
  },
  {
    image: "../img/team/Ahmed\ Omar.png",
    name: "Ahmed Omar",
    bio: "ML Engineer. Loves collaborating with people to build cool stuff and a big movie buff.",
    github: "ahmedo42",
  },
  {
    image: "../img/team/dohyeong.png",
    name: "Dohyeong Kim",
    bio: "Deep Learning researcher who are interested in making the autonomous agent. I really like to go around outside to catch Pokemon on Pokemon Go game.",
    github: "kimbring2",
  },
  {
    image: "../img/team/Julia.png",
    name: "Julia Goh",
    bio: "MEng CS at UCL. Always battling, from bugs in code to Ganon in Zelda.",
    github: "juliagsy",
  },
  {
    image: "../img/team/Guillermo.png",
    name: "Guillermo Brizuela",
    bio: "Master's degree in CS. Enjoys debugging misspelled variables for too long and expects to make a positive impact in the world making rocks learn.",
    github: "guillesanbri",
  },
  {
    image: "../img/team/Ogban.png",
    name: "Ogban Ugot",
    bio: "MSc Grad at UNILAG. Often spends time thinking about the hard problem of consciousness.",
    github: "ogbanugot",
  },
  {
    image: "../img/team/Sree.png",
    name: "Sreegandh Devireddy",
    bio: "CS Undergrad at UoL, Always up for an adventure.",
    github: "sreegandh804",
  },
  {
    image: "../img/team/abdel.png",
    name: "Abdelrahman Diab",
    bio: "CS graduate and ML enthusiast with a passion for making music and gaming. >:D",
    github: "abdrahmandiab",
  },
  {
    image: "../img/logos/ivy_logo_only.png",
    name: "Saeed Ashraf",
    bio: "GUC graduate with a degree in Computer Science and Engineering. A programmer who does not run on coffee but enjoys experiencing life and learning in an attempt to make the world a little better. ",
    github: "saeedashrraf",
  },
];

const team_container = document.querySelector(".team-container");

const name_comparator = (a, b) =>
    a.name > b.name ? 1 : -1;

team.sort(name_comparator);

for (let member of team) {
  const card = document.createElement("div");
  card.classList.add("col-md-4");
  card.classList.add("col-sm-6");
  card.classList.add("card-container");
  card.innerHTML = `
      <div class="card">
        <div class="image-container">
        <a href="https://github.com/${member["github"]}" target="_blank"><img src="${member["image"]}" alt="image" class="image" /></a>
        </div>
        <div class="card-content">
            <div class="name"><h3 class="name-text">${member["name"]}</h3></div>
            <div class="bio"><p class="text-muted">${member["bio"]}</p></div>
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
