import React, { Component } from 'react';
import DateInterval from './DateInterval';
import moment from 'moment';
import TaskTile from './TaskTile';
import _ from 'lodash';
import {calculateTasksParts} from "./selectors";

class DayCanvas extends Component{
	render(){
		const dayInterval = new DateInterval(
			moment(this.props.date).startOf('day').toDate(), 
			moment(this.props.date).endOf('day').toDate()
		);

		const tasks = this.props.tasks
			.filter(x => x.start >= dayInterval.start && x.end <= dayInterval.end);

        const taskParts = calculateTasksParts({tasks, teamsFilter: this.props.teamsFilter});

		const tiles = taskParts
			.map((x, i) => {
				const positionsStyle = this.getTaskPartPosition(x, dayInterval);
				return (
					<div 
						key={i}
						style={{
							position: "absolute",
							...positionsStyle
						}}>

						<TaskTile
							onClick={() => this.props.taskSelectionCallback(x.task.id)}
							data={x.task}
							hasConflict={x.hasConflicts === true}
							teams={this.props.teams}
						/>
					</div>
				);
			});
		
		return (
			<div className='day-canvas'>
				{tiles}
			</div>
		);
	}

	getTaskPartPosition(taskPart, dayInterval){
		const taskInterval = new DateInterval(taskPart.start, taskPart.end);
		const positionInDay = taskInterval.getPositionIn(dayInterval);

		let order = 0;

		if(taskPart.intersections.length !== 0){
			const orders = taskPart.intersections
				.map(x => x.order);

			let maxOrder = Math.max(...orders);
			if(isNaN(maxOrder)){
				maxOrder = orders[0];
			}
			
			order = Math.min(
				..._.range(maxOrder + 2)
				.filter(x => orders.indexOf(x) === -1)
			);
		}

		taskPart.order = order;
		const growMultiplier = 1.4;
		const widthPercentage = 100 * Math.min(1, growMultiplier / (order + 1)); 

		return {
			left: 100 - widthPercentage + "%",
			width: widthPercentage + "%",
			top: `calc(${positionInDay.offset}`,
			height: `calc(${positionInDay.value}`,
			zIndex: order
		};
	}
}

export default DayCanvas;