import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';
import moment from 'moment';
import * as TeamsManager from './TeamsManager';
import {teamIdToColorMapper, statusToColorMapper} from "./Utils";

class TaskTile extends Component {
    render() {
        const stubTeam = TeamsManager.createTeam({
            id: 0,
            name: 'Loading...',
            color: 'white'
        });
        const notFoundTeam = TeamsManager.createTeam({
            id: 0,
            name: 'Error',
            color: 'white'
        });

        let team;

        if (this.props.teams.length === 0) {
            team = stubTeam;
        } else {
            const tmp = this.props.teams.filter(x => x.id === this.props.data.teamID);
            if (tmp.length === 0) {
                team = notFoundTeam;
            } else {
                team = {
                    ...tmp[0],
                    color: teamIdToColorMapper(tmp[0].id, this.props.teams.map(x => x.id))
                };
            }
        }

        const teamColor = team.color;
        const statusColor = statusToColorMapper(this.props.data.status);

        const conflictLabel = this.props.hasConflict
        ? ( <i className="red warning circle icon"></i> )
        : null;

        return (
            <div
                onClick={this.props.onClick}
                className={`task-tile`}
                style={{
                    ...this.props.style,
                    borderColor: statusColor,
                    backgroundColor: teamColor
                }}>

                <div className="wot-number">
                    {this.props.data.WOTDisplayNumber}
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
                    <b>{moment(this.props.data.start).format('D MMM HH:mm')}</b>
                    <br />
                    <Icon name="calendar"/>
                    <b>{moment(this.props.data.end).format('D MMM HH:mm')}</b>
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
