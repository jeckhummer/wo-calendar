import moment from 'moment';
import _ from 'lodash';
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import HourRuler from './HourRuler';
import WeekDaysRuler from './WeekDaysRuler';
import DateInterval from './DateInterval';
import DayCanvas from './DayCanvas';

class WeekSchedule extends Component {
	componentDidMount() {
		this.wrapper.addEventListener('scroll', this.scrollHandler.bind(this));
		this.scrollWrapper();
	}

	componentWillUnmount() {
		this.wrapper.removeEventListener('scroll', this.scrollHandler.bind(this));
	}

	scrollWrapper(){
		this.wrapper.scrollTop = this.zoomer.offsetHeight * 8/24;
	}

	scrollHandler(x) {
		this.topRullerMover.style.left = -1 * x.target.scrollLeft + 'px';
		this.leftRullerMover.style.top = -1 * x.target.scrollTop + 'px';
	}

	render() {
		const rows = _.range(24)
			.map(h =>
				<Table.Row key={h}>
					{
						_.range(7)
						.map(d =>
							<Table.Cell key={d} style={{height: this.props.cellHeight + "px"}}></Table.Cell>
						)
					}
				</Table.Row>
			);

		const weekInterval = new DateInterval(
			moment(this.props.date).startOf('isoWeek').startOf('day').toDate(), 
			moment(this.props.date).endOf('isoWeek').endOf('day').toDate()
		);

		const columns = _.range(7)
			.map(
				x => (
					<div 
						className='day-canvas-wrapper'
						key={x}>
						<DayCanvas
							conflictsMap={this.props.conflictsMap}
							tasks={this.props.tasks}
							taskParts={this.props.taskParts}
							date={moment(weekInterval.start).add(x, 'days').toDate()}
							teams={this.props.teams}
						/>
					</div>
				)
			);

		return (
			<div className="dynamic schedule">
				<div className="left-area">
					<div
						className="left-ruller-wrapper"
						style={{ maxHeight: this.props.rowsVisible * this.props.cellHeight + "px", marginTop: "29.5px" }}>
						<div className="left-ruller-mover" ref={x => this.leftRullerMover = x}>
							<HourRuler cellHeight={this.props.cellHeight}/>
						</div>
					</div>
				</div>
				<div className="right-area">
					<div className="top-ruller-wrapper">
						<div
							className="top-ruller-mover"
							ref={x => this.topRullerMover = x}
							style={{ width: 100 * this.props.zoom + "%" }}>
							<WeekDaysRuler />
						</div>
					</div>
					<div
						className="schedule-grid-wrapper"
						style={{ maxHeight: this.props.rowsVisible * this.props.cellHeight + "px" }}
						ref={(x) => this.wrapper = x}>
						<div
							className="schedule-grid-zoomer"
							style={{ width: 100 * this.props.zoom + "%" }}
							ref={(x) => this.zoomer = x}>

							<Table celled className="schedule-grid" columns={7} style={{ margin: "0px" }}>
								<Table.Body>
									{rows}
								</Table.Body>
							</Table>

							<div className='tasks-wrapper'>
								{columns}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default WeekSchedule;