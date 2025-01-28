import { useSelector } from "react-redux";
export default function Saved() {
    const data = useSelector(data=>data.saved_posts)
    return(
       
        <div className="container mt-4">
        <div className="row g-4">
        {console.log(data)}
          {data.map((p,i) => {
           
            
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
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
}