import React, {useState} from 'react';
import './App.css'
import Timeline from './components/Timeline/Timeline'
import CountdownTimer from './components/CountDownTimer/CountDownTimer'


function App() {
  const [showFicha, setShowFicha] = useState(false); 

  const handleVerMasClick = () => {
    setShowFicha(true);
}

// Componente FichaComponent con overlay
const FichaComponent = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <button onClick={() => setShowFicha(false)} className="absolute top-0 right-0 m-4 text-white text-3xl">&times;</button>
      <div className="bg-white md:w-3/4 md:h-3/4 rounded-md custom-shadow w-3/4 h-3/4 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center p-4 gap-2">
            <h3 className="text-mcn-orange font-bold text-l w-full md:text-lg">TITLE 1</h3>
            <span className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl.</span>
            <h3 className="text-mcn-orange font-bold text-l w-full md:text-lg">TITLE 2</h3>
            <span className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl.</span>
            <h3 className="text-mcn-orange font-bold text-l w-full md:text-lg">TITLE 3</h3>
            <span className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl.</span>


          </div>

      </div>
  </div>
)

  return (
    <div className='flex flex-col justify-center items-center'>
      <CountdownTimer />
    {showFicha ? (

      <FichaComponent />

      ): (
        (
          <div className="relative container mx-auto px-6 w-full flex flex-col space-y-8 h-full">
        <Timeline imgsource="/images/3.jpeg" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl." 
        left={true} 
        handleVerMasClick={handleVerMasClick}
        />
        <Timeline imgsource="/images/1.jpeg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl." 
          left={false} 
          handleVerMasClick={handleVerMasClick}
          />
        <Timeline imgsource="/images/2.jpeg" 
          left={true} 
          handleVerMasClick={handleVerMasClick}
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl.'
        />
      </div>
        )
      )
      }
    </div>
  )
}

export default App
