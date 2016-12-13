export class Task{
	constructor(taskData) {
		this.id = taskData.WOTNumber; 
		this.description = taskData.description; 
		this.WONumber = taskData.WONumber; 
		this.start = taskData.start; 
		this.end = taskData.end;
		this.teamID = taskData.teamID; 
		this.teamMember = taskData.teamMember; 
		this.phase = taskData.phase; 
		this.status = taskData.status; 
		this.conflict = taskData.conflict; 
	}
}