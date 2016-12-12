import React from 'react';
import moment from 'moment';
import _ from 'lodash';
import CalendarBase from './CalendarBase';
import { Table } from 'semantic-ui-react';

class MiniCalendar extends CalendarBase {
	constructor(props, context) {
		super(props, context);
		this.state = { mode: 'day' };
	}

	changeMode(mode) {
		this.setState({ mode });
	}

	renderYearsTable() {
		let rowsData = this.getCalendarYearsData(this.props.selectedDate);
		let rows = _.chunk(rowsData, 3)
			.map((r, ri) =>
				<Table.Row key={ri} textAlign="center">
					{
						r.map((c, ci) =>
							<Table.Cell
								key={ci}
								onClick={() => { this.props.onDateClick(c.date, 'month'); this.changeMode('month'); } }
								active={c.selected}
								negative={c.current}
								className="selectable"
								style={{ cursor: "pointer" }}>
								<a style={{ fontWeight: c.selected ? "bold" : "normal" }}>
									{c.date.getFullYear()}
								</a>
							</Table.Cell>
						)
					}
				</Table.Row>
			);

		return (
			<div className="year-calendar-wrapper">
				<Table celled className="no-vertical-borders">
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell textAlign="center" colSpan={3}>
								{rowsData[0].date.getFullYear()}- {rowsData[rowsData.length - 1].date.getFullYear()}
							</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{rows}
					</Table.Body>
				</Table>
			</div>
		);
	}

	renderMonthsTable() {
		let rowsData = this.getCalendarMonthsData(this.props.selectedDate); 
		let rows = _.chunk(rowsData, 3)
			.map((r, ri) => {
				let columns = r.map((c, ci) => {
					return (
						<Table.Cell
							key={ci}
							onClick={() => { this.props.onDateClick(c.date, 'month'); this.changeMode('day'); } }
							active={c.selected}
							negative={c.current}
							className="selectable"
							style={{ cursor: "pointer" }}>
							<a style={{ fontWeight: c.selected ? "bold" : "normal" }}>
								{moment(c.date).format('MMM')}
							</a>
						</Table.Cell>
					);
				});
				return (
					<Table.Row key={ri} textAlign="center">{columns}</Table.Row>
				);
			});

		return (
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell textAlign="center" colSpan='3'>
							<i className="left arrow link fitted left floated icon" onClick={() => this.props.onNavigate(-1, 'year')}></i>
							<span style={{ cursor: 'pointer' }} onClick={() => this.changeMode('year')}>
								{moment(this.props.selectedDate).format('YYYY')}
							</span>
							<i className="right arrow link fitted right floated icon" onClick={() => this.props.onNavigate(1, 'year')}></i>
						</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{rows}
				</Table.Body>
			</Table>
		);
	}

	renderDaysTable() {
		let rowsData = this.getCalendarDaysData(this.props.selectedDate);
		let rows = rowsData
			.map((r, ri) => {
				let columns = r.map((c, ci) => {
					return (
						<Table.Cell
							key={ci}
							onClick={(e) => this.props.onDateClick(c.date, e.altKey ? 'month' : e.ctrlKey ? 'week' : 'day')}
							active={c.selected}
							negative={c.current}
							className="selectable"
							style={{ cursor: "pointer" }}
							disabled={c.outOfRange}>
							<a style={{ fontWeight: c.selected ? "bold" : "normal" }}>
								{c.date.getDate()}
							</a>
						</Table.Cell>
					);
				});
				return (
					<Table.Row key={ri} textAlign="center">{columns}</Table.Row>
				);
			});

		return (
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell textAlign="center" colSpan='7'>
							<i className="left arrow link fitted left floated icon" onClick={() => this.props.onNavigate(-1, 'months')}></i>
							<span
								style={{ cursor: 'pointer' }}
								onClick={() => this.changeMode('month')}>
								{moment(this.props.selectedDate).format('MMM YYYY')}
							</span>
							<i className="right arrow link fitted right floated icon" onClick={() => this.props.onNavigate(1, 'months')}></i>
						</Table.HeaderCell>
					</Table.Row>

					<Table.Row textAlign="center">
						<Table.HeaderCell> Mo </Table.HeaderCell>
						<Table.HeaderCell> Tu </Table.HeaderCell>
						<Table.HeaderCell> We </Table.HeaderCell>
						<Table.HeaderCell> Th </Table.HeaderCell>
						<Table.HeaderCell> Fr </Table.HeaderCell>
						<Table.HeaderCell> Sa </Table.HeaderCell>
						<Table.HeaderCell> Sn </Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{rows}
				</Table.Body>
			</Table>
		);
	}

	render() {
		let table;

		switch (this.state.mode) {
			default:
			case 'day':
				table = this.renderDaysTable();
				break;
			case 'month':
				table = this.renderMonthsTable();
				break;
			case 'year':
				table = this.renderYearsTable();
				break;
		}

		return table;
	}
}

export default MiniCalendar;