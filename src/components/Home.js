import {useState} from 'react'
import DisplayTodo from './DisplayTodo'
import AddTodo from './AddTodo'
import _ from 'lodash';

const Home = () => {
    const [todo, setTodo] = useState("")
    const [listTodo, setListTodo] = useState([
        {id: 'todo1', name: 'watching youtube'},
        {id: 'todo2', name: 'doing homework'},
        {id: 'todo3', name: 'playing game'}
    ])

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
        
    }

    const handleOnClickBtn = () => {
        let todoItem = {
            id: `todo${randomIntFromInterval(4, 1000000)}`,
            name: todo
        }
        setListTodo([...listTodo, todoItem])
    }

    const handleDeleteTodo = (id) => {
        let currentTodoList = _.clone(listTodo);
        currentTodoList = currentTodoList.filter(item => item.id !== id);
        console.log(currentTodoList)
        setListTodo(currentTodoList)
    }

    return(
        <div>
           
            <AddTodo 
                todo={todo}
                setTodo={setTodo}
                handleOnClickBtn={handleOnClickBtn}
            />
            <DisplayTodo
                childData={listTodo}
                deleteTodoInParent={handleDeleteTodo}
            />
            
        </div>
    )
}

export default Home