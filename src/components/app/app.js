import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';



import './app.css';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data : [],
            term: '',
            filter: 'all'
        };
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.maxId = 4;
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.name.indexOf(term) > -1
        });
    }

    filterPost(items, filter) {
        switch(filter){
            case 'abv' : return items.filter(item => item.abv > 8)
            case 'ibu' : return items.filter(item => item.ibu > 50)
            case 'all' : return items
            
            default : return items
        }
        // if (filter === 'abv') {
        //     return items.filter(item => item.abv > 8)
        // } else {
        //     return items
        // }
    }

    onUpdateSearch(term) {
        this.setState({term})
    }
    
    onFilterSelect(filter){
        this.setState({filter})
    }

    componentDidMount() {
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              data: result
            });
            console.log(this.state.data )
          },
          (error) => {
            this.setstate({
              isLoaded: true,
              error
            })
          }
        )
      }
    

    render() {
        const {data, term, filter} = this.state;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                posts={visiblePosts}
                />
            </div>
         )
    }
}


