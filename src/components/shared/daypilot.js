import React, {Component} from 'react';
import {DayPilot, DayPilotGantt} from "daypilot-pro-react";

class GanttChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cellWidth: 60,
      linkBottomMargin: 17,
      taskHtmlRightMargin: 25,
      timeHeaders: [{groupBy: "Month"}, {groupBy: "Day", format: "d"}],
      scale: "Day",
      days: 12,
      startDate: new Date(),
      rowHeaderHideIconEnabled: false,
      heightSpec: "Auto",
      rowMoveHandling: "Update",
      onRowMoved: args => {
        this.gantt.message("Row moved");
      },
      onTaskMoved: args => {
        this.gantt.message("Task moved");
      },
      linkCreateHandling: "Update",
      onLinkCreated: args => {
        this.gantt.message("Link created");
      },
      rowCreateHandling: "Enabled",
      onRowCreate: args => {
        this.gantt.tasks.add(new DayPilot.Task({
          id: DayPilot.guid(),
          text: args.text,
          start: this.gantt.visibleStart(),
          end: this.gantt.visibleStart().addDays(1)
        }));
      },
    };
  }

  componentDidMount() {

    // load resource and event data
    this.setState({
      tasks: [
        {
          "id": 1,
          "text": "Group 1",
          "complete": 35,
          "start": "2021-10-04T00:00:00",
          "end": "2021-10-16T00:00:00",
          "children": [
            {
              "id": 2,
              "start": "2021-10-04T00:00:00",
              "end": "2021-10-11T00:00:00",
              "text": "Task 1",
              "complete": 60
            },
            {
              "id": 3,
              "start": "2021-10-11T00:00:00",
              "end": "2021-10-16T00:00:00",
              "text": "Task 2",
              "complete": 0
            },
            {
              "id": 4,
              "start": "2021-10-16T00:00:00",
              "type": "Milestone",
              "text": "Milestone 1",
              "end": "2021-10-16T00:00:00"
            }
          ],
        },
        {
          "id": 101,
          "text": "Group 101",
          "complete": 35,
          "children": [
            {
              "id": 102,
              "start": "2021-10-08T00:00:00",
              "end": "2021-10-14T00:00:00",
              "text": "Task 101",
              "complete": 60
            },
            {
              "id": 103,
              "start": "2021-10-10T00:00:00",
              "end": "2021-10-17T00:00:00",
              "text": "Task 102",
              "complete": 0
            },
            {
              "id": 104,
              "start": "2021-10-13T00:00:00",
              "type": "Milestone",
              "text": "Milestone 101",
              "end": "2021-10-16T00:00:00"
            }
          ],
        }
      ],
      links: [
        {from: 9, to: 123, type: "FinishToStart"}
      ]
    });

  }

  render() {
    var {...config} = this.state;
    return (
      <div>
        <DayPilotGantt
          {...config}
          ref={component => {
            this.gantt = component && component.control;
          }}
        />
      </div>
    );
  }
}

export default GanttChart;