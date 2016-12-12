import {Team} from './Team';
import {TeamsFilter} from './TeamsFilter';

export function createTeam(teamData){
	return new Team(teamData);
}

export function createTeams(teamsData){
	return teamsData.map(teamData => createTeam(teamData));
}

export function createTeamsFilter(teams){
	const teamsFilter = new TeamsFilter();
	teams.forEach(team => teamsFilter.toggle(team.id));
	return teamsFilter;
}