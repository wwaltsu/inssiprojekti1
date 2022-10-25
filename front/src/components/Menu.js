import parse from 'html-react-parser';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';


const Menu = ({foods, StyledTableCell, StyledTableRow}) => {
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableBody>
        {foods.slice(0,5).map(food => {
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
    )
}

export default Menu