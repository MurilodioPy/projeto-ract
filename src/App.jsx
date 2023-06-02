import "./App.css";
import { tableTd } from "./tableData";
import { tableTh } from "./tableData";
// import { useState, useEffect } from 'react';
import { useState } from 'react';
import { imageData } from './imageData';
import { logoData } from "./imageData";
import logo from './img/ui-ux-logo.svg';

// Componente de cabeçalho
const Header = () => {
  return (
    <header>
      <div id="logoname">
        <img src={logo} alt="logo uiux"/>
        <h1> &lt;PJ-REACT/&gt; </h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/about" className="nav-link">
              Home </a>
          </li>
          <li>
            <a href="https://www.treinaweb.com.br/blog/ux-e-ui-o-que-e-e-quais-as-diferencas"
              className="nav-link"
              target="_blank" rel="noreferrer">
              Leia Sobre </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=5534988148930&text=%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB%F0%9F%92%AC%20Conecte-se%20com%20o%20Programador!%20%F0%9F%92%AC%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB%0A%0A%E2%9C%89%EF%B8%8F%20Voc%C3%AA%20est%C3%A1%20convidado(a)%20a%20entrar%20em%20contato%20com%20um%20talentoso%20programador%20que%20pode%20transformar%20suas%20ideias%20em%20realidade!%20%F0%9F%92%A1%0A%0A%F0%9F%8C%90%20Se%20voc%C3%AA%20precisa%20de%20solu%C3%A7%C3%B5es%20tecnol%C3%B3gicas%20personalizadas,%20desenvolvimento%20de%20software%20ou%20qualquer%20projeto%20relacionado%20%C3%A0%20programa%C3%A7%C3%A3o,%20n%C3%A3o%20perca%20essa%20oportunidade.%0A%0A%F0%9F%92%BB%F0%9F%92%A1%20Entre%20em%20contato%20agora%20mesmo%20e%20descubra%20como%20podemos%20colaborar%20para%20alcan%C3%A7ar%20seus%20objetivos!%0A%0A%F0%9F%93%A7%20%5Bmurilo.dionisio@estudante.iftm.edu.br%5D%0A%0A%E2%8C%A8%EF%B8%8F%F0%9F%92%BB%20N%C3%A3o%20deixe%20suas%20ideias%20esperando,%20d%C3%AA%20vida%20a%20elas%20com%20a%20expertise%20de%20um%20programador%20experiente.%20Estamos%20ansiosos%20para%20ouvir%20sobre%20seu%20projeto!%0A%0A%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB%F0%9F%8C%9F%20Juntos,%20podemos%20criar%20algo%20incr%C3%ADvel!%20%F0%9F%8C%9F%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB" 
              className="nav-link"
              target="_blank" rel="noreferrer">
              Contato </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = imageData.length;

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     handleNextImage();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <div className="gallery">
      <div className="gallery-info">
        <img 
        src={imageData[currentImageIndex].imageUrl} 
        alt={`${imageData[currentImageIndex].imageDesc}`} 
        title={`${imageData[currentImageIndex].imageDesc}`}/>
        <p>{imageData[currentImageIndex].additionalText}</p>
      </div>

      <div className="controls">
        <button onClick={handlePreviousImage} aria-label="Imagem anterior">Anterior</button>
        <button onClick={handleNextImage} aria-label="Próxima imagem">Próximo</button>
      </div>
    </div>
  );
};

// Componente do corpo
const Body = () => {
  return (
    <main>
      <h2>Bem-vindo ao UI/UX!</h2>
      <p>Explorando os conceitos de UI/UX</p>
      <Gallery />
      <Table />
    </main>
  );
};

const Logos = () => {
  return(
    <div className="link-logo">
      {logoData.map((data, index) => (
        <div key={index}>
          <a href={data.linkLogo} target="_blank" rel="noreferrer">
            <img src={data.logoUrl} alt={data.logoNome}/>
          </a>
            {/* adicionando texto por arquivo */}
        </div>
      ))}
      
    </div>
  );
};

// Componente do rodapé
const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 Meu App de UI/UX. Todos os direitos reservados.</p>
      <Logos />
    </footer>
  );
};

// Componente do tabela
const Table = () => {
  return (
    <table className="ui-ux-table">
      <thead>
        <tr>
          {tableTh.map((data, index) => (
            <th key={index}>
              {data.cellText} {/* adicionando texto por arquivo */}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableTd.map((data, index) => (
          <tr key={index}>
            <td> {data.cell1Text} </td>{/* adicionando texto por arquivo */}
            <td> {data.cell2Text} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  return (
    <div id="body-site">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
