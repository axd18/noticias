import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  
  // Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [ noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () =>{
      const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=36a05db9f9aa414eb74a59d2b8e57fc8`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      console.log(noticias);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header
        titulo='Buscador de Noticias'
      />
      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
      </div>
    </Fragment>
  );
}

export default App;
