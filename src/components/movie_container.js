import React, {Component} from 'react';
import axios from 'axios';
import Movies from './movies';

class MovieContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
    }
    componentWillMount(){
       const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
       axios.get(url).then( (response) => {
        // console.log('Response: ', response);
            this.setState({
                movies: response.data.feed.entry
            })
       } )
    }
    
    render(){
        // console.log('State is: ', this.state);
        const movieList = this.state.movies.map((movieInfo, index)=>{
            return <Movies info={movieInfo} key={index}/>
        });
        return(
            <div>
                {movieList}
            </div>
        )
    }
}

export default MovieContainer;