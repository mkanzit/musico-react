import React , {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Event from './event';
import {clickRsvp, getAllEvents} from '../actions/index';

class EventList extends Component {

	componentDidMount() {
		console.log("componentDidMount:", this.props)
		this.props.getAllEvents()
	}

	createEventList() {
		console.log("createEventList:", this.props.events)
		return this.props.events.map(event => {
			return (
				<div className="col-4" key={event.id}>
					<Event name={event.name}
								 tag={event.tag}
								 description={event.description}
								 price={event.price}
								 location={event.location}
								 rsvpClick={() => this.props.clickRsvp(event)} />
				</div>
			)
		})
	}

	render() {
		return(
			<div className='event-list'>
				{this.createEventList()}					 						 
			</div>			
		)
	}
}

function mapStateToProps(state) {
	console.log("mapStateToProps:", state)
	return {
		events: state.events,
		eventsDatabase: state.eventsDatabase.events,
		userAPI: state.userAPI.data
	}
}

// Call a function
function matchDispatchToProps(dispatch) {
	return bindActionCreators({clickRsvp: clickRsvp, getAllEvents: getAllEvents}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(EventList);