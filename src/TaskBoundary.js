export class TaskBoundary{
	constructor(data){
		this.type = data.type;
		this.taskPart = data.taskPart;
	}

	getDate(){
		return this.taskPart[this.type];
	}
}