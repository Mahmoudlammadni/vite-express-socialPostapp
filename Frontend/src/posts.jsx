import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { save } from "./action";
import { useSelector } from "react-redux";

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  const [i,seti]=useState(0)
  const dispatch = useDispatch();
  const id_user = useSelector((data)=>data.id)

  useEffect(() => {
    axios
      .get("http://localhost:3019/api/post")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, [i]);

  
  function toggleLike(id) {
    axios.patch(`http://localhost:3019/api/post/modify/${id}/${id_user}`)
      .then((res) => {
        const updatedPost = res.data;
  
        setPosts((prevPosts) => 
          prevPosts.map((post) => 
            post.id === updatedPost.id 
              ? { ...post, likes: updatedPost.likes, liked: updatedPost.liked } 
              : post
          )
        );
  
        setLikedPosts((prevLikes) => 
          prevLikes.includes(id) 
            ? prevLikes.filter((postId) => postId !== id) 
            : [...prevLikes, id]
        );
      })
      .catch((err) => {
        if (err.status=400) {
          alert("user need to be connected first")
        }
        else{
          console.error("Error updating like:", err);
          alert("An error occurred while liking the post.");
        }
       
      });
      seti(i+1)
  }
  

  const toggleSave = (id, post) => {
    const isSaved = savedPosts.includes(id);
  
    if (isSaved) {
      setSavedPosts((prevPosts) => prevPosts.filter((postId) => postId !== id));
    } else {
      setSavedPosts((prevPosts) => [...prevPosts, id]);
      dispatch(save(post)); 
    }
      seti(i+1)
  };
  

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {posts.map((post, i) => (
          <div className="col-md-4" key={i}>
            <div className="card shadow-sm border-light rounded">
              <img
                className="card-img-top"
                src={post.img}
                alt="Card image cap"
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <p className="card-text">{post.description}</p>
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <p className="m-0">{post.likes} likes</p>
                  <div className="d-flex">
                    <button onClick={() => toggleLike(post.id)} className={`btn d-flex align-items-center me-2 ${
                        likedPosts.includes(post.id) ? "btn-danger text-white" : "btn-outline-danger"}`}
                    >
                      <i
                        className={`fas fa-heart me-2 ${likedPosts.includes(post.id) ? "text-white" : ""}`} ></i>
                      {likedPosts.includes(post.id) ? "Liked" : "Like"}
                    </button>
                    <button onClick={() => toggleSave(post.id, post)}className={`btn d-flex align-items-center ${
                        savedPosts.includes(post.id)? "btn-primary text-white": "btn-outline-primary"}`}
                    >
                      <i
                        className={`fas fa-bookmark me-2 ${savedPosts.includes(post.id) ? "text-white" : ""}`}></i>
                      {savedPosts.includes(post.id) ? "Saved" : "Save"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
