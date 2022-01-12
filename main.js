const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];


// Viene fornito un layout di base e un file js in cui è definito un array di oggetti che rappresentano i membro del team. 
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento la card di esempio presente nell’html, stampiamo dinamicamente una card per ogni membro del team.




// team container

for(let i = 0; i < team.length; i++){
  document.querySelector(".team-container").innerHTML += `
  <div class="team-card">
    <div class="card-image">
      <img
        src="img/${team[i].image}"
        alt="${team[i].name}"
      />
    </div>
    <div class"card-text">
      <h3>${team[i].name}</h3>
      <p>${team[i].role}</p>
    </div>
  </div>`;
}



// aggiungi card

const addBt = document.getElementById("addMemberButton");

addBt.addEventListener("click",addCard);



function addCard(){
  const newCard = {
    name: document.getElementById("name").value,
    role: document.getElementById("role").value,
    image: document.getElementById("image").value,
  }
  team.push(newCard);
  getCardCode(newCard);
}

function getCardCode(cardObj){
  document.querySelector(".team-container").innerHTML += `
  <div class="team-card">
    <div class="card-image">
      <img
        src="${cardObj.image}"
        alt="${cardObj.name}"
      />
    </div>
    <div class"card-text">
      <h3>${cardObj.name}</h3>
      <p>${cardObj.role}</p>
    </div>
  </div>`;
}
