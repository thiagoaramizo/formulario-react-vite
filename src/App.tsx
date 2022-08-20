import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import { addLista } from './redux/listaSlice'


interface IState {
  lista: Array<string>
}

function App() {

  const lista = useSelector<any>( (state) => state.lista.value ) as Array<string>
  const dispatch = useDispatch()

  const [count, setCount] = useState(1)
  const [inputValue, setInputValue] = useState('')

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
      setInputValue( event.target.value )
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    dispatch( addLista( inputValue ) )
    setCount(count+1)
    setInputValue('')
  }

  return (
    <div className="App">
      <h1> Hello Word! </h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={inputValue} onChange={handleInputChange} />
        <button  type='submit'>Salvar</button>
      </form>
      <h2> Lista de itens </h2>
      <ul>
        {lista.map( (item, i)=> (
          <li key={i}>{item}</li>
        ))}
      </ul>
      
    </div>
  )
}

export default App
