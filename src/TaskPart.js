export class TaskPart{
	constructor(data){
		this.taskID = data.taskID;
		this.partNumber = data.partNumber;
		this.start = data.start;
		this.end = data.end;
	}
}