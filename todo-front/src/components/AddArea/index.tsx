import { useState } from 'react';
import { Item } from '../../types/item';
import * as C from './styles';
import axios from 'axios';

type Props = {list:{
    list:Item[],
    setList: Function
}};

export const AddArea = ({list} :Props) => {
    const [task, setTask] = useState('');

    const addTask = async (e:any) => {
        e.preventDefault();
        const newList = [...list.list,
            {
                id:list.list.length+1,
                name:task,
                done:false
            }]
        await axios.post('http://localhost:3001/tasks/',{ name: task, done:false})
        list.setList(newList);
        setTask('');
    }

    return (
    <C.Container>
        <form onSubmit={(e)=>addTask(e)}>
        <label htmlFor="task-input">
            <input 
            id='task-input'
            value={task}
            autoComplete='off'
            onChange={({target})=>setTask(target.value)}
            
            />
        </label>
        <button type='submit'>Adicionar</button>
        </form>

    </C.Container>)
}