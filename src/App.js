import React from 'react';

import './App.css';
import { v4 as uuidv4} from "uuid";
import ListMovies from "./Component/ListMovies";
import AddModal from "./Component/AddModal";

class App extends React.Component {
state = {
  movies : [
    {
      id: uuidv4(),
      name: "Shawshank Redemption",
      image: "https://www.tampasdowntown.com/wp-content/uploads/2019/08/Shawshank.Redemption_Poster.png",
      rating: 4 ,
      year:"1994",
    },
    {
      id: uuidv4(),
      name: "Green Mile",
      image: "https://upload.wikimedia.org/wikipedia/en/e/e2/The_Green_Mile_%28movie_poster%29.jpg",
      rating: 5 ,
      year:"1999",
    },
    {
      id: uuidv4(),
      name: "Forrest Gump",
      image: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
      rating: 3 ,
      year:"1994",
    },
  ],
};
add = (newMovie) => {
  this.setState({
    movies : [...this.state.movies,newMovie],
  })
}


  render(){
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Movie App</h1>
          <ListMovies movies={this.state.movies}/>
          <AddModal add={this.add}/>
          
           

           
        </header>
      </div>
    );


  }


}

export default App;
