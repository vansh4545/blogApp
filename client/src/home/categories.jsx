
import {styled,Button, Table ,TableHead,TableCell,TableBody,TableRow} from '@mui/material';
import { categories } from '../constants/data';

const Styledtble = styled(Table)`
 border: 2px solid rgba(224,224,224,1);
`
const Styledbutn = styled(Button)`
margin:20px;
width: 85%;
background: #6495ED;
color: #fff;

`
const Categories = ()=>{
    return (
        <>
        <Styledbutn variant='contained'> Create Blog </Styledbutn>

        <Styledtble>
            <TableHead>
                <TableRow>
                    <TableCell>All Categories</TableCell>
                   
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    categories.map(category=>(
                        <TableRow key = {category.id}>
                            <TableCell>{category.type}</TableCell>
                        </TableRow>
                    ))
                }
               
            </TableBody>
        </Styledtble>
        </>
    )
}


export default Categories;