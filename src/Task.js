export class Task{
	constructor(taskData) {
		this.id = taskData.WOTNumber; 
		this.description = taskData.description; 
		this.WONumber = taskData.WONumber; 
		this.start = new Date(taskData.start);
		this.end = new Date(taskData.end);
		this.teamID = taskData.teamID; 
		this.teamMember = taskData.teamMember; 
		this.phase = taskData.phase; 
		this.status = taskData.status;
	}
}