import React from "react";
import ListMovie from "./ListMovie";
import Rate from "./Rate";
import Loader from './loader'
class Movie extends React.Component {
  
  render() {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 movie">
        <article className="card">
          <header className="title-header">
            <h3>{this.props.movie.name}</h3>
            <Rate nb={this.props.movie.rate} handleRate={()=>{}} />
          </header>
          <div className="card-block">
            <div className="img-card">
              <img
                src={this.props.movie.img}
                alt="Movie"
                title="Movie"
                className="w-100"
              />
            </div>
            <a className="btn btn-primary btn-block">
              <i className="fa fa-eye" /> Watch Now
            </a>
          </div>
        </article>
      </div>
    );
  }
}

export default Movie;
