import React,{useState,useEffect} from 'react';

import {db} from './firebase';

import './App.css';
import Post from './Post';

function App() {
  const [posts,setPosts]=useState([
    
    
  ]);


  //UseEffect hooks called

  useEffect(()=>{
    //Runs the code here
    db.collection('posts').onSnapshot(snapshot=>{

      setPosts(snapshot.docs.map(doc=>({
        id:doc.id,
        post:doc.data()
      })));


    })


  },[])

  return (
    <div className="App">
      
      <div className="app__header">
        <img 
        className="app__headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt=""
        
        />

      </div>
      <h1>Erdem is building an instagram clone</h1>
        {/* Header*/}
        {posts.map(({post,id})=>(

          <Post  
          key={id}
          username={post.username} 
          imageUrl={post.imageUrl}
          caption={post.caption}
          />
        )
          
        )}
    </div>
  );
}

export default App;
