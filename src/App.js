import { useState } from 'react';
import Banner from './componentes/Banners';
import Form  from './componentes/Form';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Gerencia',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Sistemas',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Estágio',
      cor: '#E06B69'
    },
  ])

  const inicial = [
    {
      id: uuidv4(),
      nome: 'ALESSANDRO CORREIA',
      cargo: 'Analista Sênior',
      imagem: 'http://github.com/cgrio.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'CARLOS MELO',
      cargo: 'Auxiliar de Programação FullStack',
      imagem: 'http://github.com/carlos-edu-melo.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'JESSICA BARBOSA',
      cargo: 'Auxiliar de Programação FullStack',
      imagem: '	http://github.com/jessicalbarbosa.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'IAGO LIMA',
      cargo: 'Estagiário FullStack',
      imagem: 'http://github.com/iagoB7ima.png',
      time: times[3].nome
    }
  ]

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

  return (
    <div>
      <Banner />
      <Form times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])}/>

      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => 
          <Time 
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
