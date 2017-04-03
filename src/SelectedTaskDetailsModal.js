import React, {Component} from 'react';
import moment from 'moment';
import * as TeamsManager from './TeamsManager';
import TaskDetailsModal from './TaskDetailsModal';

class SelectedTaskDetailsModal extends Component{
    getTeam(teamID){
        const stubTeam = TeamsManager.createTeam({
            id: 0,
            name: 'Loading...',
            color: 'grey'
        });
        const notFoundTeam = TeamsManager.createTeam({
            id: 0,
            name: 'Error',
            color: 'grey'
        });

        const teams = this.props.teams;
        let team;

        if (teams.length === 0) {
            team = stubTeam;
        } else {
            const tmp = teams.filter(x => x.id === teamID);
            if (tmp.length === 0) {
                team = notFoundTeam;
            } else {
                team = tmp[0];
            }
        }

        return team;
    }

    render() {
        const team = this.getTeam(this.props.selectedTask.teamID);

        return (
            <TaskDetailsModal
                open={this.props.open}
                onClose={this.props.onClose}
                description={this.props.selectedTask.description}
                WONumber={this.props.selectedTask.WONumber}
                WOTNumber={this.props.selectedTask.id}
                WODisplayNumber={this.props.selectedTask.WODisplayNumber}
                WOTDisplayNumber={this.props.selectedTask.WOTDisplayNumber}
                start={moment(this.props.selectedTask.start).format('YYYY-MM-DD HH:mm')}
                end={moment(this.props.selectedTask.end).format('YYYY-MM-DD HH:mm')}
                teamColor={team.color}
                teamName={team.name}
                teamMember={this.props.selectedTask.teamMember}
                phase={this.props.selectedTask.phase}
                status={this.props.selectedTask.status}
            />
        );
    }
}

export default SelectedTaskDetailsModal;
