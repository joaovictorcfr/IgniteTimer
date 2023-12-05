import { HandPalm, Play } from 'phosphor-react'
import { HomeContainer, StartButton, StoptButton } from './Styles'
import { useContext } from 'react'
import { NewCycleForm } from './Components/NewCycleForm/Index'
import { CountDown } from './Components/CountDown/Index'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CycleContext } from '../../Contexts/CyclesContexts'

function Home() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } =
    useContext(CycleContext)

  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa!'),
    minutesAmount: zod
      .number()
      .min(1, 'Informe um intervalo de no minimo 5 minutos.')
      .max(60, 'infome um intervalo de no minimo 60 minutos.'),
  })

  type DataInput = zod.infer<typeof newCycleFormValidationSchema>

  const newCycleForm = useForm<DataInput>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: DataInput) {
    createNewCycle(data)
    reset()
  }

  // watch recebe o valor do input em tempo real, o input com name 'task'
  const task = watch('task')
  const isSubmitDisable = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <CountDown />

        {activeCycle ? (
          <StoptButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Parar
          </StoptButton>
        ) : (
          <StartButton disabled={isSubmitDisable} type="submit">
            <Play size={24} />
            Começar
          </StartButton>
        )}
      </form>
    </HomeContainer>
  )
}
export default Home
