import * as React from "react";
import * as c3 from "c3";

export class Chart extends  React.Component<any, any> {
    public componentDidMount() {
      this._updateChart();
    }
    public componentDidUpdate() {
      this._updateChart();
    }
    public _updateChart() {
      const chart = c3.generate({
        bindto: '#chart',
        data: {
            columns: this.props.columns,
            type: this.props.chartType,
            onclick: (d, element) => {
                alert(JSON.stringify(d));
            }
        },
        zoom: {
            enabled: true
        }
      });
    }


    public render() {
      return <div id="chart">hi</div>;
    }
}