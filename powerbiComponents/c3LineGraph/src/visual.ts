/*
 *  Power BI Visual CLI
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

module powerbi.extensibility.visual {
    "use strict";

    export class Visual implements IVisual {
        private target: HTMLElement;
        private updateCount: number;
        private settings: VisualSettings;
        private textNode: Text;

        constructor(options: VisualConstructorOptions) {
            console.log('Visual constructor', options);
            this.target = options.element;
            this.updateCount = 0;
            if (typeof document !== "undefined") {
                const new_p: HTMLElement = document.createElement("p");
                new_p.appendChild(document.createTextNode("Update count:"));
                const new_em: HTMLElement = document.createElement("em");
                this.textNode = document.createTextNode(this.updateCount.toString());
                new_em.appendChild(this.textNode);
                new_p.appendChild(new_em);

                const new_c: HTMLElement = document.createElement("div");
                new_c.className = "chart";
                new_c.id = "chart";
        
                const dropdown: HTMLElement = document.createElement("select");
                dropdown.className = "dropdown";
                this.target.appendChild(dropdown);

                this.target.appendChild(new_p);
               // this.target.appendChild(new_c);
            }
        }

        public update(options: VisualUpdateOptions) {
            debugger;
            console.log("update called ");
            debugger;
            /*
            let viewModel = this.visualTransform(options, null);

            let xAxisData = [];
            xAxisData.push("x");
            
            let dataSet1 = [];
            let dataSet2 = [];
            
           // dataSet1.push("Gross Margin 1");
            //dataSet2.push("Gross Margin 2");

            dataSet1.push("Impression Counts");
            viewModel.dataPoints.forEach( (data) => {
                xAxisData.push(data.category);
                dataSet1.push(data.value);
            });
            
       
         
            const dropDownElement = this.target.getElementsByClassName("dropdown")[0];
            dropDownElement.addEventListener('click', () => {
                console.log("clicked");
            });

            viewModel.versions.forEach( (value: string) => {
                console.log("val:" + value);
               const option: HTMLElement = document.createElement("option");
               option.setAttribute("value", value);
               option.innerText = value;
               dropDownElement.appendChild(option);
            });
               */
            //console.log("xAxis:" + JSON.stringify(xAxisData));
            //console.log("y:" + JSON.stringify(dataSet));
            /*
            var chart = c3.generate({
                bindto: "#chart",
                data: {
                    x: 'x',
                    columns: [
                        xAxisData,
                        dataSet1
                    ]
                },
                axis: {
                    x: {
                     // type: 'categorized',
                     type : 'timeseries',
                     tick: {
                         format: (x) => {

                            //var zone = moment.tz.zone('America/New_York');
                            var test = new Date(x);
                            return test.getDate();
                          }
                       //format: '%Y' // format string is also available for timeseries data
                     }
                    },
                    y: {
                        tick: {
                            format: (d) => {
                                return "" + d/1000 + "K";
                            }
                        }
                    }
                  }
            });

            
            console.log("View Model:" + JSON.stringify(viewModel));
            console.log(options.dataViews);
            this.settings = Visual.parseSettings(options && options.dataViews && options.dataViews[0]);
            console.log('Visual update', options);


            if (typeof this.textNode !== "undefined") { 
                this.textNode.textContent = (this.updateCount++).toString();
            }
                */
        }

        private static parseSettings(dataView: DataView): VisualSettings {
            return VisualSettings.parse(dataView) as VisualSettings;
        }

        private visualTransform(options: VisualUpdateOptions, host: IVisualHost): any {
            let dataViews = options.dataViews;

            console.log("dataView:" + dataViews);
    
            let viewModel = {
                dataPoints: [],
                dataMax: 0,
                versions: []
            };
    
            if (!dataViews
                || !dataViews[0]
                || !dataViews[0].categorical
                || !dataViews[0].categorical.categories
                || !dataViews[0].categorical.categories[0].source
                || !dataViews[0].categorical.values
                || !dataViews[0].categorical.categories[1].source
            ) {
                return viewModel;
            }
    
            let categorical = dataViews[0].categorical;
            let category = categorical.categories[0];
            let dataValue = categorical.values[0];
    
            let barChartDataPoints = [];
            let objects = dataViews[0].metadata.objects;
    
            for (let i = 0, len = Math.max(category.values.length, dataValue.values.length); i < len; i++) {
                barChartDataPoints.push({
                    category: category.values[i] + '',
                    value: dataValue.values[i]
                });
            }

            debugger;
            let versionCategory = categorical.categories[1];

            const versionList = _.uniq(categorical.categories[1].values);
            return {
                dataPoints: barChartDataPoints,
                versions: versionList
            };
        }

        /** 
         * This function gets called for each of the objects defined in the capabilities files and allows you to select which of the 
         * objects and properties you want to expose to the users in the property pane.
         * 
         */
        public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
            return VisualSettings.enumerateObjectInstances(this.settings || VisualSettings.getDefault(), options);
        }


        private createVersionFilter(selectedVersion: string): IBasicFilter {
            const basicFilter: IBasicFilter = {
                $schema: null,
                filterType: FilterType.Basic,
                target: {
                    table: "Query1",
                    column: "Version"
                },
                operator: "In",
                values: [
                    selectedVersion
                ]
            };
            return basicFilter;
        }
    }
}