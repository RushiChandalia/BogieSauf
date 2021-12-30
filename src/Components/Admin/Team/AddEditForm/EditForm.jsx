import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./index.css";
import { TextField } from "@mui/material";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { uploadtos3 } from "../../../../utils/uploadTos3";

export default function BasicModal({ open, handleClose, id, data }) {
  const row = data.filter((t) => t._id === id);
  const [mem, setMem] = React.useState({
    name: row[0].name,
    position: row[0].position,
    profile: row[0].profile,
    socialMedia: [
      {
        plat: "Linkedin",
        Link: row[0].socialMedia[0].Link,
      },
      {
        plat: "Facebook",
        Link: row[0].socialMedia[1].Link,
      },
      {
        plat: "Instagram",
        Link: row[0].socialMedia[2].Link,
      },
      {
        plat: "Twitter",
        Link: row[0].socialMedia[3].Link,
      },
      {
        plat: "Youtube",
        Link: row[0].socialMedia[4].Link,
      },
      {
        plat: "Blogspot",
        Link: row[0].socialMedia[5].Link,
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
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    const dataurl = await uploadtos3();

    axios.put(dataurl.data, file).then(async () => {
      const imageUrl = dataurl.data.split("?")[0];
      console.log(imageUrl);
      setMem({
        ...mem,
        profile: imageUrl,
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
  const handleSubmit = async () => {
    if (mem.name === "" || mem.position === "" || mem.profile === "") {
      window.alert("Please fill the required fields");
    } else {
      axios
        .put(
          `${process.env.REACT_APP_backend_server_dev}/team/editMember/${id}`,
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
            <h1>Edit Member Form</h1>
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
              value={mem.position}
            />
            <span>
              <label>Profile * </label>

              <input
                onChange={(e) => handleImageUpload(e)}
                type="file"
                name="Image-Upload"
                id=""
              />
              <img src={mem.profile} height={50} alt="" />
            </span>
            <div className="SocialLinks">
              <span>
                <label>LinkedIn </label>
                <TextField
                  id="demo-helper-text-misaligned-no-helper"
                  name="LinkedIn"
                  onBlur={(e) => {
                    handleSocialLinks(e);
                  }}
                  defaultValue={mem.socialMedia[0].Link}
                />
              </span>
              <span>
                <label>Facebook </label>
                <TextField
                  id="demo-helper-text-misaligned-no-helper"
                  name="Facebook"
                  onBlur={(e) => {
                    handleSocialLinks(e);
                  }}
                  defaultValue={mem.socialMedia[1].Link}
                />
              </span>
              <span>
                <label>Instagram </label>
                <TextField
                  id="demo-helper-text-misaligned-no-helper"
                  name="Instagram"
                  onBlur={(e) => {
                    handleSocialLinks(e);
                  }}
                  defaultValue={mem.socialMedia[2].Link}
                />
              </span>
              <span>
                <label>Twitter </label>
                <TextField
                  id="demo-helper-text-misaligned-no-helper"
                  name="Twitter"
                  defaultValue={mem.socialMedia[3].Link}
                  onBlur={(e) => {
                    handleSocialLinks(e);
                  }}
                />
              </span>
              <span>
                <label>Youtube </label>
                <TextField
                  id="demo-helper-text-misaligned-no-helper"
                  defaultValue={mem.socialMedia[4].Link}
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
                  name="Blogspot"
                  defaultValue={mem.socialMedia[5].Link}
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
              Edit Member
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
