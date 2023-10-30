import React from 'react';

const TodoList = ({todos, setTodos, setEditTodo}) => {

    const handleDelete = ({id}) => {
        console.log(id);
        setTodos(todos.filter((todo) => todo.id !== id));

    };  // handleComplete

    const handleComplete = (todo) => {
    console.log(todo);
    setTodos(
    todos.map((item) => {
        if(item.id === todo.id){
            return { ...item, completed: !item.completed}
        }
        return item;

    })
    );
    }; 

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo)=> todo.id === id);
        setEditTodo(findTodo);
        };  

    return <div>
       {
        todos.map((todo =>(
            <li className='list-item' key={todo.id}>
                <input 
                    type="text" 
                    value={todo.title}  
                    className='list' 
                    onChange={(event) => event.preventDefault()}
                />
                <div>
                    <button className='button-complete task-button' onClick={()=> handleComplete(todo)} title='Complete'>
                        <i className='fa fa-check-circle'></i>
                    </button>
                    <button className='button-edit task-button' onClick={()=> handleEdit(todo)} title='Edit'>
                        <i className='fa fa-edit'></i>
                    </button>
                    <button className='button-delete  task-button' onClick={()=> handleDelete(todo) } title='Delete'>
                        <i className='fa fa-trash'></i>
                    </button>
                </div>  
            </li>
        )))

       }
    </div>;
}

export default TodoList;