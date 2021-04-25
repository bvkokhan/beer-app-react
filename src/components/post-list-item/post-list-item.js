import React, {Component} from 'react';

import './post-list-item.css'

export default class PostListItem extends Component {

    render() {
        const {name,image_url, tagline, id, abv, ibu} = this.props;
        
        return (
            <div key={id} className= "card">
            <div className="alignRight">
            </div>
                <img className="img" src={image_url} alt="beer"/>
                <h4>{name}</h4>
                <h5>{tagline}</h5>
                <h5> Алкоголь: {abv}</h5>
                <h5> Горькость: {ibu}</h5>
        </div>
        )
        }
}
