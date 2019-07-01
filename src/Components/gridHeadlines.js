import React from 'react';
import TimeAgo from 'timeago-react';
import { Modal } from 'react-bootstrap';

const Grid = (props) => {
    return(
  <div className={props.className}>

    <article className={props.className}>
      <div className="title"><span onClick={props.click}>{props.titleA}</span></div>
        <div className="content-overlay"></div>
          <img className="content-image gridImg" src={props.storyA} onClick={props.click} alt="News-Story-Left" />
            <TimeAgo className="timeStamp timeStampR" datetime={props.time} />
              <div>
                <div className="content-details fadeIn-bottom fadeIn-right">
                  <button className="btn btn-primary" onClick={props.click}>Read Snippet</button>
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
        </article>
      </div>
    );
}

export default Grid;