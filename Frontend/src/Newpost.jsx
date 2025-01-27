import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Newpost() {
    const [img, setimg] = useState("");
    const [des, setdes] = useState('');
    const nav = useNavigate();

    function add(e) {
        e.preventDefault();
        const today = new Date();
        const post = { img: img, description: des, date: today };
        
        axios.post("http://localhost:3019/api/add/post", post)
            .then((res) => nav('/p'))
            .catch((err) => console.log(err));
    }

    return (
        <div className="container mt-5">
            <h2>Create a New Post</h2>
            <form onSubmit={add}>
                <div className="mb-3">
                    <label htmlFor="img" className="form-label">Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        id="img"
                        placeholder="Enter image URL"
                        onChange={(e) => setimg(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder="Enter description"
                        onChange={(e) => setdes(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Post</button>
            </form>
        </div>
    );
}
