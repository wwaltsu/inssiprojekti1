import axios from "axios"
import { useEffect, useState } from "react";
import React from 'react';
import { If, Else } from 'react-if';
import {StyledTableCell, StyledTableRow} from './styles_MUI/MenuStyledTable'
import Menu from './components/Menu'


const App = () => {

  const [foods, setFoods] = useState([])
  useEffect(() => { 
  axios.get('http://localhost:3001/menu').then(response => {
    console.log(response);
    setFoods(response.data.items)
}).catch(e => {
    console.log(e);
});
 },[])


  return (
    <div>
      
      <If condition={foods.length === 0}>
        <h2>Ruokia haetaan......</h2>
      </If>
      <Else>
        <Menu foods={foods} StyledTableCell={StyledTableCell} StyledTableRow={StyledTableRow} />
      </Else>
    </div>
  )
}

export default App