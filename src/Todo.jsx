import {useRef, useReducer } from "react";

const initialState = { tasks: [] };

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'add':
        return { tasks: [...state.tasks, action.payload] };
        case 'remove':
        return { tasks: [] };
        default:
        throw new Error();
    }
};
const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const inputRef = useRef(null);
        return (
            <div>
            <label htmlFor="input">Task</label>
            <input type="text" name="input" id="input" className="me- rounded"ref={inputRef} />
            <button onClick={() => {dispatch({ type: 'add', payload: inputRef.current.value }); inputRef.current.value = '';  }}className="m-4 rounded" >
                Add
            </button>
            <button onClick={() => dispatch({ type: 'remove' })} className="m-4 rounded">
                Remove
            </button>
            <div>
                {state.tasks.map((task, index) => (
                <p key={index}>{task}</p>
                ))}
            </div>
            </div>
        );
};
export default Todo;
