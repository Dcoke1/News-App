import React from "react";
import TimeAgo from "timeago-react";
import { Modal } from "react-bootstrap";
import LazyLoad from "react-lazyload";

const TopStories = props => {
  return (
    <div className="story">
        <article className="article">
          <img src={props.image} onClick={props.click} />
          <span>{props.source}</span>
          <p>{props.title}</p>
          <TimeAgo className="time-stamp" datetime={props.time} />
        </article>


          <div className="content-details fadeIn-bottom fadeIn-right">
            <button className="btn btn-primary" onClick={props.click}>
              Read Snippet
            </button>
            <Modal
              show={props.open}
              onHide={props.close}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title
                  id="example-custom-modal-styling-title"
                  className="snipHeader"
                >
                  {props.header}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="snippet">
                {props.snippet}
                <hr />
                <a
                  className="url"
                  href={props.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full Story
                </a>
              </Modal.Body>
            </Modal>
          </div>
        </div>
  );
};

export default TopStories;