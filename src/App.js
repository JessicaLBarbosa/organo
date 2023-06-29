import { useState } from 'react';
import Banner from './componentes/Banners';
import Form  from './componentes/Form';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

import { faker } from '@faker-js/faker'

function App() {

  const [times, setTimes] = useState([{
    id: faker.string.uuid(),
    nome: faker.commerce.department(),
    cor: faker.color.rgb()
  },
  {
    id: faker.string.uuid(),
    nome: faker.commerce.department(),
    cor: faker.color.rgb()
  },
  {
    id: faker.string.uuid(),
    nome: faker.commerce.department(),
    cor: faker.color.rgb()
  },
  {
    id: faker.string.uuid(),
    nome: faker.commerce.department(),
    cor: faker.color.rgb()
  }])

  const inicial = [//Time 1
  {
    id: faker.string.uuid(),
    favorito: false,
    nome: faker.person.fullName(),
    cargo: faker.person.jobTitle(),
    imagem: faker.image.avatar(),
    time: times[0].nome
  },
  {
    id: faker.string.uuid(),
    favorito: false,
    nome: faker.person.fullName(),
    cargo: faker.person.jobTitle(),
    imagem: faker.image.avatar(),
    time: times[0].nome
  },
  {
    id: faker.string.uuid(),
    favorito: false,
    nome: faker.person.fullName(),
    cargo: faker.person.jobTitle(),
    imagem: faker.image.avatar(),
    time: times[0].nome
  },

  //Time 2
  {
    id: faker.string.uuid(),
    favorito: false,
    nome: faker.person.fullName(),
    cargo: faker.person.jobTitle(),
    imagem: faker.image.avatar(),
    time: times[1].nome
  },
  {
    id: faker.string.uuid(),
    favorito: false,
    nome: faker.person.fullName(),
    cargo: faker.person.jobTitle(),
    imagem: faker.image.avatar(),
    time: times[1].nome
  },
  {
    id: faker.string.uuid(),
    favorito: false,
    nome: faker.person.fullName(),
    cargo: faker.person.jobTitle(),
    imagem: faker.image.avatar(),
    time: times[1].nome
  },

  //Time 3
  {
    id: faker.string.uuid(),
    favorito: false,
    nome: faker.person.fullName(),
    cargo: faker.person.jobTitle(),
    imagem: faker.image.avatar(),
    time: times[2].nome
  },
  {
    id: faker.string.uuid(),
    favorito: false,
    nome: faker.person.fullName(),
    cargo: faker.person.jobTitle(),
    imagem: faker.image.avatar(),
    time: times[2].nome
  },
  {
    id: faker.string.uuid(),
    favorito: false,
    nome: faker.person.fullName(),
    cargo: faker.person.jobTitle(),
    imagem: faker.image.avatar(),
    time: times[2].nome
  },

  //Time 4
  {
    id: faker.string.uuid(),
    favorito: false,
    nome: faker.person.fullName(),
    cargo: faker.person.jobTitle(),
    imagem: faker.image.avatar(),
    time: times[3].nome
  },
  {
    id: faker.string.uuid(),
    favorito: false,
    nome: faker.person.fullName(),
    cargo: faker.person.jobTitle(),
    imagem: faker.image.avatar(),
    time: times[3].nome
  },
  {
    id: faker.string.uuid(),
    favorito: false,
    nome: faker.person.fullName(),
    cargo: faker.person.jobTitle(),
    imagem: faker.image.avatar(),
    time: times[3].nome
  }]


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
        <h1>Minha organização</h1>
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

export default App;
