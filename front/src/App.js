import axios from "axios"
import { useEffect, useState } from "react";
import React from 'react';
import { If, Else } from 'react-if';
import parse from 'html-react-parser';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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

 const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

 const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


  return (
    <div>
      
      <If condition={foods.length === 0}>
        <h2>Ruokia haetaan......</h2>
      </If>
      <Else>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableBody>
      {foods.map(food => {
        return (
          <StyledTableRow key={food.title}>
         <StyledTableCell component="th" scope="row">
                {food.title}
              </StyledTableCell>
              <StyledTableCell align="center">{parse(food.description)}</StyledTableCell>
          </StyledTableRow> 
        )})}
      </TableBody>
      </Table>
     </TableContainer>
      </Else>
    </div>
  )
}

export default App