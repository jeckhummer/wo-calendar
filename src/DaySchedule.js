import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import HourRuler from './HourRuler';
import _ from 'lodash'; 
import DayCanvas from './DayCanvas';

class DaySchedule extends Component {
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
		this.mover.style.top = -1 * x.target.scrollTop + 'px';
	}

	render() {
		const rows = _.range(24).map(h => 
			<Table.Row key={h}>
				<Table.Cell style={{height: this.props.cellHeight + "px"}}>
				</Table.Cell>
			</Table.Row>
		);

		return (
			<div className="dynamic schedule">
				<div className="left-area">
					<div 
						className="left-ruller-wrapper" 
						style={{ maxHeight: this.props.rowsVisible * this.props.cellHeight + "px" }}>
						<div className="left-ruller-mover" ref={x => this.mover = x}>
							<HourRuler cellHeight={this.props.cellHeight}/>
						</div>
					</div>
				</div>
				<div className="right-area">
					<div 
						className="schedule-grid-wrapper"
						style={{ maxHeight: this.props.rowsVisible * this.props.cellHeight + "px" }} 
						ref={(x) => this.wrapper = x}>
						<div 
							className="schedule-grid-zoomer" 
							style={{ width: 100 * this.props.zoom + "%" }}
							ref={(x) => this.zoomer = x}>
							<Table celled className="schedule-grid" columns={7} >
								<Table.Body>
									{rows}
								</Table.Body>
							</Table>

							<div className='tasks-wrapper'>
								<DayCanvas
									teamsFilter={this.props.teamsFilter}
                                    taskSelectionCallback={this.props.taskSelectionCallback}
									conflictsMap={this.props.conflictsMap}
									tasks={this.props.tasks}
									date={this.props.date}
									teams={this.props.teams}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default DaySchedule;