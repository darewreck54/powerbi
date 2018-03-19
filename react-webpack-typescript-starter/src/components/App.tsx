import * as React from "react";
import "./../assets/scss/App.scss";

import { Report } from "./report";

import { Resizable, ResizableBox } from 'react-resizable';

import Draggable from 'react-draggable';

import { IError, validateReportLoad, VisualContainerDisplayMode, LayoutType, DisplayOption, PageSizeType } from "powerbi-models";

const reactLogo = require("./../assets/img/react_logo.svg");
const token = "H4sIAAAAAAAEACWWt67FDG6E3-VvZUA5HANbKOec1SnnnGX43X2925MFh8Ph9z__WOk7zGnxz3__o8jwER2GZSb9gYBhsKOIJThpI9n4ttV0BBqW7ewW1l_uiXmgammE2KbXyTWlLuNMb375Nqrh80JOdj1bEGFciYz4JV7DkFUvz-dWYcmLGACFy5LJCDb4GUb1LXrvnZ9tAhutfWTq9zzDcLw7PcInI0nDZm5nJyKBII6UM-RvLOpCufFSzxzcSpn6xFWa9JFXnvft7BimQeXf49tmZVmZyXkHRQvzGt5G4_PriBI-VXRr_pG_TXqlXA7qXbWAS7bTcPbjyl6M5Sfdr0HyNTmEI6Y5UalpgaizDDMBtnloi9adQWPexGzrJy0_TQfZOKPf03KJe1LhPjo4Iu8kgP1DVI-_BG2SMO_ctba6fKXHQN3jf_bVkZbRgjTBptvt1w04sy_EqAkjuOjefgZo_xzBPtzbWfVQMBf0NB27IN5SUUB99CUpyQkr1fT18oTUCCnJ9mfZoPGl_0RAy9NbNKIhfZ7umtAOzNssHyBtJww9sCbxAfPBivcTws8g3Def7PB-mULmGTcpHNDMQYr-lJF1NFBktsegHZNZHSMiDGtXoD2l0aYgYzQx0UiyDfGpR_TSEKSrhgHQ5KPY2jel2lO80YpWSSCaiME36PAaFbTthNzdF-8jDowAvQutwYxPmI9p5Ud3a7ejtyxx2_lMCx-vxi6WbscKIt_v3viA9GFvoOrntg3k0TewWxmmpTuRtMfNWeWiTOBLHFsZw8e5eAakcLgA2lU7oSatQCz55Lar9-8lkpwaMa3TUyXeWb3OiCyrfBS1xOUCKyZdj0C4VqpoRlTVAcCeg4VV5_ubRdmUYOo2bDc9VTldYxIFL63Zz7DK7aHHd5p94e8kvYhooPlTt8WOYYEu7if_hRR0jUl8cS45Zd_l86EslwYaiMXT2J1SHSEwpa4kLiPf18Z60QjZ6X6rL0gK6LFiN9OGd4B5wak3HZUNzSNghuWJFCy_OG_e2ozB5Uy2ubuQWkPB-stnqATsD2zrwfv4zj0hoKglfa-yG53HrlzoYDofnR3o9QuXy90FI8n8DYFqcxJXD-4O_xevPcOsbAsTqYBOmFFjmi10_szabhLZ-7TZL94Dth8_3t8F1X3W2v6E0kQhCpK49M604d9NNZskZZSmn_PMTiY7zflNsLe0MKZ5zA_KpY54iIGdbQaBJJ8TeKbN4o6AqR1YACfqDdKRjNK3FZJE4ej2WOm3cBQ_zhNtF-CKBCDXdSu9AtoIm4X6wynd0TD8J9w7QXePZLJYg3yiAX2dmHGpPhYmuspcMq-gT4snjMFZEA-DZ2Q_jQoLBGbS-i63j6s-0HJQRPfyRShbz1LMOkH8cygtuStXLgZ2ociZjuWcOeOPJTN_A5HRoUiNoesowMzdOpel0xmQpWHwzXYKN8BfPrXS8B1KyVeva1OhN8bD1F0Dgse9oxPRDyem1hXi5mvV6v4Oava-tTJKHMe8r9mnCjBtvp6QF-3Dzjm7gtcMuEE8mNlKE10zXvhB-PGD0DoRBZhfdFS79dXBqTX4odsrwoKqIdui3bRhb-R5jzu0uPlG26uBLIEI4sx9O3l2h2WQ90kmz_1mGo5ua_C8hCDRo0YbrZCwWKXsCdUXZ6beGZ_zF8hX0tF1fCpo8434ENB8HPIBrIk1Htw2yyv9FcGaZxkHyz0e4z3C0O0LDOKEDEkNwNhxbj_PyzMmcjiJhWwlqRuF5zRjvog6P8wYLp_VWvo-AtzgX9pM-FEff4MrAI-KZDCsIODRcg0ffZo4GM7dSx8DWUn2TVKRp_OATsaqmayVyvQIiKddl9wFbAJO1-jcvRgNYWKfzUQymlPh0AoSw_XxIvB6WWfEyOrdmoyt0H7mr5HelerePvZ7EdjvCsIuHL0ITDw85J_nZumli1ZBDRdoVRfb87Jy_jKlZsTfuKqj7vdEZjP70KXYkykF7dMfNHaxrA6ORHiSOt5cA5ULjOYxzPctVl_f6wps0HKNVduF7wpXYWS6UC82oW6iw7q5dMj-eI0XK73wApUIoQqjqCxRRjqPpZxgP67FGI3eWFSdcXbphs0v2c_yywJNbOrRGSrGtD5g72Z6J4-tw-BM0M1FNrnK1vE6VZ0aMKkcAMo-XGBYiYUjr6PZVMTQFjdpMKOuCX3EFF17fhz9Ga7HWd7_-tc___UPu73LMavl-4cZOd_hLrlBF7a51JUnG-Zs5SddNtgG9Jht-CVriQPnQ4JTZg9VdFdLquvYDDAihkBLYFMALjO6YhyUW5LbQSz1Y4no3LWKGV5LLxs4p0bCUsWFk0z1aght94WLziFZU06P-eEAGqI4LP-442Gn-0ibEh58gFFh5Z9vPgqMfiw7Cj442eAFBeUYvIaEv1NzmanyuUk2B1H6cwXRXTQ7FyhInDG-V_Z25O4gUxo3joZaJOo_e2PsghJj6ez0T3gyViDjUwB4ifGUX7ho0ecz8iYBI1xxmxP1kgsx1z1ZvjBtFlhByg0pCB24-rTrYBgyeuQga0Z7kd4VjNyA9434g8GwHE3_R-Z3acpNDv5UZnboNPrYkX584b5MVV1Jo9v_rnLbekqPcyv_ysYK1Ppku59LfqmBcowSX5RnqTf706QI7hbQtcxNwKZO5nuGSzjyPEBRtNmE9vkEOP-oiOh8zzVHoM1DnCnHj__oGCjzfCJbU9Z90h3nuFJYO9I4WKYIWbQPX3IM4_Mlqkev36PXUUFrdMooj4S2NcStrXQUk6Lxv2POxCOabJHFD-uMQcf7g5qF6BLs8BvVes7bWW5fTcBwO7K2ezt-AVKkwkURIGQbMb1nNb3isWzKVCmARuaMfQPY_EO1r-sHWDDYLL4bPa6YYjc7jLzm7OJzGd14LHQJiUB_d-Z3VfFWruMJ-ofKl7eTnFQlmPjX9vcqvMS283Y6VF0r2duj8pis_38Z__t_D2xybloLAAA=";
const embedUrl = "https://app.powerbi.com/reportEmbed?reportId=bac25fa7-d58d-40b6-8b01-606d165c3b43&groupId=be8908da-da25-452e-b220-163f52476cdd";

const reportId = "bac25fa7-d58d-40b6-8b01-606d165c3b43";

export interface AppProps {
}

export default class App extends React.Component<AppProps, any> {
    constructor(props) {
        super(props);
        this.state = {
        };
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
            </div>

            
        );
    }
}
