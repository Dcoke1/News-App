import React from 'react';
import TimeAgo from 'timeago-react';
import { Modal } from 'react-bootstrap';

const SideScroll = (props) => {
	return(			
<div className="carousel-wrapper">
    <div className="carousel" data-flickity>
        <div className="carousel-cell">
	       <p>{props.titleB}</p>
	       <img className="scrollImg" src={props.image} alt="News-Story-SideScroll"/>
     		<div className="stampContent">
		      <TimeAgo className="timeStampS" datetime={props.time} />
			  <button className="btnScroll" onClick={props.click}>Read Snippet</button>
				<Modal 
				show={props.A} 
				onHide={props.B} 
				dialogClassName="modal-90w"aria-labelledby="example-custom-modal-styling-title">
					<Modal.Header closeButton>
						<Modal.Title id="example-custom-modal-styling-title" className="snipHeader">{props.header}</Modal.Title>
					</Modal.Header>
					<Modal.Body className="snippet">{props.snippet}<hr /><a className="url" href={props.link} target="_blank" rel="noopener noreferrer">View Full Story</a></Modal.Body>
				</Modal>
	 		</div>
    	</div>
	</div>
</div>
			
	)
}

export default SideScroll;