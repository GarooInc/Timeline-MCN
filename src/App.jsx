import React, {useState} from 'react';
import './App.css'
import Timeline from './components/Timeline/Timeline'
import CountdownTimer from './components/CountDownTimer/CountDownTimer'
import timeEvents from '../timeEvents';


function App() {
  const [showFicha, setShowFicha] = useState(false); 
  const [ficha, setFicha] = useState(null); // Asumiendo que tengas esta información en tu estado
  const [links, setLinks] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleVerMasClick = (ficha, link, links) => {
    // Aquí deberías actualizar el estado con la información relevante
    setScrollPosition(window.scrollY)
    setFicha(ficha)
    setLinks(links)
    setShowFicha(true)
  }

  const renderTextWithLineBreaks = (text) => {
    return text.split('<br>').map((line, index) => (
        <span key={index}>
            {line}
            <br />
        </span>
    ))
  }

  const handleCloseFicha = () => {
    setShowFicha(false);
    // Restaurar la posición del scroll
    window.scrollTo(0, scrollPosition)
  }


  
    // Componente FichaComponent con overlay
    const FichaComponent = ({ficha, links, onClose}) => {

      const handleCloseClick = (event) => {
        event.preventDefault();
        onClose(); 
      };
      
      return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <button onClick={ (event) => handleCloseClick(event) } className="absolute top-4 right-2 md:top-10 md:right-10 m-4 text-black text-3xl">&times;</button>
          <div className="bg-white rounded-md custom-shadow w-full h-full flex flex-col justify-start items-center">
              {
                ficha && (
                  <div className="flex flex-col justify-center items-center p-4 gap-2 md:p-8  mt-12">
                  <span className="text-black md:text-xl mt-2 w-full text-center font-bold">{ficha.name}</span>
                  <div className="pt-4 md:pt-8 flex flex-col md:gap-0 gap-1">
                    <h3 className="text-mcn-orange font-bold text-xs w-full md:text-lg">Descripción</h3>
                    <span className="text-gray-500 text-xs md:text-lg mt-1 md:mt-2 w-full">{renderTextWithLineBreaks(ficha.desc)}</span>
                    <h3 className="text-mcn-orange font-bold text-xs w-full md:text-lg">Situación actual</h3>
                    <span className="text-gray-500 text-xs md:text-lg mt-1 md:mt-2 w-full">{renderTextWithLineBreaks(ficha.sit)}</span>
                    <h3 className="text-mcn-orange font-bold text-xs w-full md:text-lg text-left">Efectos del caso</h3>
                    <span className="text-gray-500 text-xs md:text-lg mt-1 md:mt-2 text-left w-full">{renderTextWithLineBreaks(ficha.efectos)}</span>
                    <h3 className="text-mcn-orange font-bold text-xs w-full md:text-lg text-left">Tipo de Proceso</h3>
                    <span className="text-gray-500 text-xs md:text-lg mt-1 md:mt-2 text-left w-full">{ficha.tipo}</span>
                    <h3 className="text-mcn-orange font-bold text-xs w-full md:text-lg text-left">Juez</h3>
                    <span className="text-gray-500 text-xs md:text-lg mt-1 md:mt-2 text-left w-full">{ficha.juez}</span>
                  </div>
                </div>
                )
              }
              {
                ficha && links && (
                  <div className="flex flex-row justify-center items-center md:p-4 gap-8 w-full">                    
                  {
                      links.map((link, index) => (
                        <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="text-mcn-blue hover:text-blue-800 text-md md:text-lg">
                          {"Recurso " + (index + 1) }
                        </a>
                      ))
                    }
                  </div>
                )
              }
              {
                !ficha && links && (
                  <div className="flex flex-col justify-center items-center p-4 gap-2 mt-14 md:p-8  mt-12">
                    <h3 className="text-mcn-orange font-bold text-3xl w-full md:text-4xl text-left border-b-2 border-mcn-orange">Recursos</h3>
                    {
                      links.map((link, index) => (
                        <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="pt-2 text-mcn-blue hover:text-blue-800 text-2xl md:text-3xl">
                          {"Recurso " + (index + 1) }
                        </a>
                      ))
                    }
                  </div>
                )
              }

          </div>
      </div>
      )
    }

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='md:text-6xl text-3xl font-bold text-black mt-8 mb-4 md:mx-0 mx-4 text-center'>De la 
      <span className='text-mcn-blue font-extrabold'> elección </span>
      a la 
      <span className='text-mcn-blue font-extrabold'> transición </span>
      </h1>
      <CountdownTimer />
      <div className="relative container mx-auto px-6 w-full flex flex-col space-y-8 h-full">
            {timeEvents.slice().reverse().map((event, index) => (
              <Timeline
                key={index}
                imgsource={event.icon}
                text={event.observations}
                event={event.event}
                left={event.left}
                handleVerMasClick={() => handleVerMasClick(event.ficha, event.link, event.links)}
                date={event.date}
                ficha={event.ficha}  
                link={event.link}    
                links={event.links}  
              />
            ))
            }
      </div>
      {showFicha && <FichaComponent ficha={ficha} links={links} onClose={handleCloseFicha} />}
    </div>
  )
}

export default App
