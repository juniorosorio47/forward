import Head from "next/head";
import { useCallback, useState } from "react";

import { Container, NavBar, Body, List, Actions } from '../styles/todoapp';

interface IItem{
  id: string;
  checked: boolean;
  value:string;
}

interface IList{
  id: string;
  title:string;
  items:IItem[];
}

const TodoApp: React.FC = () => {
  const [lists, setLists] = useState<IList[]>([]);

  const addToList = useCallback((event) => {
    const { value } = event.target;


  },[])

  return <Container>
    <Head>
        <title>TodoNext</title>
    </Head>
    <NavBar> 
      <h1>DoNext</h1> 
      <span>List What You Are Going To DoNext</span>
    </NavBar>
    <Actions> 
      <button>+ Add List</button>
    </Actions>
    <Body>
      {lists.length>0 ? lists.map(list =>(
        <List>
          <h3>{list.title}</h3>
          <ul>
            {list.items.map(item =>(
              <li><input type="checkbox" checked={item.checked}/> <input type="text" id={item.id} value={item.value}/></li>
            ))}
          </ul>
          <div>
            <input type="text" placeholder="Add item to list"/>
            <button onClick={() =>{}}>+</button>
          </div>
        </List>
      )) : <span>Click at Add List to create a new list.</span>}
    </Body>
    
  </Container>;
}

export default TodoApp;