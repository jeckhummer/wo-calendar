import React, { Component } from 'react';
import _ from 'lodash';
import { Table } from 'semantic-ui-react';

class HourRuler extends Component {
	render() {
		let rows = _.range(24)
		.map(h =>
			<Table.Row textAlign="center" key={h}>
				<Table.Cell style={{ height: this.props.cellHeight }}>
					{h < 10 ? '0' + (h ) : h} 
					<br />
				</Table.Cell>
			</Table.Row>
		);
		return (
			<div>
				<Table celled definition style={{ width: "auto" }}>
					<Table.Body>
						{rows}
					</Table.Body>
				</Table>
			</div>
		);
	}
}

export default HourRuler;