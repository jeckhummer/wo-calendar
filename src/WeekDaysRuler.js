import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class WeekDaysRuler extends Component {
	render() {
		return (
			<Table celled>
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
			</Table>
		);
	}
}

export default WeekDaysRuler;
