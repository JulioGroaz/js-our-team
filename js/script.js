//MILESTONE 0:
const Barnet = {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg',
};

const Caroll = {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg',
};

const Gordon = {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg',
};

const Lopez = {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg',
};

const Estrada = {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg',
};

const Ramos = {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg',
};

const arrayTeam = [Barnet, Caroll, Gordon, Lopez, Estrada, Ramos];

console.log(arrayTeam); //per debugging.

//MILESTONE 1:

function teamMembers (member) {
    for(let i =0; i<arrayTeam.length; i++){
        console.log(member[i].nome,member[i].ruolo, member[i].foto);
    }
}
teamMembers(arrayTeam); 

//MILESTONE 2:

function teamMembersDom (member){
    const teamList= document.getElementById('team_list');

    for(let i=0; i<arrayTeam.length; i++){
        const teamMember= document.createElement ('li');
        teamMember.textContent = member[i].nome, member[i].ruolo, member[i].foto;
        teamList.appendChild(teamMember);
    }
}
teamMembersDom(arrayTeam);