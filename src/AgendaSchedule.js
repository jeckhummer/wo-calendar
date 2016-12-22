import React, { Component } from 'react';
import Agenda, {AgendaDay, AgendaItem} from './Agenda';
import * as _ from 'lodash';
import moment from 'moment';
import {Header, Icon} from 'semantic-ui-react';
import AgendaTaskTile from "./AgendaTaskTile";

class AgendaSchedule extends Component {
    createAgendaDays(taskParts){
        const daysMap = _.groupBy(
            taskParts,
            taskPart => moment(taskPart.start).format('DD MMM YYYY')
        );
        const agendaDays = _.map(
            daysMap,
            (taskPartsDayGroup, day) =>
                new AgendaDay(day, taskPartsDayGroup.map(this.createAgendaItem.bind(this)))
        );

        return agendaDays;
    }

    createAgendaItem(taskPart){
        return new AgendaItem(
            moment(taskPart.start).format('HH:mm'),
            moment(taskPart.end).format('HH:mm'),
            <AgendaTaskTile
                onClick={() => this.props.taskSelectionCallback(taskPart.task.id)}
                data={taskPart.task}
                hasConflict={this.props.conflictsMap[taskPart.task.id] === true}
                teams={this.props.teams}
            />
        );
    }

    render() {
        const taskParts = this.props.taskParts.filter(x => x.start > new Date());
        if(taskParts.length === 0){
            return (
                <div style={{paddingTop: "10px"}}>
                    <Header color="grey" as='h2'>
                        <Icon name="frown"/>
                        No tasks.
                    </Header>
                </div>
            );
        }
        const agendaData = this.createAgendaDays(taskParts);

        return (
            <Agenda data={agendaData}/>
        );
    }
}

export default AgendaSchedule;
