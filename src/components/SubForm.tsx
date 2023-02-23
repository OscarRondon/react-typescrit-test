import { Subs } from '../interfaces/subs'
import { useNewSubForm } from '../hooks/useNewSubForm'

interface SubFormProps {
  onNewSub: (newSub: Subs) => void
}

export const SubForm = ({ onNewSub }: SubFormProps) =>{

  const [inputValues, dispatch] = useNewSubForm()
  
  const handleClear = () => {
    dispatch({ type: 'clear' })
  }
  
  const handleSubmit = (evt:React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    onNewSub(inputValues)
    handleClear()
  }
  
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target
    dispatch({
      type: 'change_value',
      payload: {
        inputName: name,
        inputValue: value
      }
    })
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' id='nick' name='nick' placeholder='Nick Name' value={inputValues.nick} />
        <input onChange={handleChange} type='number' id='subMonth' name='subMonths' placeholder='0' value={inputValues.subMonths} />
        <input onChange={handleChange} type='text' id='avatar' name='avatar' placeholder='Avatar URL' value={inputValues.avatar}  />
        <textarea onChange={handleChange} id='description' name='description' placeholder='Description' value={inputValues.description} />
        <button type='button' onClick={handleClear}>Clear Form</button>
        <button type='submit'> Save new Sub</button>
      </form>
    </div>
  )
}