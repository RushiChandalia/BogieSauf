import * as React from "react";
import BlogDetails from "./BlogModal/BlogDetail";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./BlogCard.css";
import moment from "moment";
import { Skeleton } from "@mui/material";

export default function BasicCard({ blog, loading }) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  return (
    <Card className="BasicCard">
      {loading ? (
        <Skeleton variant="rectangular" height={200} />
      ) : (
        <img
          src={`${process.env.REACT_APP_backend_server_dev}${blog.ImageLink}`}
          id="blog-image"
          alt=""
        />
      )}

      <CardContent>
        <Typography variant="h5" component="div">
          {loading ? (
            <Skeleton variant="rectangular" height={30} />
          ) : (
            blog.Title
          )}
        </Typography>
        <Typography sx={{ mt: 1 , mb:1 }} color="text">
          {loading ? (
        <Skeleton variant="rectangular" height={20} width={200} />
      ) : (moment(blog.Date).format("MMM Do YY"))}
        </Typography>
        <Typography id="blog-preview-body" variant="body2">
          {loading ? (
        <Skeleton variant="rectangular" height={50} width={400} />
      ) : (blog.Body.slice(0, 150))}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => setOpen(true)} className="btn-blog" size="small">
          Read More
        </Button>
      </CardActions>
      <BlogDetails blog={blog} open={open} handleClose={handleClose} />
    </Card>
  );
}
