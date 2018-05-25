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

    export interface SampleSlicerCallbacks {
        getPersistedSelectionState?: () => powerbi.extensibility.ISelectionId[];
        restorePersistedRangeSelectionState?: () => void;
        applyAdvancedFilter?: (filter: IAdvancedFilter) => void;
        getAdvancedFilterColumnTarget?: () => IFilterColumnTarget;
    }

    export class Visual implements IVisual {
        private target: HTMLElement;
        private updateCount: number;
        private settings: VisualSettings;
        private textNode: Text;
   //     private behavior: SelectionBehavior;
        private visualHost: IVisualHost;
        private waitingForData: boolean;
        private currentViewport: IViewport;
      //  private slicerData: SampleSlicerData;
        constructor(options: VisualConstructorOptions) {
            console.log('Visual constructor', options);
           
            this.visualHost = options.host;
          //  this.behavior = new SelectionBehavior(this.getCallbacks());
            console.log()
            this.target = options.element;
            this.updateCount = 0;

            if (typeof document !== "undefined") {
                const new_p: HTMLElement = document.createElement("p");
                new_p.appendChild(document.createTextNode("Update count:"));
                const new_em: HTMLElement = document.createElement("em");
                this.textNode = document.createTextNode(this.updateCount.toString());
                new_em.appendChild(this.textNode);
                new_p.appendChild(new_em);



                const dropdown: HTMLElement = document.createElement("select");
                dropdown.className = "dropdown";
             /*
                const option1: HTMLElement = document.createElement("option");
                option1.setAttribute("value", "saab");
                option1.innerText = "saab";
                const option2: HTMLElement = document.createElement("option");
                option1.setAttribute("value", "Opal");
                option2.innerText = "Opal";

                dropdown.appendChild(option1);
                dropdown.appendChild(option2);
*/
                this.target.appendChild(dropdown);
            }
        }

        public update(options: VisualUpdateOptions) {
            let dataViews = options.dataViews;
            console.log("update called:" + JSON.stringify(dataViews));
    
            let viewModel = {
                dataPoints: []
            };
            let dataView = dataViews[0];
            if (!dataView ||
                !dataView.categorical ||
                !dataView.categorical.categories ||
                !dataView.categorical.categories[0] ||
                !dataView.categorical.categories[0].values ||
                !(dataView.categorical.categories[0].values.length > 0)) {

                return;
            }
            console.log("update after called:" + JSON.stringify(dataView.categorical.categories[0].values));
    
            const dropDownElement = this.target.getElementsByClassName("dropdown")[0];
            console.log("num of value:" +         dataView.categorical.categories[0].values.length);
            dataView.categorical.categories[0].values.forEach( (value: string) => {
                console.log("val:" + value);
               const option: HTMLElement = document.createElement("option");
               option.setAttribute("value", value);
               option.innerText = value;
               dropDownElement.appendChild(option);
            });
            /*
            if (!options ||
                !options.dataViews ||
                !options.dataViews[0] ||
                !options.viewport) {
                return;
            }
            // create viewport if not yet created
            if (!this.currentViewport) {
                this.currentViewport = options.viewport;
                this.initContainer();
            }

            // update viewport
                if (options.viewport.height === this.currentViewport.height
                && options.viewport.width === this.currentViewport.width) {
                this.waitingForData = false;
            }
            else {
                this.currentViewport = options.viewport;
            }
                */
            this.settings = Visual.parseSettings(options && options.dataViews && options.dataViews[0]);
            console.log('Visual update', options);
            if (typeof this.textNode !== "undefined") {
                this.textNode.textContent = (this.updateCount++).toString();
            }
        }

        private static parseSettings(dataView: DataView): VisualSettings {
            return VisualSettings.parse(dataView) as VisualSettings;
        }

        /**
         * Function that converts queried data into a view model that will be used by the visual
         *
         * @function
         * @param {VisualUpdateOptions} options - Contains references to the size of the container
         *                                        and the dataView which contains all the data
         *                                        the visual had queried.
         * @param {IVisualHost} host            - Contains references to the host which contains services
         */
        public visualTransform(options: VisualUpdateOptions, host: IVisualHost): any {
            /*Convert dataView to your viewModel*/
            let dataViews = options.dataViews;
            console.log("visualTransform called:" + JSON.stringify(dataViews));
        }
        /** 
         * This function gets called for each of the objects defined in the capabilities files and allows you to select which of the 
         * objects and properties you want to expose to the users in the property pane.
         * 
         */
        public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
            return VisualSettings.enumerateObjectInstances(this.settings || VisualSettings.getDefault(), options);
        }

           /**
         *  Callbacks consumed by the SelectionBehavior class
         *
        private getCallbacks(): SampleSlicerCallbacks {
            let callbacks: SampleSlicerCallbacks = {};

            callbacks.applyAdvancedFilter = (filter: IAdvancedFilter): void => {
                this.visualHost.applyJsonFilter(filter, "general", "filter", FilterAction.merge );
            };

            callbacks.getAdvancedFilterColumnTarget = (): IFilterColumnTarget => {
                let categories: DataViewCategoricalColumn = this.dataView.categorical.categories[0];

                let target: IFilterColumnTarget = {
                    table: categories.source.queryName.substr(0, categories.source.queryName.indexOf('.')),
                    column: categories.source.displayName
                };

                return target;
            };

            callbacks.getPersistedSelectionState = (): powerbi.extensibility.ISelectionId[] => {
                try {
                    return JSON.parse(this.slicerData.slicerSettings.general.selection) || [];
                } catch (ex) {
                    return [];
                }
            };
            return callbacks;
        }
 */
        private initContainer() {
       //     let settings: Settings = this.settings,
            //    slicerBodyViewport: IViewport = this.getSlicerBodyViewport(this.currentViewport);

        //     this.bindHandlersToInputElements();
        }
