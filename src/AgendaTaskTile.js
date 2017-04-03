import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';
import moment from 'moment';
import * as TeamsManager from './TeamsManager';
import {teamIdToColorMapper, statusToColorMapper} from "./Utils";

class AgendaTaskTile extends Component {
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

        const teamMember = this.props.data.teamMember
            ? <span className="team-member"> &nbsp; by {this.props.data.teamMember} </span>
            : null;

        return (
            <div
                className={`task-tile`}
                style={{
                    ...this.props.style,
                    borderColor: statusColor,
                    cursor: 'default',
                    backgroundColor: teamColor
                }}>

            <div className="wot-number">
                    {conflictLabel}
                    {this.props.data.WOTDisplayNumber}
                    &nbsp; - &nbsp;
                    {this.props.data.status}
                    &nbsp; - &nbsp;
                    {this.props.data.phase}
                    &nbsp; - &nbsp;
                    {this.props.data.WODisplayNumber}
                </div>

                <div className="divider"></div>
                <div className="test"></div>

                <div className="description">
                    {this.props.data.description}
                </div>

                <div className="divider"></div>

                <div className="time">
                    <Icon name="calendar"/>

                    <b>{moment(this.props.data.start).format('D MMM HH:mm')}</b>
                    &nbsp; - &nbsp;
                    <b>{moment(this.props.data.end).format('D MMM HH:mm')}</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="team">
                        <Icon name="user"/>
                        <b>{team.name}</b>
                    </span>

                    {teamMember}
                </div>

            </div>
        );
    }
}

export default AgendaTaskTile;
