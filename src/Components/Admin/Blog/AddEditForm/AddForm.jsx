import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./index.css";
import { TextField } from "@mui/material";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { uploadtos3 } from "../../../../utils/uploadTos3";

export default function BasicModal({ open, handleClose }) {
  const [mem, setMem] = React.useState({
    Title: "",
    Body: "",
    ImageLink:""
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
    console.log(mem)
    if (mem.Title === "" || mem.Body === "" || mem.ImageLink === "") {
      window.alert("Please fill the required fields");
    } else {
      
      axios
        .post(`${process.env.REACT_APP_backend_server_dev}/blog/addBlog`, mem)
        .then(() => {
          toast.success("Blog Added Successfully!!", {
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
  const handleImageUpload = async(e) => {
    const file = e.target.files[0]
    const dataurl = await uploadtos3()

    axios
      .put(dataurl.data,file )
      .then(async() => {
        const imageUrl = dataurl.data.split('?')[0]
        console.log(imageUrl)
        setMem({
          ...mem,
          ImageLink: imageUrl,
        });
        await toast.success("Image Added Successfully!!", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
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
            <h1>Add Blog Form</h1>
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Title *"
              onChange={(e) => handleOnChange(e)}
              name="Title"
              value={mem.name}
            />
            <textarea
              rows="8"
              id="outlined-input"
              aria-label="minimum height"
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
            </span>
            <Button
              onClick={() => handleSubmit()}
              variant="contained"
              color="success"
            >
              Add Blog
            </Button>
          </div>
        </div>
      </Modal>
      <ToastContainer
        className="toastContainer"
        position="bottom-left"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </div>
  );
}
