import { useState } from 'react';
import Form  from './componentes/Form/Form';
import Time from './componentes/Time/Time';
import Rodape from './componentes/Rodape/Rodape';
import Banner from './componentes/Banners/Banner';

import { faker } from '@faker-js/faker'

import React from 'react'

export default function App() {
  
  const [times, setTimes] = useState([
    {
    id: faker.string.uuid(),
    nome: "Vox Machina",
    cor: "#1DB7C2"
  },
  {
    id: faker.string.uuid(),
    nome: "The Mighty Nein",
    cor: "#FFDD00"
  },
  {
    id: faker.string.uuid(),
    nome: "Bells Hells",
    cor: "#3FC351"
  },
 ])

  const inicial = [//Time 1
  {
    id: faker.string.uuid(),
    favorito: false,
		status: true,
    nome: "Pike Trickfoot",
    cargo: "Gnome - Cleric (War Domain)",
    imagem: "imagens/vox_machina/Pike.png",
    time: times[0].nome
  },
  {
    id: faker.string.uuid(),
    favorito: false,
		status: true,
    nome: "Grog Strongjaw",
    cargo: "Goliath - Barbarian (Path of the Berserker) / Fighter (Battle Master)",
    imagem: "imagens/vox_machina/Grog.png",
    time: times[0].nome
  },
  {
    id: faker.string.uuid(),
    favorito: false,
		status: true,
    nome: "Vax'ildan 'Vax' Vessar",
    cargo: "Half-Elf - Rogue (Assassin) / Paladin (Raven Queen/Oath of Vengeance) / Druid",
    imagem: "imagens/vox_machina/Vaxildan.png",
    time: times[0].nome
  },
  {
    id: faker.string.uuid(),
    favorito: false,
		status:true,
    nome: "Vex'ahlia 'Vex' Vessar",
    cargo: "Half-Elf - Ranger (Beast Master) / Rogue (Assassin)",
    imagem: "imagens/vox_machina/Vexahlia.png",
    time: times[0].nome
  },
  {
    id: faker.string.uuid(),
    favorito: false,
		status: true,
    nome: "Percival 'Percy' Fredrickstein Von Musel Klossowski de Rolo III",
    cargo: "Human - Fighter (Gunslinger)",
    imagem: "imagens/vox_machina/Percy.png",
    time: times[0].nome
  },
  {
    id: faker.string.uuid(),
    favorito: false,
		status: true,
    nome: "Keyleth of the Air Ashari",
    cargo: "Half-Elf - Druid (Circle of the Moon)",
    imagem: "imagens/vox_machina/Keyleth.png",
    time: times[0].nome
  },
  {
    id: faker.string.uuid(),
    favorito: false,
		status: true,
    nome: "Scanlan Shorthalt",
    cargo: "Gnome - Bard (College of Lore)",
    imagem: "imagens/vox_machina/Scanlan.png",
    time: times[0].nome
  },
	{
	    id: faker.string.uuid(),
	    favorito: false,
			status: false,
	    nome: "Tiberius Stormwind",
	    cargo: "Dragonborn - Sorcerer (Draconic Bloodline)",
	    imagem: "imagens/vox_machina/Tiberius.png",
	    time: times[0].nome
	},
	{
	    id: faker.string.uuid(),
	    favorito: false,
			status: false,
	    nome: "Taryon Darrington",
	    cargo: "Human - 	Artificer (Alchemist)",
	    imagem: "imagens/vox_machina/Taryon.png",
	    time: times[0].nome
	},

  // Time 2 - Mighty Nein
  {
    id: faker.string.uuid(),
    favorito: false,
		status: true,
    nome: "Jester Lavorre",
    cargo: "Tiefling - 	Cleric (Trickery Domain)",
    imagem: "imagens/mighty_nein/Jester.png",
    time: times[1].nome
  },
  {
    id: faker.string.uuid(),
    favorito: false,
		status: true,
    nome: "Fjord Stone",
    cargo: "Half-Orc - Warlock (Hexblade; Pact of the Blade), Paladin (Oath of the Open Sea)",
    imagem: "imagens/mighty_nein/Fjord.png",
    time: times[1].nome
  },
  {
    id: faker.string.uuid(),
    favorito: false,
		status: true,
    nome: "Beauregard 'Beau' Lionett",
    cargo: "Human (Variant) - Monk (Way of the Cobalt Soul)",
    imagem: "imagens/mighty_nein/Beau.png",
    time: times[1].nome
  },
	{
    id: faker.string.uuid(),
    favorito: false,
		status: true,
    nome: "Mollymauk 'Molly' Tealeaf",
    cargo: "Tiefling (Devil's Tongue) - Blood Hunter (Order of the Ghostslayer)",
    imagem: "imagens/mighty_nein/Mollymauk.png",
    time: times[1].nome
  },
	{
    id: faker.string.uuid(),
    favorito: false,
		status: false,
    nome: "Caduceus Clay",
    cargo: "Firbolg - Cleric (Grave Domain)",
    imagem: "imagens/mighty_nein/Caduceus.png",
    time: times[1].nome
  },
  {
    id: faker.string.uuid(),
    favorito: false,
		status: false,
    nome: "Kingsley Tealeaf",
    cargo: "Tiefling (Devil's Tongue) - Blood Hunter (Order of the Ghostslayer)/Rogue (Swashbuckler)",
    imagem: "imagens/mighty_nein/Kingsley.png",
    time: times[1].nome
  },
	{
    id: faker.string.uuid(),
    favorito: false,
		status: true,
    nome: "Yasha Nydoorin",
    cargo: "Aasimar (Fallen / Protector) - Barbarian (Path of the Zealot)",
    imagem: "imagens/mighty_nein/Yasha.png",
    time: times[1].nome
  },
	{
    id: faker.string.uuid(),
    favorito: false,
    status: true,
    nome: "Nott the Brave",
    cargo: "Goblin - Rogue (Arcane Trickster) / Wizard",
    imagem: "imagens/mighty_nein/Nott.png",
    time: times[1].nome
	},
  {
    id: faker.string.uuid(),
    favorito: false,
    status: true,
    nome: "Veth Brenatto",
    cargo: "Halfling (Lightfoot) - Rogue (Arcane Trickster) / Wizard",
    imagem: "imagens/mighty_nein/Veth.png",
    time: times[1].nome
	},
	{
    id: faker.string.uuid(),
    favorito: false,
    status: true,
    nome: "Caleb Widogast",
    cargo: "Human (Variant) - Wizard (School of Transmutation)",
    imagem: "imagens/mighty_nein/Caleb.png",
    time: times[1].nome
	},

  //Time 3 - Bells Hells
  {
    id: faker.string.uuid(),
    favorito: false,
		status: true,
    nome: "Laudna",
    cargo: "Human (Hollow One) - Sorcerer (Shadow Magic) / Warlock (The Undead)",
    imagem: "imagens/bells_hells/Laudna.png",
    time: times[2].nome
  },
  {
    id: faker.string.uuid(),
    favorito: false,
		status: true,
    nome: "Fearne Calloway",
    cargo: "Faun - Druid (Circle of Wildfire) / Rogue",
    imagem: "imagens/bells_hells/Fearne.png",
    time: times[2].nome
  },
  {
    id: faker.string.uuid(),
    favorito: false,
		status: true,
    nome: "Imogen Temult",
    cargo: "Human - Sorcerer (Aberrant Mind)",
    imagem: "imagens/bells_hells/Imogen.png",
    time: times[2].nome
  },
	{
    id: faker.string.uuid(),
    favorito: false,
		status: false,
    nome: "Sir Bertrand Bell",
    cargo: "Human - Fighter",
    imagem: "imagens/bells_hells/Bertrand.png",
    time: times[2].nome
  },
	{
    id: faker.string.uuid(),
    favorito: false,
		status: true,
    nome: "Chetney Pock O'Pea",
    cargo: "Gnome - Blood Hunter (Order of the Lycan) / Rogue",
    imagem: "imagens/bells_hells/Chetney.png",
    time: times[2].nome
  },
	{
    id: faker.string.uuid(),
    favorito: false,
		status: true,
    nome: "Orym of the Air Ashari",
    cargo: "Halfling - Fighter (Battle Master)",
    imagem: "imagens/bells_hells/Orym.png",
    time: times[2].nome
  },
	{
    id: faker.string.uuid(),
    favorito: false,
		status: true,
    nome: "Ashton Greymoore",
    cargo: "Earth Genasi - Barbarian (Path of Fundamental Chaos)",
    imagem: "imagens/bells_hells/Ashton.png",
    time: times[2].nome
  },
	{
    id: faker.string.uuid(),
    favorito: false,
		status: true,
    nome: "Fresh Cut Grass (FCG)",
    cargo: "Aeormaton - Cleric (Empathy Domain)",
    imagem: "imagens/bells_hells/FCG.png",
    time: times[2].nome
  },
]


  function cadastrarTime(novoTime) {
    setTimes([ ...times, { ...novoTime, id: faker.string.uuid() }])
  }

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCor(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito
      }
      return colaborador
    }))
  }

  return (
    <div>
      <Banner />
      <Form 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])}
      />

      <section className="times">
        <h1>Party Members</h1>
        {times.map((time, indice) => 
          <Time 
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCor}
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

