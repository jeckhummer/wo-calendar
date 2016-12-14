import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';
import moment from 'moment';
import * as TeamsManager from './TeamsManager';

class TaskTile extends Component {
    render() {
        const stubTeam = TeamsManager.createTeam({
            id: 0,
            name: 'Loading...',
            color: 'loading'
        });
        const notFoundTeam = TeamsManager.createTeam({
            id: 0,
            name: 'Error',
            color: 'not-found'
        });

        let team;

        if (this.props.teams.length === 0) {
            team = stubTeam;
        } else {
            const tmp = this.props.teams.filter(x => x.id === this.props.data.teamID);
            if (tmp.length === 0) {
                team = notFoundTeam;
            } else {
                team = tmp[0];
            }
        }

        const teamColor = team.color;
        const statusColor = this.props.data.status.toLowerCase().replace(/\s/g, '-');

        const conflictLabel = this.props.hasConflict
        ? ( <i className="red warning circle icon"></i> )
        : null;

        return (
            <div
                onClick={this.props.onClick}
                className={`task-tile ${teamColor}-team ${statusColor}-status`}
                style={this.props.style}>

                <div className="wot-number">
                    WOT {this.props.data.id}
                </div>

                <div className="divider"></div>

                <div className="status">
                    {conflictLabel}
                    {this.props.data.status}
                </div>

                <div className="divider"></div>
                <div className="test"></div>

                <div className="description">
                    {this.props.data.description.substring(0, 50) + (this.props.data.description.length > 50 ? "..." : "")}
                </div>

                <div className="divider"></div>

                <div className="time">
                    <Icon name="calendar"/>
                    <b>{moment(this.props.data.start).format('HH:mm D MMM')}</b>
                    <br />
                    <Icon name="calendar"/>
                    <b>{moment(this.props.data.end).format('HH:mm D MMM')}</b>
                </div>

                <div className="divider"></div>

                <div className="team">
                    <Icon name="user"/>
                    {team.name}
                </div>
                <div className="team-member" style={{display: this.props.data.teamMember !== null ? 'block' : 'none'}}>
                    by {this.props.data.teamMember}
                </div>
            </div>
        );
    }
}

export default TaskTile;
