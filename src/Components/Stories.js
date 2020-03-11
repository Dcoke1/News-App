import React from "react";
import TimeAgo from "timeago-react";
import { Modal } from "react-bootstrap";
import Img from 'react-image'

const Stories = props => {
  return (
        <article className="article">
          <Img src={[props.image]} 
               onClick={props.click}
               alt={props.title}
               />

          <div className="article-info">
            <i>{props.source}</i>
            <p>{props.title}</p>
            <TimeAgo className="time-stamp" datetime={props.time} />
          </div>

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
                    {props.title}
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
        </article>   
  );
};

export default Stories;