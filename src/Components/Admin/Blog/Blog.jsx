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
import "./Blog.css";
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
      .get(`${process.env.REACT_APP_backend_server_dev}/blog/`)
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => console.log(err));
  };
  React.useEffect(() => {
    fetchData();
  }, [data]);

  const handleDeleteBlog = (id) => {
    const ans = window.confirm("Are you sure you want to delete?");
    console.log(ans);

    if (ans) {
      axios
        .delete(
          `${process.env.REACT_APP_backend_server_dev}/blog/deleteBlog/${id}`
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
        Add Blog
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Date posted:</TableCell>
              <TableCell align="right">Likes</TableCell>
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
                  {row.Title}
                </TableCell>
                <TableCell align="right">{row.Body.slice(0, 100)}...</TableCell>
                <TableCell align="right">
                  {" "}
                  <img
                    src={`${process.env.REACT_APP_backend_server_dev}${row.ImageLink}`}
                    height={50}
                    alt=""
                  />
                </TableCell>

                <TableCell align="right">{row.Date}</TableCell>
                <TableCell align="right">{row.Likes}</TableCell>
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
                      handleDeleteBlog(row._id);
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
      {isEdit ? (
        <EditForm
          open={isEdit}
          handleClose={handleEditClose}
          id={id}
          data={data}
        />
      ) : (
        ""
      )}
    </div>
  );
}