/*
        private getSlicerBodyViewport(currentViewport: IViewport): IViewport {
            let settings: Settings = this.settings,
                height: number = currentViewport.height,
                width: number = currentViewport.width - SampleSlicer.WidthOfScrollbar;
            return {
                height: Math.max(height, SampleSlicer.MinSizeOfViewport),
                width: Math.max(width, SampleSlicer.MinSizeOfViewport)
            };
        }
        */
        private bindHandlersToInputElements(): void {
            /*
            this.$start.on("change", (event: JQueryEventObject) => {
                let inputString = this.$start.val();
                this.onRangeInputTextboxChange(inputString, RangeValueType.Start);
            });

            this.$start.on("keyup", (event: JQueryEventObject) => {
                if (event.keyCode === 13) {
                    let inputString = this.$start.val();
                    this.onRangeInputTextboxChange(inputString, RangeValueType.Start);
                }
            });

            this.$start.on("focus", (event: JQueryEventObject) => {
                this.$start.val(this.formatValue(this.behavior.scalableRange.getValue().min));
                this.$start.select();
            });

            this.$end.on("change", (event: JQueryEventObject) => {
                let inputString = this.$end.val();
                this.onRangeInputTextboxChange(inputString, RangeValueType.End);
            });

            this.$end.on("keyup", (event: JQueryEventObject) => {
                if (event.keyCode === 13) {
                    let inputString = this.$end.val();
                    this.onRangeInputTextboxChange(inputString, RangeValueType.End);
                }
            });

            this.$end.on("focus", (event: JQueryEventObject) => {
                this.$end.val(this.formatValue(this.behavior.scalableRange.getValue().max));
                this.$end.select();
            });
            */
        }
        /*

        public static converter(
            dataView: DataView,
            searchText: string,
            scalableRange: ScalableRange,
            visualHost: IVisualHost): SampleSlicerData {

            if (!dataView ||
                !dataView.categorical ||
                !dataView.categorical.categories ||
                !dataView.categorical.categories[0] ||
                !dataView.categorical.categories[0].values ||
                !(dataView.categorical.categories[0].values.length > 0)) {
                return;
            }

            let converter: SampleSlicerConverter = new SampleSlicerConverter(dataView, visualHost);
            converter.convert(scalableRange);

            let slicerSettings: Settings = defaultSettings;
            if (dataView.metadata.objects) {
                slicerSettings.general.selection = DataViewObjectsModule.getValue(dataView.metadata.objects, persistedSettingsDataViewObjectPropertyIdentifiers.general.selection, defaultSettings.general.selection);
                slicerSettings.general.rangeSelectionStart = DataViewObjectsModule.getValue(dataView.metadata.objects, persistedSettingsDataViewObjectPropertyIdentifiers.general.rangeSelectionStart, defaultSettings.general.selection);
                slicerSettings.general.rangeSelectionEnd = DataViewObjectsModule.getValue(dataView.metadata.objects, persistedSettingsDataViewObjectPropertyIdentifiers.general.rangeSelectionEnd, defaultSettings.general.selection);
                slicerSettings.general.filter = DataViewObjectsModule.getValue(dataView.metadata.objects, persistedSettingsDataViewObjectPropertyIdentifiers.general.filter, defaultSettings.general.filter);
            }

            if (searchText) {
                searchText = searchText.toLowerCase();
                converter.dataPoints.forEach(x => x.filtered = x.category.toLowerCase().indexOf(searchText) !== 0);
            }

            let categories: DataViewCategoricalColumn = dataView.categorical.categories[0];

            let slicerData: SampleSlicerData;
            slicerData = {
                categorySourceName: categories.source.displayName,
                formatString: valueFormatter.getFormatStringByColumn(categories.source),
                slicerSettings: slicerSettings,
                slicerDataPoints: converter.dataPoints
            };

            return slicerData;
        }
        */
    }
}