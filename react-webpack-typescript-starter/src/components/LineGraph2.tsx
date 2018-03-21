/*
 * Copyright (C) Microsoft Corporation.  All rights reserved.
 */

import * as React from "react";
//import "./../assets/scss/LineGraph1.scss";
import "./../assets/scss/LineGraph2.scss";
import * as c3 from "c3";

export interface ReportProps {

}

interface State {
}
const columns = [
    ['My Numbers', 30, 200, 100, 400, 150, 250],
    ['Your Numbers', 50, 20, 10, 40, 15, 25]
  ];

/**
 * This class represents the UI Component of a Report.  It uses the power bi client library
 * to embed the report into an iframe.
 */
export class LineGraph2 extends React.Component<ReportProps, State> {
   

    constructor(props: ReportProps) {
        super(props);
        this.state = {
        };
    }

    public componentWillMount() {
       
    }
    public componentDidMount() {
        this._updateChart();
    }

    componentDidUpdate() {
        this._updateChart();
    }

    public _updateChart() {
        const chart = c3.generate({
            bindto: '#chart',
            data: {
                columns: columns,
                type: "line"
            }
        });
    }
    public componentWillReceiveProps(nextProps: ReportProps) {
    }

    /**
     * This component renders an iframe for the power bi report to render in.
     */
    public render() {
        return (
            <div>
                 <div id="chart">hi</div>
            </div>
        );
    }
}
