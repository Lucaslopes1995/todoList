import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import * as C from './App.styles';
import { Item }  from './types/item'
import {ListItem} from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState <Item[]>([]);

  const getTasks = async () =>{
    const response = await axios.get('http://localhost:3001/tasks/')
    const {data} = response;
    setList(data);
  }

  useEffect(()=>{
    getTasks();
  },[])

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea list={{list, setList}}/> 

        {(list.length!==0)?list.map((item,index)=>(
          <ListItem key={item.id+index} item={{item, list, setList}} />
        )):<p>Nenhuma Tarefa</p>}

      </C.Area>
    </C.Container>
  );
}

export default App;