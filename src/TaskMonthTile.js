import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';

class TaskMonthTile extends Component {
	render() {
		const date = moment(this.props.date);
		const taskParts = this.props.taskParts
			.filter(x => x.start >= date.startOf('day') && x.end <= date.endOf('day'));
		const stats = _.countBy(
			taskParts
				.map(x => x.task.status)
				.map(x => x.toLowerCase())
				.map(x => x.replace(/\s/g, '-')),
			_.identity
		);

		const labels = _.concat(
			...Object.keys(stats)
				.sort()
				.map(status =>
					<div key={status} className={'ui circular  label status ' + status + '-status'} > {stats[status]} </div>
				)
		);

		const conflictLabel = taskParts.filter(x => x.hasConflicts === true).length > 0
		? (
			<span className="conflict-sign">
				<i className="red warning circle icon"></i>
			</span>
		)
		: null;

		return (
			<div className="task-month-tile">
				<span className="day-label">
					{date.format('DD')}
				</span>
				{labels}
				{conflictLabel}
			</div>
		);
	}
}

export default TaskMonthTile;