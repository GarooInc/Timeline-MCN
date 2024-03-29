import React, {useState} from 'react'
import './App.css'
import Timeline from './components/Timeline/Timeline'
import CountdownTimer from './components/CountDownTimer/CountDownTimer'
import timeEvents from '../timeEvents'
import timeEventsEn from '../timeEventsEn'


function App() {
  const [showFicha, setShowFicha] = useState(false); 
  const [ficha, setFicha] = useState(null); // Asumiendo que tengas esta información en tu estado
  const [links, setLinks] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [language, setLanguage] = useState('es'); // 'es' para Español, 'en' para Inglés

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === 'es' ? 'en' : 'es'))
  }

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
                    <h3 className="text-mcn-orange font-bold text-xs w-full md:text-lg">{language === 'es' ? "Descripción" : "Description"}</h3>
                    <span className="text-gray-500 text-xs md:text-lg mt-1 md:mt-2 w-full">{renderTextWithLineBreaks(ficha.desc)}</span>
                    <h3 className="text-mcn-orange font-bold text-xs w-full md:text-lg">{language === 'es' ? "Situación actual" : "Current situation"}</h3>
                    <span className="text-gray-500 text-xs md:text-lg mt-1 md:mt-2 w-full">{renderTextWithLineBreaks(ficha.sit)}</span>
                    <h3 className="text-mcn-orange font-bold text-xs w-full md:text-lg text-left">{language === 'es' ? "Efectos del caso" : "Case effects"}</h3>
                    <span className="text-gray-500 text-xs md:text-lg mt-1 md:mt-2 text-left w-full">{renderTextWithLineBreaks(ficha.efectos)}</span>
                    <h3 className="text-mcn-orange font-bold text-xs w-full md:text-lg text-left">{language === 'es' ? "Tipo de proceso" : "Process type"}</h3>
                    <span className="text-gray-500 text-xs md:text-lg mt-1 md:mt-2 text-left w-full">{ficha.tipo}</span>
                    <h3 className="text-mcn-orange font-bold text-xs w-full md:text-lg text-left">{language === 'es' ? "Juez" : "Judge"}</h3>
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
                          {
                            language === 'es' ?
                            "Recurso " + (index + 1)
                            :
                            "Resource " + (index + 1)
                          
                          }
                        </a>
                      ))
                    }
                  </div>
                )
              }
              {
                !ficha && links && (
                  <div className="flex flex-col justify-center items-center p-4 gap-2 mt-14 md:p-8  mt-12">
                    <h3 className="text-mcn-orange font-bold text-3xl w-full md:text-4xl text-left border-b-2 border-mcn-orange">{language === 'es' ? "Recursos" : "Resources"}</h3>
                    {
                      links.map((link, index) => (
                        <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="pt-2 text-mcn-blue hover:text-blue-800 text-2xl md:text-3xl">
                          {
                            language === 'es' ?
                            "Recurso " + (index + 1)
                            :
                            "Resource " + (index + 1)
                          
                          }
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
    <div className='flex flex-col justify-center items-center relative'>
      <button
        className="absolute top-10 right-4 p-2 bg-none rounded-full hover:bg-mcn-blue hover:text-white border border-mcn-blue text-mcn-blue font-bold"
        onClick={toggleLanguage}
      >
        {language === 'es' ? 
        <span className='text-black'>EN</span>
        :
        <span className='text-black'>ES</span>
        }
      </button>

      <a href='https://mcn.org.gt/pages/preguntas-frecuentes-de-la-eleccion-a-la-transicion' target='_blank' rel='noreferrer'>
      <h1 className='md:text-6xl text-3xl font-bold text-black mt-8 mb-4 md:mx-0 mx-4 text-center hover:text-mcn-blue'>De la 
        <span className='text-mcn-blue font-extrabold hover:text-black'> elección </span>
        a la 
        <span className='text-mcn-blue font-extrabold hover:text-black'> transición </span>
      </h1>
      </a>
      <CountdownTimer language={language} />
      <span className=' w-full px-10 text-black md:text-xl text-lg m-4 md:mx-0 mx-4 text-center'>Entre la elección y la toma de posesión, que es cuando culmina la transición del poder y asumen las nuevas autoridades electas, han existido muchos eventos. Desde los procedimientos normales que deben tomarse para que las autoridades electas conozcan las instituciones que encabezarán (este es el proceso de transición), hasta investigaciones penales y otros sucesos que ponen en riesgo nuestro sistema republicano y democrático. ¡Aquí te mostramos todo!</span>
      <div className="relative container mx-auto px-6 w-full flex flex-col space-y-8 h-full">
            {(language === 'es' ? timeEvents : timeEventsEn).slice().reverse().map((event, index) => (
              <Timeline
                key={index}
                imgsource={event.icon}
                text={event.observations}
                event={event.event}
                left={event.left}
                handleVerMasClick={() => handleVerMasClick(event.file, event.link, event.links)}
                date={event.date}
                ficha={event.file}  
                link={event.link}    
                links={event.links}  
                language={language}
              />
            ))
            }
      </div>
      {showFicha && <FichaComponent ficha={ficha} links={links} onClose={handleCloseFicha} />}

    </div>
  )
}

export default App
