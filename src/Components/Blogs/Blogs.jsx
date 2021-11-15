import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import BlogCard from "./BlogCards/BlogCard";
import "./Blogs.css";
import { useHistory } from "react-router";
const Blogs = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_backend_server_dev}/blog/`)
      .then((data) => {
        setLoading(false);
        setData(data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const HandleGoBack = () => {
    history.goBack();
  };


  return (
    <div className="blogs-wrapper container">
      <div className="blog-container-header">
        <div
          className="blog-back"
          onClick={() => {
            HandleGoBack();
          }}
        >
          <KeyboardBackspaceIcon />
          <p> Back to home</p>
        </div>
        <h1>Bogie Sauf's Blogs</h1>
      </div>
      {/* <div className="blog-container-latest">
        <h2>Latest Blogs...</h2>
        <div className="blog-container-latest-list">
          {latest.map((t, index) => {
            return <BlogCard blog={t} key={index} />;
          })}
        </div>
      </div> */}
      <div className="blog-container-all">
        {data.map((t, index) => {
          return <BlogCard loading={loading} blog={t} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
