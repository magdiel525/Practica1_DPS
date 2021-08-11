import React, { useState } from 'react'
import Todo from '../Components/Todo'

const Form = () => {
    const [todo, setTodo] = useState({})
    const [Cantidad,setCantidad] =useState({})
    const [todos, setTodos] = useState([])
    const handleChange = e => setTodo({ [e.target.name]: e.target.value })
    const handleChange2 = e => setCantidad({ [e.target.name]: e.target.value })

    const handleClick = e => {
        if (Object.keys(todo).length===0 || todo.todo.trim() === '' || Object.keys(Cantidad).length===0 || Cantidad.Cantidad.trim() === '') {
            alert('El campo no puede estar vacío')
            return
        }
        setTodos([...todos,todo])
    }
    const deleteTodo=indice=>{
        const newTodos = [...todos]
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }

    return (
        <>
        <form onSubmit={e => e.preventDefault()}>
            <label>Agregar Producto</label><br />
            <input type="text" name="todo" onChange={handleChange}></input>
            <label>Cantidad</label><br />
            <input type="text" name="Cantidad" onChange={handleChange2}></input>
            <button onClick={handleClick}>Agregar</button>
        </form>
        {
            todos.map((value, index) => (<Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo} />))
        }
        </>
    )
}
export default Form