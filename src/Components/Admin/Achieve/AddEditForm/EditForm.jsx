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
    AwardName: row[0].AwardName,
    Description: row[0].Description,
    Show: row[0].Show,
    Others: row[0].Others,
  });
  const handleOnChange = (e) => {
    if (e.target.name === "AwardName") {
      setMem({
        ...mem,
        AwardName: e.target.value,
      });
    } else if (e.target.name === "Description") {
      setMem({
        ...mem,
        Description: e.target.value,
      });
    }
  };
 
  const handlePrimaryImageUpload = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    console.log(data);
    axios
      .post(
        `${process.env.REACT_APP_backend_server_dev}/uploadPrimaryImage`,
        data
      )
      .then((res) => {
        setMem({
          ...mem,
          Show: `/static/AchievementImages/PrimaryImage/${res.data.originalname}`,
        });
      });
  };
  const handleSecondaryImageUpload = (e, num) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    console.log(data);
    axios
      .post(
        `${process.env.REACT_APP_backend_server_dev}/uploadSecondaryImage`,
        data
      )
      .then((res) => {
        mem.Others[
          num
        ] = `/static/AchievementImages/SecondaryImage/${res.data.originalname}`;
      });
  };
  const handleSubmit = async () => {
    if (mem.Show === "") {
      window.alert("Please fill the required fields");
    } else {
      axios
        .put(
          `${process.env.REACT_APP_backend_server_dev}/achieve/editAchievement/${id}`,
          mem
        )
        .then(() => {
          toast.success("Member Details Successfully Updated!!", {
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
            <h1>Edit Achievement Form</h1>
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="AwardName *"
              onChange={(e) => handleOnChange(e)}
              name="AwardName"
              value={mem.AwardName}
            />
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Description *"
              name="Description"
              onChange={(e) => handleOnChange(e)}
              value={mem.Description}
            />
            <span>
              <label>Show Case Image * </label>

              <input
                onChange={(e) => handlePrimaryImageUpload(e)}
                type="file"
                name="Image-Upload"
                id=""
              />
              <img
                src={`${process.env.REACT_APP_backend_server_dev}${mem.Show}`}
                height={50}
                alt=""
              />
            </span>
            <span>
              <label>Image 1  </label>

              <input
                onChange={(e) => handleSecondaryImageUpload(e)}
                type="file"
                name="Image-Upload"
                id=""
              />
              <img
                src={`${process.env.REACT_APP_backend_server_dev}${mem.Others[0]}`}
                height={50}
                alt=""
              />
            </span>
            <span>
              <label> Image 2 </label>

              <input
                onChange={(e) => handleSecondaryImageUpload(e)}
                type="file"
                name="Image-Upload"
                id=""
              />
              <img
                src={`${process.env.REACT_APP_backend_server_dev}${mem.Others[1]}`}
                height={50}
                alt=""
              />
            </span>
           
            <Button
              onClick={() => handleSubmit()}
              variant="contained"
              color="success"
            >
              Edit Achievement
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
