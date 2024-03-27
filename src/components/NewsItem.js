import React from "react";

const NewsItem = (props)=>  {
    return (
      <div>
        <div
          className="card text-cente my-2 "
          style={{height : '500px'}}
        >
          <img
            src={props.imgUrl}
            className="card-img-top"
            style={{ height: "220px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}......</h5>
            <p className="card-text">{props.description}......</p>
            <p className="card-text">
              <small className="text-muted" style={{textDecoration: "underline"}}>
                By {!props.author ? "Unknown" : props.author} on {props.date}
              </small>
            </p>
            <div className="d-flex align-items-end">
            <a
              href={props.newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark btn-sm my-0 mt-auto"
            >
              Read More
            </a>
            <span className=" my-1 badge rounded-pill text-success " style={{border : '1px solid green',marginLeft: "auto"}}>
              src : {props.source}
            </span>
            </div>
          </div>
        </div>
      </div>
    );
  
}
export default NewsItem;
