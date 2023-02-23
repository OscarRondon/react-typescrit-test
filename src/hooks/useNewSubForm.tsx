import { useReducer } from 'react'
import { Subs } from '../interfaces/subs'

interface SubFormState {
  inputValues: Subs
  reducer: (inputValues:Subs, action:string) => void
}
  
interface FormReducerAction {
  type: 'change_value' | 'clear',
  payload?: {
    inputName: string,
    inputValue: string
  }
}

const INITIAL_STATE: Subs = {
  nick: '',
  subMonths: 0,
  avatar: '',
  description: ''
}

const formReducer = (state: SubFormState['inputValues'], action: FormReducerAction):Subs => {
  switch (action.type) {
    case 'change_value':{
      if (action.payload !== undefined) {
          
        const { inputName, inputValue } = action.payload
        return { ...state, [inputName]: inputValue } 
      } else return state
    }
    case 'clear':
      return INITIAL_STATE
    default:
      return state
        
  }
}

export const useNewSubForm = (): [Subs, React.Dispatch<FormReducerAction>] =>{
  return useReducer(formReducer, INITIAL_STATE)
}