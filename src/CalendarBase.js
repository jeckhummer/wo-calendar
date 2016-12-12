import { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';

class CalendarBase extends Component{
	getCalendarDaysData(_date){
		let date = moment(_date); 
		
		let firstMonday = moment(date).startOf("month").day("Monday");
		let rows = [];
		let today = moment().startOf("day");
		let tempDate = moment(firstMonday);

		while (tempDate.isSame(date, 'month') || tempDate.isSame(firstMonday)) {
			let columns = [];
			for (let j = 0; j < 7; j++) {
				let data = {
					date: tempDate.toDate(),
					selected: tempDate.isSame(date, 'day'),
					current: tempDate.isSame(today, 'day'),
					outOfRange: !tempDate.isSame(date, 'month')
				};
				columns.push(data);
				tempDate = tempDate.add(1, 'day');
			}
			rows.push(columns);
		}

		return rows;
	}

	getCalendarMonthsData(_date){
		let date = moment(_date);

		let year = date.year();
		let selectedMonth = date.month();
		let selectedYear = date.year();

		return _.range(12)
		.map(i => (
			{
				date: new Date(year, i, 1), 
				selected: i === selectedMonth && year === selectedYear,
				current: i === moment().month() && year === moment().year()
			}
		));
	}

	getCalendarYearsData(_date){
		let date = moment(_date);

		let selectedYear = date.year();
		let currentYear = moment().year();

		return _.range(42)
		.map(i => (
			{
				date: new Date(1990 + i, 0, 1), 
				selected: 1990 + i === selectedYear,
				current: 1990 + i === currentYear
			}
		));
	}
}

export default CalendarBase;