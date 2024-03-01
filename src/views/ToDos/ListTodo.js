import React from 'react'
import AddTodo from './AddTodo'
import './ListTodo.scss'
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        listTodos: [
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success('Add Succeed')
    }

    handleDeleteTodo = (deletedItem) => {
        let newList = this.state.listTodos.filter((item) => item.id !== deletedItem.id);
        this.setState({
            listTodos: newList
        })
        toast.success('Delete Succeed!')
    }

    handleOnChangeEditTodo = (event) => {
        this.setState({
            editTodo: {
                id: this.state.editTodo.id,
                title: event.target.value
            }
        })
    }

    handleEditTodo = (todo) => {
        this.setState({
            editTodo: todo
        })
    }

    handleSaveTodo = () => {
        this.setState({
            listTodos: this.state.listTodos.map((item) => {
                if(item.id === this.state.editTodo.id) 
                    return this.state.editTodo;
                else    
                    return item;
            }),
            editTodo: {}
        })
        toast.success('Update Succed!')
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <>
                <div className="list-todo-container">
                    <AddTodo addNewTodo={this.addNewTodo} />
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {
                                            (isEmptyObj === true || item.id !== editTodo.id)
                                                ?
                                                <>
                                                    <span> {index + 1} -  {item.title} </span>
                                                    <button className="edit" onClick={() => {this.handleEditTodo(item)}}>Edit</button>
                                                </>
                                                :
                                                <>
                                                    <span> 
                                                        {index + 1} <input type="text" value={editTodo.title} onChange={(event) => {this.handleOnChangeEditTodo(event)}}/>
                                                    </span>
                                                    <button className="edit" onClick={() => {this.handleSaveTodo()}}>Save</button>
                                                </>
                                        }
                                        <button className="delete" onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </>
        )
    }
}

export default ListTodo