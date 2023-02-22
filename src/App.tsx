import './App.css'
import { useEffect, useState } from 'react'
import { Subs } from './interfaces/subs'
import { List } from './components/List'
import { SubForm } from './components/SubForm'


interface AppStates {
  subs: Subs[]
}

const INITIAL_STATE: AppStates['subs'] = [
  {
    nick: 'Oscar Rondon',
    subMonths: 18,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'El mejor programador del mundo!!'
  },
  {
    nick: 'Pepito Grillo',
    subMonths: 36,
    avatar: 'https://i.pravatar.cc/150?u=grillo'
  }
]

function App () {
  
  const [subs, setSubs] = useState<Subs[]>([])
  
  useEffect(() =>{
    setSubs(INITIAL_STATE)
  }, [])
  
  const handleNewSub = (newSub: Subs): void => {
    setSubs(prevState => [...prevState, newSub])
  }
  
  return (
    <div className='App'>
      <h1> 
        First Web App React TypeScript!!!
      </h1>
      <List subs={subs} />
      <SubForm onNewSub={handleNewSub}/>
    </div>
  )
}

export default App
