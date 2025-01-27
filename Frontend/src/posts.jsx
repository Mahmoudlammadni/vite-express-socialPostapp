import { useEffect, useState } from "react";
import axios from "axios";
export default function Post() {
  const [post, setpost] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3019/api/post")
      .then((res) => setpost(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="row" >
      {post.map((p) => {
    return (
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={p.img} alt="Card image cap" />
            <div className="card-body d-flex justify-content-between align-items-center">
              <p className="card-text">{p.description}</p>
              <div className="d-flex align-items-center">
                <p className="m-0 me-2">{p.likes}</p>
                <button className="btn btn-outline-danger">
                  <i className="fas fa-heart"></i> {/* Heart icon from Font Awesome */}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
      
      
      })}
    </div>
  );
}
