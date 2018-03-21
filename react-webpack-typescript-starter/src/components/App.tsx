import * as React from "react";
import "./../assets/scss/App.scss";

import { Report } from "./report";

import { Resizable, ResizableBox } from 'react-resizable';

import Draggable from 'react-draggable';

import { IError, validateReportLoad, VisualContainerDisplayMode, LayoutType, DisplayOption, PageSizeType } from "powerbi-models";

import { LineGraph1 } from "./LineGraph1";
import { LineGraph2 } from "./LineGraph2";
import { Chart } from "./Chart";

const reactLogo = require("./../assets/img/react_logo.svg");
const token = "H4sIAAAAAAAEACWWxQrtihWG3-VMU8iOJ4U7iO24e2Zxd0_pu3cfOl-w4OO3__wxk6efkvzPv_-oQAjRemGiWZ3cJfA1YXVSLwfdJDsh4c-tDxwtTyZPH-26MCoVbeXT5aRt4rVw0LFgbmGFnVWa4iIK4lSUnKq19whlcUsWt_WsaXxCsSW585f0SfyiGsWwH3ziK8tvXc7XFwqFmZ-Pa80fQjnIN0g5m2ibgtYPoanw_Q3qB-YMuyRd_7TsL9EF96H2k09m7pQy2NbBIFnk1kJcmWhagtlT5z63w6oHfKWCO8EmISI07Hk45-LniLW1wK2AUYgzDUcWHUH5iI9Dboml4hXR48p43-qWxkUY7Xl_95VCQAShd2u-EUXljXfLBnlz3YMYYX_g9-VB1s4bbjF4FRU501W4vAlNlDvWFzBYRPY647KC6erYJVCaQlLWO59kvuExnN5oVxscDewM8KMRvRJS8Qe9LdNC1MAjXdtieyNguqoPTx8pkopPJG3MghyiQAuFxNwze9G6KKiU9DKkReXrSZ3snsASE3BxdMJnoIRdB1hSQ_eQx8hQWEnyjWy5GbbRlwirhQzMuQfEz8fS5hsVclZByKTUiAleOLXySzVNgA7KU4gqssljsRIDFHlNVKuoSrFT3ohXpCtltc7DJcdZEPA0Qu2Js3Qg06xZMBUSpd2qx64YvsZw5QuW1OZIZhPPba1mDTgzIJ_Lrkyah3Iq8EJxl0aW252hNBKdoIgiGQJwpgN8PVh_9eq6WLEZZoucqrmuVQl8wyRVG96xs_WI0JEa-3FOg6hVLplTmaYcLaHUTGPim6TPSEacddIS7pfDndO0b24b1U5mtu087yA3o12wTAaqvqtGV2Be-QqS7UosvTOGuJtalfhJWrQLSwo6ZZlhm93ik3x0nvysp4KmAcpJavMkI8u3j_UtNMLGGQ3Xsso-wpyeT5bOkJ1KkOZyBBXiijqsYlozILhte2UpBD02JkZyKaDmhJC3g1PX5ZGLVMSNbYNJ5GS3fp45yfXlAunj_AQF7SFMhimd31PQMyvz0HCf_aa6wGO2-gVCTRN3GHfjuqv04woSVg8ATxCJgukFah-q9CijpT38wWLU2nJSturMylFgst6RgmjK4Nzg7v6B0_lqLVNGuOtTgoBghmz4_gZFL-PPDccGQQ0Me4-2f2RM1RJT5wXxh-PUm6R7jBSXBGZ0GV1_4UKBlA8iLNhr94hqlZQvwOiOj7PGLGCQlw3mqHNs8CaxVzd_JDnOzj6MS9QEGl6ytiIT71Uyd5uekGAf2k1zykONRNMdGa0m-S77TBBUFiQDfZ0g6r8u8vrxDINAIy_FLeJxvb5oHvc5r96GtAQKI6Lpe7WSOspEgSApcY-NzGgYFuH78kq5HjUig2mal7xPDgsLmeH5mbW4Dh_9DUJEM8VHqT5aFw0Bk5ZsDk--7uc5z0x0i3Dnk8nF3BWkzA4namYCC5Bs7LW0Te8bcHBz5sgtPTU3Eg9IsdFEI_MSWoCFfoQiHS4dswINi5pw4qRzC-zBvlo83OPq9cYd0-hcAIj0YXcxznm4P0dhbspUDwUFZheJmYymQdeQJhCcdBfQPciOv2tiCDQYGV4hM9cBHx_-pYKaW6o6MM2Gw8iRbasu4rTtNaHtETIgIpCbU7qyj_MY6VcDYUuPMcPVE_TKMk2uIY0IcjBIoDrU5waxT9XtaODFGRaWkoxHZQ0ZEsIw5pbpRGqPsRV3bhsnL1tEh7_FDhOO0DnMPFXUspfHICqTteUSg9z_tEWAtVMw6zCAywQDalr6X7JVRa2rR_x4qkNxgpT0HbjJviMJ-d-DcuA1s34qSspr6nf941qeK0Wnx-Ho77Nn6ydhSZLF-IJBVLHC4S0zq9uBN6Hs8FwV93q71GLGjCdGzOkCxrDFzpmOCCmEl0Zqx2hT6p76gQJTQJJX0PBFERuyRYxG1cADvOn93HFxlCupAL0axOdcC2QR0-KJI2I9-Zkn7Zes-MLd4R1hVh68Q7aSx32VgI4RBUET9J1NCQlYG-D2JFZ1aCvmnF8W7enfutt2i5b3--TM-LYSSnK-YBLo2jrosO-Hs7K1kA8l79VcX0OTfv8HJQVyVYJxZx2f2-1ENyMBF26ks7kjLy_FBoVTb_vE4_jp-je4jpcrcBlmKqVCA9ujquMShEzndYq6wgJXxvwgI9Qbb0HiERUHCvFgrwD0Xu6zoWQOjg7TKrBjnOi3ua6TS1OJSUjKIs33gBEQ_ck1_POvP-z6zPukFM9vjsReHTykSseUYzrKwbhZj87J0voRtrHupTMziRAIycIKuGicUr581jh5p-O785nCfOigmzDjsA-f13XhYzCVlDV3EsLkkOWZKvyC1Na7nq6dv4ImnR5p7qCds-Cpm7GFSVwszHrR07UQ1jUHPgTir2bS0ddBxWxTXGcCyYajXGamBsnmSzVbm5MHi6nh6-QSoEiMgBX61b7-CO-uTFhhVI6DOmJFeRNnSm-r851ItlBlbGzHaguk6s5Lz-PewZoOvLKJJ95rI3AJcc_Oaxk1fiFUZSI5G5gAla5MjafBqKt-7rBTq1uL0ddTkZKo7JRHW9DGUWbR0hQmdsY-0sZXxt3u1T___MX8zL_ulPwfZUU5eVwUvwmAaAhw3wztS_P_r5ymGpP9WIvfmdgtkiI8W1X8nNHcxTdAVNGPahxrxkN4JR_hiqlG5e9gtJ0cpxCnLBKYgF8kSLAC816rn3Tc_-VzJAEOgu1m4y3vJf_y4qPgW_GIRjxyEIhU-jeani3oB_uXlEaqRBa2zP7Mqg8xFux1RGnr1gMdN4bsNkR69ZUOYBMksxiSRaSm5OcH84erJqbN_oE7EblaCgsx3GFWL2yodeBnBBKeZ4giJ_od8HSSVcdu0ryGbTg8cLeR5YzNH6lDZ4Q-BNzvvbv9-Brx5S_cg_O_Syxgfn0VV15QMASVnO9Ji1Iwg8v8ytfbI_eYCBHk9XNBNduJG5BkOg6Xbg-4_-3m6U5emgqvH-b__g-s7KZMggsAAA==";
const embedUrl = "https://app.powerbi.com/reportEmbed?reportId=bac25fa7-d58d-40b6-8b01-606d165c3b43&groupId=be8908da-da25-452e-b220-163f52476cdd";

