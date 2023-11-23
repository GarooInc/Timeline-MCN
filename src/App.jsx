import './App.css'
import Timeline from './components/Timeline/Timeline'
import CountdownTimer from './components/CountDownTimer/CountDownTimer'

function App() {

  return (
    <div className='flex flex-col justify-center items-center'>
      <CountdownTimer />
    <div className="relative container mx-auto px-6 w-full flex flex-col space-y-8 h-full">
      <Timeline imgsource="https://images.pexels.com/photos/5029919/pexels-photo-5029919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=100&dpr=2" 
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl." left={true} />
      <Timeline imgsource="https://images.pexels.com/photos/5029919/pexels-photo-5029919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=100&dpr=2"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl." left={false} />
      <Timeline imgsource="https://images.pexels.com/photos/5029919/pexels-photo-5029919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=100&dpr=2" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl.' left={true} />
      <Timeline imgsource="https://images.pexels.com/photos/5029919/pexels-photo-5029919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=100&dpr=2" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl.' left={false} />
      <Timeline imgsource="https://images.pexels.com/photos/5029919/pexels-photo-5029919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=100&dpr=2" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl.' left={true} />
      <Timeline imgsource="https://images.pexels.com/photos/5029919/pexels-photo-5029919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=100&dpr=2" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl. Sed euismod, diam sit amet sodales malesuada, nisl libero ultrices odio, vitae ultricies nisl nunc eget nisl.' left={false} />

    </div>
    </div>
  )
}

export default App
