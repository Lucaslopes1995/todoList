import * as C from './styles';
import {Item} from '../../types/item'
import { useState } from 'react';
import axios from 'axios';

type Props = {
    item:{item:Item,
    list:Item[],
    setList: Function}
}

export const ListItem = ({item}: Props) => {
    const [itemAdd, setItemAdd] = useState(item.item.done);

    const changeList = async (check:boolean) => {
        item.item.done = !item.item.done;
        
        const filteredList = item.list.map((it) => {
            if(it.id === item.item.id){
                return it=item.item
            }
            return it
        })
        // const arr = [...filteredList,item.item].sort((a,b)=>b.id-a.id);
        await axios.put('http://localhost:3001/tasks/'+item.item.id,{ name: item.item.name, done:item.item.done})
        setItemAdd(check)
        item.setList(filteredList)
    }

    const removeFromList = async (e:any) => {
        const {innerText:value} = e.target
        const filteredList = item.list.filter((it)=> it.name !==value)
        const arr = [...filteredList];
        await axios.delete('http://localhost:3001/tasks/'+item.item.id)
        item.setList(arr)
    }

    return (
        <C.Container done={item.item.done}>
            <input 
            type="checkbox"
            checked={itemAdd}
            onChange={({target})=>changeList(target.checked)}            
            />
            <label onDoubleClick={(e)=>removeFromList(e)}>{item.item.name} </label>
        </C.Container>
    )
}