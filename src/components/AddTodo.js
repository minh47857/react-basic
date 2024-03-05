const DisplayTodo = (props) => {
    const {todo, setTodo, handleOnClickBtn} = props
    return (
        <>
            <input type="text" value={todo} onChange={(event) => setTodo(event.target.value)}/>
            <button onClick={() => handleOnClickBtn()}>Submit</button>
            <br/> <br/>
        </>
    )
}

export default DisplayTodo