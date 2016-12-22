import React, { Component } from 'react';
import {Table} from 'semantic-ui-react';

class Agenda extends Component {
    getDayRow(dayData){
        return dayData.items
            .map((item, index) => {
                let firstCell = null;

                if(index === 0){
                    firstCell = (
                        <Table.Cell active collapsing rowSpan={dayData.items.length}>
                            {dayData.day}
                        </Table.Cell>
                    );
                }

                return (
                    <Table.Row>
                        {firstCell}
                        <Table.Cell active collapsing>
                            {item.startTime} - {item.endTime}
                        </Table.Cell>
                        <Table.Cell style={{padding: '0px'}}>
                            {item.content}
                        </Table.Cell>
                    </Table.Row>
                );
            });
    }

    getTableContent(data){
        return data.map(this.getDayRow);
    }

    render() {
        const data = this.props.data;
        const tableContent = this.getTableContent(data);

        return (
            <div>
                <Table celled structured>
                    <Table.Body>
                        {tableContent}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

export class AgendaDay{
    constructor(day, items){
        this.day = day;
        this.items = items;
    }
}

export class AgendaItem{
    constructor(startTime, endTime, content){
        this.startTime = startTime;
        this.endTime = endTime;
        this.content = content;
    }
}

export default Agenda;
