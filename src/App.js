import "./App.css";
import Main from "./Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./Components/Admin/Admin.jsx";
import { useEffect, useState } from "react";
import Gear from "./Images/animation_500_ku9j2ktm.gif";
import "react-toastify/dist/ReactToastify.css";
import Blogs from "./Components/Blogs/Blogs";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      window.addEventListener("load", () => {
        setLoading(false);
      });
    } else {
      window.removeEventListener("load", () => {});
    }
    return () => {
      window.removeEventListener("load", () => {});
    };
  }, [loading]);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <div className="App-loader">
            <img src={Gear} alt="" />
          </div>
        ) : (
          <>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/admin" component={Admin} />
              <Route path="/Blogs" component={Blogs} />
            </Switch>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
