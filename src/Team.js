export class Team{
	constructor(teamData) {
		/* team data example: { id: '1', name: 'Red Team', active: true, color: 'red' } */
		this.id = teamData.id;
		this.name = teamData.name; 
		this.color = teamData.color;
	}
}