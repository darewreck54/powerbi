/*
 * Copyright (C) Microsoft Corporation.  All rights reserved.
 */

import * as pbi from "powerbi-client";
import { IError, validateReportLoad } from "powerbi-models";
import * as React from "react";
import "./../assets/scss/App.scss";
export interface ReportProps {
    // power bi report configuration
    config: pbi.IEmbedConfiguration;
    newSettings?: any;
    layoutSettings?: any;
}

interface State {
    component: pbi.Report;
    loadTime: any;
}

/**
 * This class represents the UI Component of a Report.  It uses the power bi client library
 * to embed the report into an iframe.
 */
export class Report extends React.Component<ReportProps, State> {
    // Reference to the power bi library to load the report
    private _powerbiService: pbi.service.Service = new pbi.service.Service(pbi.factories.hpmFactory,
        pbi.factories.wpmpFactory,
        pbi.factories.routerFactory);

    // element that contains the iframe where the report will be rendered
    private _rootElement: HTMLElement;
    private start: Date = null;
    private end: Date = null;
    constructor(props: ReportProps) {
        super(props);
        this.state = {
            component: null,
            loadTime: 0
        };
    }

    public componentDidMount() {
        this._loadReport(this.props.config);
    }

    /**
     * The embedded configuration is passed in as a prop into this class.  However, the configuration
     * can get updated from the parent.  In this case, this component needs to reload the report if
     * there is an update.
     *
     * The access token expires after a set amount of time (currently 1 hour). The PowerBI client
     * automatically refreshes the access token prior to the expiration and sets the new token in
     * redux. When this happens, this method will also get called. When this happens, we need to
     * update the token for the active report as well.
     *
     * @param nextProps - updated props change from the parent
     */
    public componentWillReceiveProps(nextProps: ReportProps) {
        if (nextProps.config !== this.props.config) {
            this._loadReport(nextProps.config);
        }
    }

    /**
     * This component renders an iframe for the power bi report to render in.
     */
    public render() {
        return (
            <div className="report">
                <div className="report" ref={(ref) => this._rootElement = ref} />
                <div>
                    Load Time: {this.state.loadTime}
                </div>
            </div>
        );
    }

    /**
     * This method will load the power bi report based on the configuration passed in
     * @param config - power bi embedded configuration for the report
     */
    private _loadReport(config: pbi.IEmbedConfiguration) {
        // only load the report if the config is valid,
        const errors: IError[] = validateReportLoad(config);
        const component = this._embed(config);
        this.setState({
            component
        });
    }

    /**
     * This method will trigger the power bi client to embed the report into
     * the iframe.
     * @param config
     */
    private _embed(config: pbi.IEmbedConfiguration): pbi.Report {
        let component: pbi.Report = null;
        component = this._powerbiService.embed(this._rootElement, config) as pbi.Report;
        this.start = new Date();
        component.on("loaded", () => {
            this.end = new Date();
            const diffInMs = this.end.getTime() - this.start.getTime();
            const diffInSec = diffInMs / 1000;
            const msg = "Load Time:" + diffInMs + "ms " + diffInSec + "sec";
            console.log(msg);
            this.setState({
                loadTime: msg
            });

            if (this.props.newSettings) {
                // Get a reference to the embedded report.
                component.updateSettings(this.props.newSettings).catch((error) => {
                    console.log(error);
                });

                component.on("commandTriggered", function(event) {
                    let commandDetails = event.detail;
                    console.log("Click on:" + JSON.stringify(commandDetails));
                });
            }

            if (this.props.layoutSettings) {
                // Update the settings by passing in the new settings you have configured.
                component.updateSettings(this.props.layoutSettings).catch((error) => {
                    console.log("updatesetting error" + JSON.stringify(error));
                });
            }
        });
        component.on("error", (event: CustomEvent) => {
        });
        component.on("pageChanged", () => {
        });
        component.on("rendered", () => {
        });



        // Report.on will add an event listener.
        component.on("dataSelected", function(event) {
            const data = event.detail;
            console.log(JSON.stringify(data));
        });

        return component;
    }
}
