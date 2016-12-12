import React, { Component } from 'react';
import { Table, Form, Checkbox, Icon, Loader } from 'semantic-ui-react';

class TeamFilter extends Component {
	render() {
		const fields = this.props.teams
			.map(x => (
				<Form.Field key={x.name}>
					<Checkbox
						checked={this.props.teamsFilter.isActive(x.id)}
						onChange={() => this.props.onChange(x.id)}
					/>
					<span style={{position: "relative", top: "-2px", left: "5px" }}>
						&nbsp; &nbsp;
						<a className={"ui empty circular label " + x.color}></a>
						&nbsp; &nbsp;
						{x.name}
					</span>
				</Form.Field>
			));

		let cell;

		if(this.props.loading){
			cell = (
				<Table.Cell textAlign='center'>
					<Loader active inline> 
						Loading teams... 
					</Loader>
				</Table.Cell>
			); 
		} else {
			cell = (
				<Table.Cell>
					<Form>
						{fields}
					</Form>
				</Table.Cell>
			); 
		}

		return (
			<div>
				<Table> 
					<Table.Header> 
						<Table.Row>
							<Table.HeaderCell>
								<Icon name='filter'/>
								Team filter
							</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						<Table.Row>
							{cell}
						</Table.Row>
					</Table.Body>
				</Table>
			</div>
		);
	}
}

export default TeamFilter;
