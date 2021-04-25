import React from 'react';

import PostListItem from '../post-list-item';


const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        ;
        return (
            <div key={item.id} className='col'>
                <PostListItem 
                    name = {item.name}
                    image_url = {item.image_url}
                    tagline = {item.tagline}
                    id = {item.id}
                    abv = {item.abv}
                    ibu = {item.ibu}
                    />
            </div>
        )
    });

    return (
        
        <div className="container">
            <div class="row align-items-start">
                {elements}
            </div>
        </div>
    )
}

export default PostList;