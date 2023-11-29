import React, {useState} from 'react';
import './App.css'
import Timeline from './components/Timeline/Timeline'
import CountdownTimer from './components/CountDownTimer/CountDownTimer'
import timeEvents from '../timeEvents';
import Proptype from 'prop-types'


function App() {
  const [showFicha, setShowFicha] = useState(false); 
  const [ficha, setFicha] = useState(null); // Asumiendo que tengas esta información en tu estado
  const [link, setLink] = useState(null);
  const [links, setLinks] = useState([]);

  const handleVerMasClick = (ficha, link, links) => {
    // Aquí deberías actualizar el estado con la información relevante
    setFicha(ficha);
    setLink(link);
    setLinks(links);
    setShowFicha(true);
  }

  const renderTextWithLineBreaks = (text) => {
    return text.split('<br>').map((line, index) => (
        <span key={index}>
            {line}
            <br />
        </span>
    ));
};

  
// Componente FichaComponent con overlay
const FichaComponent = ({ficha, links}) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <button onClick={() => setShowFicha(false)} className="absolute top-0 right-0 m-4 text-black text-3xl">&times;</button>
      <div className="bg-white rounded-md custom-shadow w-full h-full flex flex-col justify-center items-center">
          {
            ficha && (
              <div className="flex flex-col justify-center items-center p-4 gap-2 md:p-8">
              <span className="text-black md:text-xl mt-2 w-full text-center font-bold">{ficha.name}</span>
              <h3 className="text-mcn-orange font-bold text-xs w-full md:text-lg">Descripción</h3>
              <span className="text-gray-500 text-xs md:text-lg mt-2 w-full">{renderTextWithLineBreaks(ficha.desc)}</span>
              <h3 className="text-mcn-orange font-bold text-xs w-full md:text-lg">Situación actual</h3>
              <span className="text-gray-500 text-xs md:text-lg mt-2 w-full">{renderTextWithLineBreaks(ficha.sit)}</span>
              <h3 className="text-mcn-orange font-bold text-xs w-full md:text-lg text-left">Efectos del caso</h3>
              <span className="text-gray-500 text-xs md:text-lg mt-2 text-left w-full">{renderTextWithLineBreaks(ficha.efectos)}</span>
              <h3 className="text-mcn-orange font-bold text-xs w-full md:text-lg text-left">Tipo de Proceso</h3>
              <span className="text-gray-500 text-xs md:text-lg mt-2 text-left w-full">{ficha.tipo}</span>
              <h3 className="text-mcn-orange font-bold text-xs w-full md:text-lg text-left">Juez</h3>
              <span className="text-gray-500 text-xs md:text-lg mt-2 text-left w-full">{ficha.juez}</span>
            </div>
            )
          }
          {
            links && (
              <div className="flex flex-col justify-center items-center p-4 gap-2">
                <h3 className="text-mcn-orange font-bold text-xs w-full md:text-lg text-left">Recursos</h3>
                {
                  links.map((link, index) => (
                    <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="text-mcn-blue hover:text-blue-800 text-xs md:text-lg">
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

  return (
    <div className='flex flex-col justify-center items-center'>
      <CountdownTimer />
    {showFicha ? (

      <FichaComponent ficha={ficha} link={link} links={links} />

      ): (
        (
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
        )
      )
      }
    </div>
  )
}

export default App
