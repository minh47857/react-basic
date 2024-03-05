// import { useState } from 'react'

const DisplayTodo = (props) => {
    const listTodo = props.childData
    const deleteFromChildren = (id) => {
        props.deleteTodoInParent(id)
    }

    return (
        <div>
            {listTodo && listTodo.length > 0 &&
                listTodo.map((item, index) => {
                    return <div key={item.id} onClick={() => deleteFromChildren(item.id)}>
                        {index} - {item.name}
                    </div>
                })

            }
        </div>
    )
}
export default DisplayTodo