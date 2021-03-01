//import react
import React from 'react';

//import material-ui
import { Button, Paper, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { Table } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useSelector } from "react-redux";

//tablecell styles
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

//tablerow styles  
const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    head: {
        fontSize: 20,
        fontFamily: '"Segoe UI"',
        fontWeight: 400
    }
});

const Usertable = () => {

    const { userList } = useSelector(states => states);
    const { list } = userList;
    console.log(list.userName)
    const classes = useStyles();

    return (
        <>
            <Paper elevation={10}>
               
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>

                            <StyledTableCell className={classes.head}>USERNAME</StyledTableCell>
                            <StyledTableCell className={classes.head}>PASSWORD</StyledTableCell>
                            <StyledTableCell className={classes.head}>EDIT</StyledTableCell>
                            <StyledTableCell className={classes.head}>DELETE</StyledTableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            list.map(row => {
                                return (
                                    <StyledTableRow key={row._id}>
                                        
                                        <StyledTableCell>
                                            {row.userName}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.password}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <Button variant='contained' color='primary' >   
                                                <EditIcon />
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <Button variant='contained' color='secondary' >
                                                Delete
                                                <DeleteIcon />
                                            </Button>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                )
                            })
                        }
                    </TableBody>

                </Table>
            </Paper>
        </>
    );
}


export default Usertable;

