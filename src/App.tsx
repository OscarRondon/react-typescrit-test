import { useEffect, useState } from 'react'
import './App.css'

interface Subs {
  nick: string,
  subMonths: number,
  avatar: string,
  description?: string
}

const INITIAL_STATE: Subs[] = [
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
  
  return (
    <div className='App'>
      <h1> 
        First Web App React TypeScript!!!
      </h1>
      <ul>
        {
          subs.map(sub => {
            return (
              <li
                key={sub.nick}
              >
                <img src={sub.avatar} alt={sub.nick}/>
                <h4>{sub.nick} <small>[{sub.subMonths}]</small></h4>
                <p>{sub.description?.substring(0, 100)}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App
