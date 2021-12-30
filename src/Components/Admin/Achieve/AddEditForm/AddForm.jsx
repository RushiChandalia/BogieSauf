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
    AwardName: "",
    Description: "",
    Show: "",
    Others: [],
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

  const handlePrimaryImageUpload = async (e) => {
    const file = e.target.files[0];
    const dataurl = await uploadtos3();

    axios.put(dataurl.data, file).then(async () => {
      const imageUrl = dataurl.data.split("?")[0];
      setMem({
        ...mem,
        Show: imageUrl,
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
  const handleSecondaryImageUpload = async (e, num) => {
    const file = e.target.files[0];
    const dataurl = await uploadtos3();

    axios.put(dataurl.data, file).then(async () => {
      const imageUrl = dataurl.data.split("?")[0];
      console.log(imageUrl);
      mem.Others[num] = imageUrl;
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
  const handleSubmit = async () => {
    if (mem.Show === "") {
      window.alert("Please fill the required fields");
    } else {
      axios
        .post(
          `${process.env.REACT_APP_backend_server_dev}/achieve/addAchievement`,
          mem
        )
        .then(() => {
          toast.success("Achievement Added Successfully!!", {
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
            <h1>Add Member Form</h1>
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Award Name *"
              onChange={(e) => handleOnChange(e)}
              name="AwardName"
            />
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Description *"
              name="Description"
              onChange={(e) => handleOnChange(e)}
            />
            <span>
              <label>Show Case Image * </label>

              <input
                onChange={(e) => handlePrimaryImageUpload(e)}
                type="file"
                name="Image-Upload"
                id=""
              />
            </span>

            <span>
              <label>Image 1 </label>

              <input
                onChange={(e) => handleSecondaryImageUpload(e, 0)}
                type="file"
                name="Image-Upload"
                id=""
              />
            </span>

            <span>
              <label>Image 2 </label>

              <input
                onChange={(e) => handleSecondaryImageUpload(e, 1)}
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
              Add Achievement
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
