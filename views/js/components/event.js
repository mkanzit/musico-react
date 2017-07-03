import React from 'react';


export default function Event(props) {
  return (
    <div className="content__event">
      <div className="content__event__name">{ props.name }</div>
      <div className="content__event__description">
          Description: { props.description }
      </div>
      <div className="content__event__tag">Tag: { props.tag }</div>
      <div className="content__event__price">Price: { props.price }</div>
      <div className="content__event__location">Location: { props.location }</div>
      <div className="content__event__button">
        <button onClick={ props.eventClick } className="btn__event">{ props.cancel || 'RSVP' }</button>
      </div>
    </div>
  );
}