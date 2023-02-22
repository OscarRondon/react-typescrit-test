import React, { useState } from 'react'
import { Subs } from '../interfaces/subs'

interface SubFormState {
  inputValues: Subs
}

interface SubFormProps {
  onNewSub: (newSub: Subs) => void
}

export const SubForm = ({ onNewSub }: SubFormProps) =>{
  
  const [inputValues, setInputValues] = useState<SubFormState['inputValues']>({
    nick: '',
    subMonths: 10,
    avatar: '',
    description: ''
  })
  
  const handleSubmit = (evt:React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    onNewSub(inputValues)
  }
  
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({ ...inputValues, [evt.target.name]: evt.target.value })
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' id='nick' name='nick' placeholder='Nick Name' value={inputValues.nick} />
        <input onChange={handleChange} type='number' id='subMonth' name='subMonth' placeholder='0'/>
        <input onChange={handleChange} type='text' id='avatar' name='avatar' placeholder='Avatar URL'  />
        <textarea onChange={handleChange} id='description' name='description' placeholder='Description' value={inputValues.description} />
        
        <button type='submit'> Save new Sub</button>
      </form>
    </div>
  )
}