import React from "react";
import Movie from "./Movie";

import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Rate from "./Rate";
import { red } from "@material-ui/core/colors";
import WithLoading from './loader'

var movies = [
  {
    name: "Lucifer",
    img:
      "https://i.skyrock.net/6401/73206401/pics/3290178508_1_3_huQ5ESqz.jpg",
    rate: 5
  },
  {
    name: "The 100",
    img: "http://medleyland.pl/wp-content/uploads/2018/05/the-100-300x250.png",
    rate: 4
  },
  {
    name: "Game Of Thrones",
    img:
      "https://www.comparetv.com.au/wp-content/uploads/2015/04/game-of-thrones-300x250.png",
    rate: 3
  },
  {
    name: "Blacklist",
    img:
      "https://data.whicdn.com/images/288415839/superthumb.jpg?t=1496396934",
    rate: 3
  },
  {
    name: "Shameless",
    img:
      "https://data.whicdn.com/images/101904957/superthumb.jpg?t=1392615839",
    rate: 2
  },
  {
    name: "Prison Break",
    img: "https://assets.televizier.nl/upload/p/tk/Prison-break-201712.jpg",
    rate: 1
  }
];
class ListMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      movielist : [],
      open: false,
      stars: 0,
      img: "",
      name: "",
      rate: ""
    };
  }
  
  componentDidMount = ()=> {
    console.log('componentDidMount')
    setTimeout(()=> {
      
  this.setState({
    movielist : movies
    
  })
} ,2000);
}
componentWillMount = ()=> {
  console.log('componentWillMount')
  }
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }
  handleAjout = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addMovie = () => {
    this.setState({
      movielist: [
        ...this.state.movielist,
        { name: this.state.name, img: this.state.img, rate: this.state.rate }
      ]
    });
  };
  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleRate = rate => {
    this.setState({
      stars: rate
    });
  };


  handleClose = () => {
    this.setState({
      open: false
    });
  };
  render() {
  
    var filteredMovie = this.state.movielist.filter(movie => {
      return (
        movie.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
   
    var film = filteredMovie.map(x => {
      return <Movie movie={x} key={x.id} />;
    })
    return (
      <div>
        <div className="list-container">
          <div>
            <Typography gutterBottom> </Typography>{" "}
            <Button onClick={this.handleOpen}> Add Movie </Button>{" "}
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
            >
              <div className="form-container">
                <form onSubmit={(e)=>{e.preventDefault()}}>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label>Name</label>
                      <input
                        type="Text"
                        required
                        ref="name"
                        id="inputEmail4"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleAjout}
                        name="name"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">Rate</label>
                      <input
                        type="number"
                        required
                        class="form-control"
                        placeholder=" */5"
                        value={this.state.rate}
                        onChange={this.handleAjout}
                        name="rate"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputAddress">Img-link</label>
                    <input
                      type="text"
                      required
                      class="form-control"
                      placeholder="img-Link "
                      value={this.state.img}
                      onChange={this.handleAjout}
                      name="img"
                    />
                  </div>

                  <button onClick={()=> {this.addMovie();this.handleClose()} } >Add New Movie</button>
                </form>
              </div>
            </Modal>
          </div>
          <div>
            <input
              type="text"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
              placeholder="Search"
            />
            <Rate nb={this.state.stars} handleRate={this.handleRate} />
          </div>
        </div>
        <div>
          <div className="movie_container">
            {film};
          </div>
        </div>
      </div>
    );
  }
}
export default WithLoading (ListMovie);
