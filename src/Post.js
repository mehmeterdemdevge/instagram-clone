import React from 'react';
import './Post.css';

import Avatar from '@material-ui/core/Avatar';

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                className="post__avatar"
                alt=""
                src="/static/images/avatar/1.jpg"
                
                />
                <h3 className="post__username">username</h3>
            </div>
            
             
            
            {/*avatar */}
            <img  className="post__image" src="https://instagram.fsaw2-2.fna.fbcdn.net/v/t51.2885-15/e35/121275679_346365543302739_7631707828051401357_n.jpg?_nc_ht=instagram.fsaw2-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=KFRG591-Ab0AX_M6ivf&_nc_tp=18&oh=ff2fc86e7839928785e5db8a4b60bce6&oe=5FAFEF24"/>
            {/* image */}
            <h4 className="post__text"><strong>Erdem</strong> Erdem recently shared</h4>
            {/* username + caption */}
        </div>
    )
}

export default Post
