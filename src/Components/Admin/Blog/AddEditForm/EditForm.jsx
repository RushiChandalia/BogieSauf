import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./index.css";
import { TextField } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

export default function BasicModal({ open, handleClose, id, data }) {
  const row = data.filter((t) => t._id === id);
  const [mem, setMem] = React.useState({
    Title: row[0].Title,
    Body: row[0].Body,
    Date: row[0].Date,
    ImageLink: row[0].ImageLink,
    Likes: row[0].Likes,
  });
  const handleOnChange = (e) => {
    if (e.target.name === "Title") {
      setMem({
        ...mem,
        Title: e.target.value,
      });
    } else if (e.target.name === "Body") {
      setMem({
        ...mem,
        Body: e.target.value,
      });
    }
  };

  const handleSubmit = async () => {
    if (mem.Title === "" || mem.Body === "" || mem.ImageLink === "") {
      window.alert("Please fill the required fields");
    } else {
      console.log(mem);
      axios
        .put(
          `${process.env.REACT_APP_backend_server_dev}/blog/editBlog/${id}`,
          mem
        )
        .then(() => {
          toast.success("Blog Successfully Updated!!", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          handleClose();
        })
        .catch(() => {
          toast.error("Something went wrong!", {
            autoClose: 3000,
          });
          handleClose();
        });
    }
  };
  const handleImageUpload = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);

    axios
      .post(`${process.env.REACT_APP_backend_server_dev}/uploadBlogImage`, data)
      .then((res) => {
        console.log(res);
        setMem({
          ...mem,
          ImageLink: `/static/BlogImage/${res.data.filename}`,
        });
      });
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-form">
          <div className="form-add">
            <h1>Edit Blog Form</h1>
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Title *"
              onChange={(e) => handleOnChange(e)}
              name="Title"
              value={mem.Title}
            />
            <textarea
              rows="8"
              id="outlined-input"
              value={mem.Body}
              label="Description *"
              name="Body"
              onChange={(e) => handleOnChange(e)}
            />
            <span>
              <label>Blog Image * </label>

              <input
                onChange={(e) => handleImageUpload(e)}
                type="file"
                name="Image-Upload"
                id=""
              />
              <img
                src={`${process.env.REACT_APP_backend_server_dev}${mem.ImageLink}`}
                height={50}
                alt=""
              />
            </span>

            <Button
              onClick={() => handleSubmit()}
              variant="contained"
              color="success"
            >
              Edit Blog
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
