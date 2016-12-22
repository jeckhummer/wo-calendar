import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import moment from 'moment';

class Nav extends Component {
	render() {
		let unit = this.props.mode === 'agenda' ? 'day' : this.props.mode + 's';
		let navigatePrev = () => this.props.onNavigate(-1, unit);
		let navigateNext = () => this.props.onNavigate(1, unit);

		let zoomDisabled = this.props.mode === 'agenda' || this.props.mode === 'month';

		let label;
		let date = moment(this.props.date);

		switch (this.props.mode) {
			default:
			case 'day':
				label = (
					<span> 
						{date.format('D MMM YYYY')} 
					</span>
				);
				break;
			case 'week':
				label = (
					<span>
						Week {date.week()}
						&nbsp; 
						({date.startOf('isoWeek').format('D MMM')} 
						&nbsp; - &nbsp; 
						{date.endOf('isoWeek').format('D MMM')}) 
					</span>
				);
				break;
			case 'month':
				label = (
					<span>
						{date.format('MMMM YYYY')}
					</span>
				);
				break;
			case 'agenda':
				label = <span>agenda</span>;
				break;
		}

		return (
			<Menu icon borderless>
				<Menu.Menu>
					<Menu.Item onClick={() => this.props.onZoomChange(0.5)}>
						<Icon fitted disabled={zoomDisabled} name="zoom"/>
					</Menu.Item>

					<Menu.Item onClick={() => this.props.onZoomChange(-0.5)}>
						<Icon fitted disabled={zoomDisabled || this.props.zoom === 1} name="zoom out"/>
					</Menu.Item>

					<Menu.Item onClick={this.props.onTodayClick}>
						today
					</Menu.Item>
				</Menu.Menu>

				<Menu.Menu position='right'>
					<Menu.Item onClick={navigatePrev}>
						<Icon
                            disabled={this.props.mode === 'agenda'}
                            fitted
                            name="left arrow"/>
					</Menu.Item>

					<Menu.Item className='nowrap'>
						{label}
					</Menu.Item>

					<Menu.Item onClick={navigateNext}>
                        <Icon
                            disabled={this.props.mode === 'agenda'}
                            fitted
                            name="right arrow"/>
					</Menu.Item>
				</Menu.Menu>

				<Menu.Menu position='right'>
					<Menu.Item
						active={this.props.mode === 'day'}
						onClick={() => this.props.onModeChange('day')}>
						day
					</Menu.Item>

					<Menu.Item
						active={this.props.mode === 'week'}
						onClick={() => this.props.onModeChange('week')}>
						week
					</Menu.Item>

					<Menu.Item
						active={this.props.mode === 'month'}
						onClick={() => this.props.onModeChange('month')}>
						month
					</Menu.Item>

					<Menu.Item
						active={this.props.mode === 'agenda'}
						onClick={() => this.props.onModeChange('agenda')}>
						agenda
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		);
	}
}

export default Nav;
