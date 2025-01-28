import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { save } from "./action";

export default function Post() {
  const [post, setpost] = useState([]);
  const dis = useDispatch()
  useEffect(() => {
    axios
      .get("http://localhost:3019/api/post")
      .then((res) => setpost(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mt-4">
      <div className="row g-4">
        {post.map((p,i) => {
          return (
            <div className="col-md-4" key={i}>
              <div className="card shadow-sm border-light rounded">
                <img className="card-img-top" src={p.img} alt="Card image cap" />
                <div className="card-body d-flex flex-column justify-content-between">
                  <p className="card-text">{p.description}</p> 
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <p className="m-0">{p.likes} likes</p>
                    <div className="d-flex">
                      <button className="btn btn-outline-danger d-flex align-items-center me-2">
                        <i className="fas fa-heart me-2"></i> Like
                      </button>
                      <button onClick={()=>dis(save(p))} className="btn btn-outline-primary d-flex align-items-center">
                        <i className="fas fa-bookmark me-2"></i> Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
