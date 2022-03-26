import React from 'react';
import Blogs from './blogs'

const Home = () => {
return <div id="templatemo_wrapper">
<div id="templatemo_menu">
  <ul>
    <li><a href="index.html" className="current">Blog</a></li>
    <li><a href="portfolio.html">Portfolio</a></li>
    <li><a href="about.html">About Us</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>	
</div> {/* end of templatemo_menu */}
<div id="templatemo_left_column">
  <div id="templatemo_header">
    <div id="site_title">
      <h1><a href="http://www.templatemo.com" target="_parent">Clean <strong>Blog</strong><span>Free HTML-CSS Template</span></a></h1>
    </div>{/* end of site_title */}
  </div> {/* end of header */}  
  <div id="templatemo_sidebar">
    <div id="templatemo_rss">
      <a href="#">SUBSCRIBE NOW <br /><span>to our rss feed</span></a>
    </div>
    <h4>Categories</h4>
    <ul className="templatemo_list">
      <li><a href="http://www.templatemo.com/page/1" target="_parent">Curabitur sed</a></li>
      <li><a href="http://www.templatemo.com/page/2" target="_parent">Praesent adipiscing</a></li>
      <li><a href="http://www.templatemo.com/page/3" target="_parent">Duis sed justo</a></li>
      <li><a href="http://www.templatemo.com/page/4" target="_parent">Mauris vulputate</a></li>
      <li><a href="#">Nam auctor</a></li>
      <li><a href="#">Aliquam quam</a></li>
    </ul>
    <div className="cleaner_h40" />
    <h4>Friends</h4>
    <ul className="templatemo_list">
      <li><a href="http://www.templatemo.com" target="_parent">Free CSS Templates</a></li>
      <li><a href="http://www.flashmo.com" target="_parent">Flash Templates</a></li>
      <li><a href="http://www.flashmo.com/store" target="_parent">Premium Themes</a></li>
      <li><a href="http://www.webdesignmo.com/blog" target="_parent">Web Design Blog</a></li>
      <li><a href="http://www.koflash.com" target="_parent">Flash Web Gallery</a></li>
      <li><a href="#">Curabitur sed lacinia</a></li>
      <li><a href="#">Vestibulum laoreet tincidunt</a></li>
      <li><a href="#">Nullam nec mi enim</a></li>
      <li><a href="#">Aliquam quam nulla</a></li>
      <li><a href="#">Curabitur non felis massa</a></li>
    </ul>
  </div> {/* end of templatemo_sidebar */} 
</div> 
{/* end of templatemo_left_column */}
<Blogs/>
{/* end of templatemo_main */}
<div className="cleaner_h20" />
<div id="templatemo_footer">
  Copyright © 2048 <a href="#">Your Company Name</a> | 
  <a href="http://www.iwebsitetemplate.com" target="_parent">Website Templates</a> by <a href="http://www.templatemo.com" target="_parent">Free CSS Templates</a>
</div>
<div className="cleaner" />
</div>


}

export default Home;