import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-01-14T14:00:00") - +new Date();
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <div>
      {Object.keys(timeLeft).length > 0 && (
        <div className="flex flex-row justify-center items-center text-mcn-darksky md:gap-8 m-4 gap-6 shadow-md p-2 rounded-xl">
          <div className='flex flex-col items-center'>
            <span className='text-3xl font-bold'>{timeLeft.dias}</span>
            <span> Días </span>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-3xl font-bold'>{timeLeft.horas}</span>
            <span> Horas </span>
            </div>
          <div className='flex flex-col items-center'>
            <span className='text-3xl font-bold'>{timeLeft.minutos}</span>
            <span> Minutos </span>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-3xl font-bold'>{timeLeft.segundos}</span>
            <span> Segundos </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default CountdownTimer
