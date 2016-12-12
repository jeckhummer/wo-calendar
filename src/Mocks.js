const tasks = [
	{
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse libero alias, ab placeat vel quibusdam facere obcaecati ex, saepe fugiat, repellendus qui numquam consequatur, quas quo amet velit aperiam natus.',
		WOTNumber: '90',
		WONumber: '1084',
		start: new Date('15 Nov 2016 11:30:00'),
		end: new Date('16 Nov 2016 11:00:00'),
		teamID: '2',
		teamMember: null,
		phase: 'Execution',
		status: 'Execution',
		conflict: { tasks: [ 95, 94 ] }
	},
	{
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse libero alias, ab placeat vel quibusdam facere obcaecati ex, saepe fugiat.',
		WOTNumber: '89',
		WONumber: '1085',
		start: new Date('15 Nov 2016 08:30:00'),
		end: new Date('15 Nov 2016 11:30:00'),
		teamID: '4',
		teamMember: 'Teymur Ordukhanov',
		phase: 'Execution',
		status: 'Failed',
		conflict: { tasks: [ 95, 94 ] }
	},
	{
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse libero alias, ab placeat vel quibusdam facere obcaecati ex, saepe fugiat.',
		WOTNumber: '91',
		WONumber: '1086',
		start: new Date('16 Nov 2016 08:00:00'),
		end: new Date('16 Nov 2016 12:00:00'),
		teamID: '1',
		teamMember: 'Teymur Ordukhanov',
		phase: 'Execution',
		status: 'Pending',
		conflict: { tasks: [ 95, 94 ] }
	},
	{
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse libero alias, ab placeat vel quibusdam facere obcaecati ex, saepe fugiat.',
		WOTNumber: '92',
		WONumber: '1086',
		start: new Date('16 Nov 2016 09:00:00'),
		end: new Date('16 Nov 2016 14:30:00'),
		teamID: '4',
		teamMember: 'Sattar Seyidov',
		phase: 'Execution',
		status: 'Onhold',
		conflict: { tasks: [ 95, 94 ] }
	},
	{
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse libero alias, ab placeat vel quibusdam facere obcaecati ex, saepe fugiat.',
		WOTNumber: '93',
		WONumber: '1085',
		start: new Date('16 Nov 2016 12:00:00'),
		end: new Date('16 Nov 2016 15:00:00'),
		teamID: '3',
		teamMember: 'Sattar Seyidov',
		phase: 'Execution',
		status: 'Completed',
		conflict: { tasks: [ 95, 94 ] }
	},
	{
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse libero alias, ab placeat vel quibusdam facere obcaecati ex, saepe fugiat.',
		WOTNumber: '94',
		WONumber: '1085',
		start: new Date('17 Nov 2016 08:45:00'),
		end: new Date('17 Nov 2016 12:00:00'),
		teamID: '1',
		teamMember: 'Sattar Seyidov',
		phase: 'Execution',
		status: 'Completed with failing point',
		conflict: { tasks: [ 95, 94 ] }
	},
	{
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse libero alias, ab placeat vel quibusdam facere obcaecati ex, saepe fugiat.',
		WOTNumber: '95',
		WONumber: '1084',
		start: new Date('17 Nov 2016 10:00:00'),
		end: new Date('17 Nov 2016 12:30:00'),
		teamID: '3',
		teamMember: 'Teymur Mustafayev',
		phase: 'Execution',
		status: 'Execution',
		conflict: { tasks: [ 95, 94 ] }
	},
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
	},
];

const teams = [
	{ id: '1', name: 'Red Team', active: true, color: 'red' },
	{ id: '2', name: 'Green Team', active: true, color: 'green' },
	{ id: '3', name: 'Blue Team', active: true, color: 'blue' },
	{ id: '4', name: 'Yellow Team', active: true, color: 'yellow' }
]; 

export default {tasks, teams};