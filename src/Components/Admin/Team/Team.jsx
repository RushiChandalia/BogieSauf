import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Team.css";
import axios from "axios";
import AddForm from "./AddEditForm/AddForm";
import EditForm from "./AddEditForm/EditForm";

export default function Team() {
  const [data, setData] = React.useState([]);
  const [isEdit, setEdit] = React.useState(false);
  const [id, setId] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleEditClose = () => setEdit(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_backend_server_dev}/team/`)
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => console.log(err));
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteTeamMember = (id) => {
    const ans = window.confirm("Are you sure you want to delete?");
    console.log(ans);

    if (ans) {
      axios
        .delete(
          `${process.env.REACT_APP_backend_server_dev}/team/deleteMember/${id}`
        )
        .then(() => {
          fetchData();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="Team-Details">
      <Button
        onClick={() => {
          handleOpen();
        }}
        variant="contained"
        color="success"
      >
        Add Member
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Position</TableCell>
              <TableCell align="right">Profile</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.position}</TableCell>
                <TableCell align="right">
                  <img
                    src={row.profile}
                    height={50}
                    alt=""
                  />
                </TableCell>
                <TableCell align="right">
                  <EditIcon
                    onClick={() => {
                      setId(row._id);
                      setEdit(true);
                    }}
                    id="btn-team"
                    color="primary"
                  />
                </TableCell>
                <TableCell align="right">
                  <DeleteIcon
                    id="btn-team"
                    onClick={() => {
                      handleDeleteTeamMember(row._id);
                    }}
                    color="secondary"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddForm open={open} handleClose={handleClose} />
      {isEdit ? 
      <EditForm open={isEdit} handleClose={handleEditClose} id={id} data = {data} /> : ""
    }
    </div>
  );
}
