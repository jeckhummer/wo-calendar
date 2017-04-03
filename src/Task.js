export class Task{
	constructor(taskData) {
		this.id = taskData.WOTNumber; 
		this.WODisplayNumber = taskData.WODisplayNumber;
		this.WOTDisplayNumber = taskData.WOTDisplayNumber;
		this.description = taskData.description;
		this.WONumber = taskData.WONumber; 
		this.start = new Date(taskData.start);
		this.end = new Date(taskData.end);
		this.teamID = taskData.teamID;

		try {
		    const str = taskData.teamMember.trim();
            this.teamMember = str.length > 0 ? str : null;
        } catch(e) {
            this.teamMember = null;
        }

		this.phase = taskData.phase; 
		this.status = taskData.status;
	}
}