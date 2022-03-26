import React,{useState,useEffect} from 'react';
import axios from "axios";

const Blogs=()=>{

    const [state,setState]= useState({
        blogs:[]
    });

    useEffect(async ()=>{
       const result =  await axios.get('https://623ef8110adaf66ad73e3d34.mockapi.io/blogs');
        setState({...state,blogs: result.data});
    },[])

    return <div id="templatemo_right_column">
    <div id="featured_project">
      <div id="slider">
        <ul id="sliderContent">
          <li className="sliderImage">
            <a href><img src="images/slider/1.jpg" alt={1} /></a>
            <span className="top"><strong>Project 1</strong><br />Suspendisse turpis arcu, dignissim ac laoreet a, condimentum in massa.</span>
          </li>
          <li className="sliderImage">
            <a href><img src="images/slider/2.jpg" alt={2} /></a>
            <span className="bottom"><strong>Project 2</strong><br />uisque eget elit quis augue pharetra feugiat.</span>
          </li>
          <li className="sliderImage">
            <img src="images/slider/3.jpg" alt={3} />
            <span className="left"><strong>Project 3</strong><br />Sed et quam vitae ipsum vulputate varius vitae semper nunc.</span>
          </li>
          <li className="sliderImage">
            <img src="images/slider/4.jpg" alt={4} />
            <span className="right"><strong>Project 4</strong><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </li>
          <li className="clear sliderImage" />
        </ul>
      </div>
    </div>
    <div id="templatemo_main">
        {state.blogs.map((blog)=>{
            return  <div className="post_section">
            <span className="comment"><a href="blog_post.html">{blog.impressions}</a></span>
            <h2><a href="blog_post.html">{blog.title}</a></h2>
            {blog.createdAt} | <strong>Author:</strong> {blog.author} | <strong>Category:</strong> <a href="#">{blog.category}</a>
            <img src="images/templatemo_image_01.jpg" alt="image 1" />
            <p>Clean Blog is a <a href="http://www.templatemo.com" target="_parent">Free HTML-CSS Template</a> provided by <a href="#">templatemo.com</a> for everyone. Validate <a href="http://validator.w3.org/check?uri=referer" rel="nofollow">XHTML</a> &amp; <a href="http://jigsaw.w3.org/css-validator/check/referer" rel="nofollow">CSS</a>. Donec enim enim, imperdiet quis, mollis a, elementum a, diam. Lorem ipsum  dolor sit amet, consectetur adipiscing elit. Nulla et nunc commodo ante ornare imperdiet.</p>
            <a href="blog_post.html">Continue reading...</a>
          </div>
          
        })}
    </div>
    <div className="cleaner" />
  </div> 
   
}

export default Blogs;
