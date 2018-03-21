/*
 * Copyright (C) Microsoft Corporation.  All rights reserved.
 */

import * as React from "react";
//import "./../assets/scss/LineGraph1.scss";

import { Line} from 'react-chartjs-2';

import { Chart } from "chart.js";



import 'chartjs-plugin-annotation';

import 'chartjs-plugin-datalabels';

import 'chartjs-plugin-draggable';

export interface ReportProps {

}

interface State {
}

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

/**
 * This class represents the UI Component of a Report.  It uses the power bi client library
 * to embed the report into an iframe.
 */
export class LineGraph1 extends React.Component<ReportProps, State> {
    private chartData = [
        {
          name: "Lavon Hilll I",
          BMI: 20.57,
          age: 12,
          birthday: "1994-10-26T00:00:00.000Z",
          city: "Annatown",
          married: true,
          index: 1
        },
        {
          name: "Clovis Pagac",
          BMI: 24.28,
          age: 26,
          birthday: "1995-11-10T00:00:00.000Z",
          city: "South Eldredtown",
          married: false,
          index: 3
        },
        {
          name: "Gaylord Paucek",
          BMI: 24.41,
          age: 30,
          birthday: "1975-06-12T00:00:00.000Z",
          city: "Koeppchester",
          married: true,
          index: 5
        },
        {
          name: "Ashlynn Kuhn MD",
          BMI: 23.77,
          age: 32,
          birthday: "1985-08-09T00:00:00.000Z",
          city: "West Josiemouth",
          married: false,
          index: 6
        }
    ];

    constructor(props: ReportProps) {
        super(props);
        this.state = {
        };
    }

    public componentWillMount() {
       
    }
    public componentDidMount() {
    }

    public componentWillReceiveProps(nextProps: ReportProps) {
    }

    private _DataSelected(data) {
        console.log(data);
        return data.index;
    }
    /**
     * This component renders an iframe for the power bi report to render in.
     */
    public render() {
        const options = {
            responsive: true,
            onClick: (e, item) => {
                if(item.length === 1) {
                    console.log(`Item with text ${item.text} and index ${item.index} clicked`);
                    const datasetIndex = item[0]._datasetIndex;
                    const index = item[0]._index;
                    const datasetName = data.datasets[datasetIndex].label;
                    const title = data.labels[index];
                    const dataValue = data.datasets[datasetIndex].data[index];
                    console.log("Dataset Name: [" + datasetName + "] title: [" + title + "] value: [" + dataValue + "]");
                }
              
            },
            plugins: {
                test: {
                    beforeInit: (chart, options) => {
                        console.log("test");
                    }
                },
                draggable: {
                    draggable: true,
                    onDragStart: (event) => {
                
                        console.log("onDragStart");
                    },
                    onDrag: (event) => {
                        console.log("onDrag");
                    },
                    onDragEnd: (event) => {
                        console.log("onDragend");
                    }
                },
                datalabels: {
                    color: 'black'
                },
                annotation: {
                    // Defines when the annotations are drawn.
                    // This allows positioning of the annotation relative to the other
                    // elements of the graph.
                    //
                    // Should be one of: afterDraw, afterDatasetsDraw, beforeDatasetsDraw
                    // See http://www.chartjs.org/docs/#advanced-usage-creating-plugins
                    drawTime: 'afterDatasetsDraw', // (default)
            
                    // Mouse events to enable on each annotation.
                    // Should be an array of one or more browser-supported mouse events
                    // See https://developer.mozilla.org/en-US/docs/Web/Events
                    events: ['click'],
            
                    // Double-click speed in ms used to distinguish single-clicks from 
                    // double-clicks whenever you need to capture both. When listening for
                    // both click and dblclick, click events will be delayed by this
                    // amount.
                    dblClickSpeed: 350, // ms (default)
            
                    // Array of annotation configuration objects
                    // See below for detailed descriptions of the annotation options
                    annotations: [
                        {
                            drawTime: "afterDatasetsDraw",
                            id: "hline",
                            type: "line",
                            mode: "horizontal",
                            scaleID: "y-axis-0",
                            value: 5,
                            borderColor: "black",
                            borderWidth: 5,
                            label: {
                              backgroundColor: "red",
                              content: "Test Label",
                              enabled: true
                            },
                            onClick: function(e) {
                              // The annotation is is bound to the `this` variable
                              console.log("Annotation", e.type, this);
                            }
                          },
                        {
                        drawTime: 'afterDraw', // overrides annotation.drawTime if set
                        id: 'a-line-1', // optional
                        type: 'line',
                        mode: 'horizontal',
                        scaleID: 'y-axis-0',
                        value: '25',
                        borderColor: 'red',
                        borderWidth: 2,
            
                        // Fires when the user clicks this annotation on the chart
                        // (be sure to enable the event in the events array below).
                        onClick: (e) => {
                            // `this` is bound to the annotation element
                            console.log("test");
                        }
                    }]
                }
            }
            
        };
        return (
            <div>

              <Line data={data}
                    options={options}  />
            </div>
        );
    }
}
