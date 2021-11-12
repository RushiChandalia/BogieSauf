import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./index.css";
import { TextField } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

export default function BasicModal({ open, handleClose }) {
  const [mem, setMem] = React.useState({
    name: "",
    position: "",
    profile: "",
    socialMedia: [
      {
        plat: "Linkedin",
        Link: "",
      },
      {
        plat: "Facebook",
        Link: "",
      },
      {
        plat: "Instagram",
        Link: "",
      },
      {
        plat: "Twitter",
        Link: "",
      },
      {
        plat: "Youtube",
        Link: "",
      },
      {
        plat: "Blogspot",
        Link: "",
      },
    ],
  });
  const handleOnChange = (e) => {
    if (e.target.name === "Name") {
      setMem({
        ...mem,
        name: e.target.value,
      });
    } else if (e.target.name === "Position") {
      setMem({
        ...mem,
        position: e.target.value,
      });
    }
  };
  const handleSocialLinks = (e) => {
    if (e.target.name === "LinkedIn") {
      mem.socialMedia[0].Link = e.target.value;
    }
    if (e.target.name === "Facebook") {
      mem.socialMedia[1].Link = e.target.value;
    }
    if (e.target.name === "Instagram") {
      mem.socialMedia[2].Link = e.target.value;
    }
    if (e.target.name === "Youtube") {
      mem.socialMedia[4].Link = e.target.value;
    }
    if (e.target.name === "Blogspot") {
      mem.socialMedia[5].Link = e.target.value;
    }
    if (e.target.name === "Twitter") {
      mem.socialMedia[3].Link = e.target.value;
    }
  };
  const handleImageUpload = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    console.log(data);
    axios
      .post(`${process.env.REACT_APP_backend_server_dev}/uploadCharity`, data)
      .then((res) => {
        setMem({
          ...mem,
          profile: `/static/TeamImage/${res.data.originalname}`,
        });
      });
  };
  const handleSubmit = async () => {
    if (mem.name === "" || mem.position === "" || mem.profile === "") {
      window.alert("Please fill the required fields");
    } else {
      axios
        .post(`${process.env.REACT_APP_backend_server_dev}/team/addMember`, mem)
        .then(() => {
          toast.success("Member Added Successfully!!", {
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
              label="Name *"
              onChange={(e) => handleOnChange(e)}
              name="Name"
              value={mem.name}
            />
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Position *"
              name="Position"
              onChange={(e) => handleOnChange(e)}
            />
            <span>
              <label>Profile * </label>

              <input
                onChange={(e) => handleImageUpload(e)}
                type="file"
                name="Image-Upload"
                id=""
              />
            </span>
            <div className="SocialLinks">
              <span>
                <label>LinkedIn </label>
                <TextField
                  id="demo-helper-text-misaligned-no-helper"
                  label="LinkedIn"
                  name="LinkedIn"
                  onBlur={(e) => {
                    handleSocialLinks(e);
                  }}
                />
              </span>
              <span>
                <label>Facebook </label>
                <TextField
                  id="demo-helper-text-misaligned-no-helper"
                  label="Facebook"
                  name="Facebook"
                  onBlur={(e) => {
                    handleSocialLinks(e);
                  }}
                />
              </span>
              <span>
                <label>Instagram </label>
                <TextField
                  id="demo-helper-text-misaligned-no-helper"
                  label="Instagram"
                  name="Instagram"
                  onBlur={(e) => {
                    handleSocialLinks(e);
                  }}
                />
              </span>
              <span>
                <label>Twitter </label>
                <TextField
                  id="demo-helper-text-misaligned-no-helper"
                  label="Twitter"
                  name="Twitter"
                  onBlur={(e) => {
                    handleSocialLinks(e);
                  }}
                />
              </span>
              <span>
                <label>Youtube </label>
                <TextField
                  id="demo-helper-text-misaligned-no-helper"
                  label="Youtube"
                  name="Youtube"
                  onBlur={(e) => {
                    handleSocialLinks(e);
                  }}
                />
              </span>
              <span>
                <label>Blogspot </label>
                <TextField
                  id="demo-helper-text-misaligned-no-helper"
                  label="Blogspot"
                  name="Blogspot"
                  onBlur={(e) => {
                    handleSocialLinks(e);
                  }}
                />
              </span>
            </div>
            <Button
              onClick={() => handleSubmit()}
              variant="contained"
              color="success"
            >
              Add Member
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
