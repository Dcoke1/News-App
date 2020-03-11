import React from 'react';
import LazyLoad from "react-lazyload";


const Container = (props) => {
	return (
		<LazyLoad height={300} offset={100}>
	        <div id={props.id} className={props.backGround}>
	          <div className="heading">
	            <h1 className="subHeader">
	              <strong className={props.textColor}>{props.categoryTop}</strong>
	            </h1>
	          </div>
	          	{props.storyHolder}
	          	<a href={props.href}>
	            	<span>More <strong className={props.textColor}>{props.categoryBtm} News</strong></span>
	            </a>
	        </div>
	    </LazyLoad> 
	)
}

export default Container;