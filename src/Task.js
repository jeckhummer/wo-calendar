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

	/*
	{
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse libero alias, ab placeat vel quibusdam facere obcaecati ex, saepe fugiat.',
		WOTNumber: '96',
		WONumber: '1084',
		start: new Date('17 Nov 2016 13:00:00'),
		end: new Date('17 Nov 2016 16:30:00'),
		teamID: '2',
		teamMember: 'Teymur Mustafayev',
		phase: 'Execution',
		status: 'Execution',
		conflict: { tasks: [ 95, 94 ] }
	},*/
}