const reportId = "bac25fa7-d58d-40b6-8b01-606d165c3b43";

export interface AppProps {
}

const columns = [
    ['My Numbers', 30, 200, 100, 400, 150, 250],
    ['Your Numbers', 50, 20, 10, 40, 15, 25]
  ];

  
export default class App extends React.Component<AppProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            chartType: 'line'
        };
    }
    public _setBarChart() {
        this.setState({ chartType: 'bar' });
      }
    public _setLineChart() {
        this.setState({ chartType: 'line' });
    }

    render() {
        const embed = {
            type: "report",
            tokenType: 1,
            accessToken: token ,
            embedUrl: embedUrl ,
            id: reportId ,
            permissions: 7,
            settings: {
                filterPaneEnabled: true,
                navContentPaneEnabled: false
            }
          };

        const oneVisualConfig1 = {
            type: "visual",
            tokenType: 1,
            accessToken: token ,
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=bac25fa7-d58d-40b6-8b01-606d165c3b43&groupId=be8908da-da25-452e-b220-163f52476cdd" ,
            id: reportId ,
            pageName: "ReportSection3",
            visualName: "VisualContainer7"
          };

          const oneVisualConfig2 = {
            type: "visual",
            tokenType: 1,
            accessToken: token ,
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=bac25fa7-d58d-40b6-8b01-606d165c3b43&groupId=be8908da-da25-452e-b220-163f52476cdd" ,
            id: reportId ,
            pageName: "ReportSection3",
            visualName: "VisualContainer6"
          };

          const oneVisualConfig3 = {
            type: "visual",
            tokenType: 1,
            accessToken: token ,
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=bac25fa7-d58d-40b6-8b01-606d165c3b43&groupId=be8908da-da25-452e-b220-163f52476cdd" ,
            id: reportId ,
            pageName: "ReportSection3",
            visualName: "VisualContainer4"
          };


  
          // district
          const oneVisualConfig5 = {
            type: "visual",
            tokenType: 1,
            accessToken: token ,
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=bac25fa7-d58d-40b6-8b01-606d165c3b43&groupId=be8908da-da25-452e-b220-163f52476cdd" ,
            id: reportId ,
            pageName: "ReportSection2",
            visualName: "VisualContainer4"
          };

          const oneVisualConfig6 = {
            type: "visual",
            tokenType: 1,
            accessToken: token ,
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=bac25fa7-d58d-40b6-8b01-606d165c3b43&groupId=be8908da-da25-452e-b220-163f52476cdd" ,
            id: reportId ,
            pageName: "ReportSection2",
            visualName: "VisualContainer5"
          };
          

          const oneVisualConfig7 = {
            type: "visual",
            tokenType: 1,
            accessToken: token ,
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=bac25fa7-d58d-40b6-8b01-606d165c3b43&groupId=be8908da-da25-452e-b220-163f52476cdd" ,
            id: reportId ,
            pageName: "ReportSection2",
            visualName: "VisualContainer4"
          };

          const oneVisualConfig4 = {
            type: "visual",
            tokenType: 1,
            accessToken: token ,
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=bac25fa7-d58d-40b6-8b01-606d165c3b43&groupId=be8908da-da25-452e-b220-163f52476cdd" ,
            id: reportId ,
            pageName: "ReportSection2",
            visualName: "VisualContainer1"
          };


           
          // next page

          const oneVisualConfig9 = {
            type: "visual",
            tokenType: 1,
            accessToken: token ,
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=bac25fa7-d58d-40b6-8b01-606d165c3b43&groupId=be8908da-da25-452e-b220-163f52476cdd" ,
            id: reportId ,
            pageName: "ReportSection4",
            visualName: "VisualContainer1"
          };
          const oneVisualConfig8 = {
            type: "visual",
            tokenType: 1,
            accessToken: token ,
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=bac25fa7-d58d-40b6-8b01-606d165c3b43&groupId=be8908da-da25-452e-b220-163f52476cdd" ,
            id: reportId ,
            pageName: "ReportSection4",
            visualName: "VisualContainer3"
          };
          
          const newSettings = {
            extensions: [
              {
                command: {
                  name: "extension command",
                  title: "Generate Data",
                  extend: {
                    // Define visualContextMenu to extend context menu.
                    visualContextMenu: {
                      // Define title to override default title.
                      //You can override default icon as well.
                      title: "Extend context menu",
                    }
                  }
                }
              }
            ]
          };

           // Define default visual layout: visible in 400x300.
        let defaultLayout = {
            width: 400,
            height: 300,
            displayState: {
            mode: VisualContainerDisplayMode.Hidden
            }
        };
   
    // Define page size as custom size: 1000x580.
    let pageSize = {
        type: PageSizeType.Custom,
        width: 500,
        height: 580
    };
    
    // Page layout: two visible visuals in fixed position.
    let pageLayout = {
        defaultLayout: defaultLayout,
        visualsLayout: {
        "VisualContainer7": {
            x: 0,
            y: 0,
            displayState: {
            mode: VisualContainerDisplayMode.Visible
            }
        },
        "VisualContainer4": {
            x: 0,
            y: 300,
            displayState: {
            mode: VisualContainerDisplayMode.Visible
            }
        }
        }
    };
    
    let layoutSetting = {
        filterPaneEnabled: false,
        navContentPaneEnabled: false,
        layoutType: LayoutType.Custom,
        customLayout: {
            pageSize: pageSize,
            displayOption: DisplayOption.FitToPage,
            pagesLayout: {
                "ReportSection3": pageLayout
            }
        }
    };
        return (
            <div className="app">
                <div className="row">
                    <div className="graph resizable" draggable={true}>
                        <Report
                            config={embed}
                            layoutSettings={layoutSetting}
                        />
                    </div>
                    <div className="graph resizable" draggable={true}>
                        <Report
                            config={oneVisualConfig1}
                        />
                    </div>
                    <div className="graph-container">
                        <Draggable>
                        <div className="graph resizable">
                            <Report
                                config={oneVisualConfig2}
                                newSettings={newSettings}
                            />
                        </div>
                        </Draggable>
                    </div>
                </div>
                <div className="row">
                    <div className="graph resizable" draggable={true}>
                        <Report
                            config={oneVisualConfig9}
                        />
                    </div>
                    <div className="graph resizable" draggable={true}>
                        <Report
                            config={oneVisualConfig3}
                        />
                    </div>
                    <div className="graph-container">
                        <Draggable>
                        <div className="graph resizable">
                            <Report
                                config={oneVisualConfig4}
                                newSettings={newSettings}
                            />
                        </div>
                        </Draggable>
                    </div>
                </div>
                <div className="row">
                    <div className="graph resizable" draggable={true}>
                        <Report
                            config={oneVisualConfig6}
                        />
                    </div>
                    <div className="graph resizable" draggable={true}>
                        <Report
                            config={oneVisualConfig7}
                        />
                    </div>
                    <div className="graph-container">
                        <Draggable>
                        <div className="graph resizable">
                            <Report
                                config={oneVisualConfig8}
                                newSettings={newSettings}
                            />
                        </div>
                        </Draggable>
                    </div>
                </div>
                <div className="row">
                    <div className="graph resizable" draggable={true}>
                       <LineGraph1/>
                    </div>
                    <div className="graph resizable" draggable={true}>
                    <Chart 
                        columns={columns}
                        chartType={this.state.chartType} />     
                        <button onClick={this._setBarChart.bind(this)}>bar</button> 
                        <button onClick={this._setLineChart.bind(this)}>Line</button>
                    </div>
                    <div className="graph-container">
                        <Draggable>
                        <div className="graph resizable">
                          
                        </div>
                        </Draggable>
                    </div>
                </div>
            </div>

            
        );
    }
}
