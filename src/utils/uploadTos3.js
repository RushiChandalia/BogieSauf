import axios from "axios";


export const uploadtos3 = async() =>{
    const dataurl = await axios.get(
        `${process.env.REACT_APP_backend_server_dev}/about/s3Url`
      );
     return dataurl
}