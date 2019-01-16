import React from 'react';
import Nav from '../../components/Nav';
import Jumbotron from '../../components/Jumbotron';
import Searchbar from '../../components/Searchbar';
import Card from '../../components/Card';

const books = ["Book 1", "Book 2", "Book 3", "Book 4"]

class SearchPage extends React.Component {
    state = {}
    render() {
        return(
            <div> 
                <Nav/>
                <Jumbotron/>
                <Searchbar/>
                {
                    books.map(ele => {
                        return <Card name={ele}/>
                    })
                }
            
            </div>)
    }
}




export default SearchPage;