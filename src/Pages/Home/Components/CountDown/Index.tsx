import { CountdownContainer, Separator } from './Styles'
import { useContext, useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'
import { CycleContext } from '../../../../Contexts/CyclesContexts'

export const CountDown = () => {
  const {
    activeCycle,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondPassed,
  } = useContext(CycleContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDiferrence = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )
        if (secondsDiferrence >= totalSeconds) {
          markCurrentCycleAsFinished()
          clearInterval(interval)
          setSecondPassed(totalSeconds)
        } else {
          setSecondPassed(secondsDiferrence)
        }
      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, setSecondPassed, markCurrentCycleAsFinished])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  // floor sempre vai arredondar o numero para baixo, dessa forma não vai existir numero quebrado
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
