import React from 'react';
import './Post.css';

import Avatar from '@material-ui/core/Avatar';

function Post({username,caption,imageUrl}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                className="post__avatar"
                alt=""
                src="/static/images/avatar/1.jpg"
                
                />
                <h3 className="post__username">{username}</h3>
            </div>
            
             
            
            {/*avatar */}
            <img  className="post__image" src={imageUrl}/>
            {/* image */}
            <h4 className="post__text"><strong>{username}</strong> {caption}d</h4>
            {/* username + caption */}
        </div>
    )
}

export default Post
