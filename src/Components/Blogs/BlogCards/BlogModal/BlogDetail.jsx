import * as React from "react";

import Modal from "@mui/material/Modal";
import "./index.css";
import moment from "moment";
import { Fade } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
export default function BasicModal({ open, handleClose, blog }) {
  const AddLike = (id) => {
    axios
      .put(`${process.env.REACT_APP_backend_server_dev}/blog/addLike/${id}`)
      .then(() => {
        console.log("helo");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <div className="modal-Blog">
            <div className="blog-body">
              <img
                src={blog.ImageLink}
                id="blog-image-modal"
                alt=""
              />
              <span className="blog-header">
                <h1>{blog.Title}</h1>
                <CloseIcon id="blg-btn" onClick={() => handleClose()} />
              </span>
              <span id="blog-Body-modal">
              <p>{moment(blog.Date).format("MMM Do YY")}</p>
              <pre >{blog.Body}</pre>
              </span>
              <span className="blog-footer">
                <ThumbUpAltIcon
                  id="blg-btn"
                  color="primary"
                  onClick={() => AddLike(blog._id)}
                />
                {blog.Likes} Likes
              </span>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
