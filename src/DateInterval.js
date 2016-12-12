import moment from 'moment';

class DateInterval{
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}

	getLength(accuracy = 'milliseconds'){
		return moment(this.end).diff(moment(this.start), accuracy);
	}

	getPositionIn(outterInterval, accuracy){
		// console.log('this', this, 'outter', outterInterval);
		// console.log(this.getLength(accuracy), outterInterval.getLength(accuracy));
		return {
			offset: new DateInterval(outterInterval.start, this.start).getLength(accuracy) / 
				outterInterval.getLength(accuracy) 
				* 100 + "%",
			value: this.getLength(accuracy) / outterInterval.getLength(accuracy) * 100 + "%"
		};
	}
}

export default DateInterval;