import * as React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AlertDialog from "../AlertDialog/AlertDialog";

function Admin( {getFeedback}) {
  const rows = useSelector((store) => store.feedback);

  const deleteResponse = (id) => {
    console.log('delete response for id:', id);
    // TODO: add confirmation before deleting

    axios.delete(`/${id}`)
            .then((response) => {
                getFeedback();
            })
            .catch((err) => {
                alert('error during delete request', err);
            });
  }

  return (
    <>
      <h1>Feedback Results</h1>
      <TableContainer
        className="feedback-table"
        component={Paper}
        sx={{ width: "50%" }}
      >
        <Table sx={{ width: "100%", border: 2 }} aria-label="feedback table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Feeling</TableCell>
              <TableCell align="center">Understanding</TableCell>
              <TableCell align="center">Support</TableCell>
              <TableCell align="center">Comments</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{  border: 2  }}
              >
                <TableCell align="center">{row.feeling}</TableCell>
                <TableCell align="center">{row.understanding}</TableCell>
                <TableCell align="center">{row.support}</TableCell>
                <TableCell align="center">{row.comments}</TableCell>
                <TableCell align="center">
                  <AlertDialog deleteResponse={deleteResponse} id={row.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Admin;
