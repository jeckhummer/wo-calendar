import React from 'react';
import { Table } from 'semantic-ui-react';
import CalendarBase from './CalendarBase';
import TaskMonthTile from './TaskMonthTile';

class MonthSchedule extends CalendarBase {
	render() {
		let rowsData = this.getCalendarDaysData(this.props.date);
		let rows = rowsData.map((r, ri) => {
			let columns = r.map((c, ci) =>
				<Table.Cell
					key={ci}
					className="selectable"
					style={{height: this.props.cellHeight + "px"}}
					onClick={() => this.props.onDayClick(c.date, 'day')}
					disabled={c.outOfRange}>
						<TaskMonthTile 
							taskParts={this.props.taskParts}
							date={c.date}
						/>
				</Table.Cell>
			);
			return (
				<Table.Row key={ri} textAlign="center">{columns}</Table.Row>
			);
		});

		return (
			<div>
				<Table celled columns={7} className="month schedule">
					<Table.Header className="narrow">
						<Table.Row textAlign="center">
							<Table.HeaderCell>Monday</Table.HeaderCell>
							<Table.HeaderCell>Tuesday</Table.HeaderCell>
							<Table.HeaderCell>Wednesday</Table.HeaderCell>
							<Table.HeaderCell>Thursday</Table.HeaderCell>
							<Table.HeaderCell>Friday</Table.HeaderCell>
							<Table.HeaderCell>Saturday</Table.HeaderCell>
							<Table.HeaderCell>Sunday</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{rows}
					</Table.Body>
				</Table>
			</div>
		);
	}
}

export default MonthSchedule;
