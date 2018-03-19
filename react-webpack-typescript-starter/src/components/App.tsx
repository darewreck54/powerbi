import * as React from "react";
import "./../assets/scss/App.scss";

import { Report } from "./report";

import { Resizable, ResizableBox } from 'react-resizable';

import Draggable from 'react-draggable';

const reactLogo = require("./../assets/img/react_logo.svg");
const token = "H4sIAAAAAAAEACWWx86EbI5G7-XfMhJFhpF6QZEzvGR2ZChyDqO59_mme2sdb85j2f6ff-z06ae0-Oe__6GF06IEnXIfgNqofgBeYwXTd6vTJZDFiSGyPL5hRzuVdsgsAOjgcPFyaPRdjdzOlzbiZDSBiRcnHV3va3Cxsjb5-F0vQViffmBYkpzRGwpJGQlXtAAIowdKtFTW4-CEi45Mo1fmewXKWO2tI4oNHWWECyoAJOHmaeFdwVTOntPEkBX0rmtpXM2rkEtRMxW6Nh6e4jH-BrwuGw00S4aSfqr5elC0uW3IbRIInBU-R8CMosAZ0dm4dsIqahVybPop8GFRV8WU542DIVxr0826Ap7M8mKYFF_3BHRNE1ptZtNyPB8ls-txKZ8azkNKGrSviehXkUIeClgyUDV1Y1ZnFZcOKiXEZWgBl9y2fVusAtVnSU1pH8r5iR6x-PziCyNi6pcDYZkzyT5gS_8FjBU7cqSYWT_v7JGOXWLxPfLX5GX7jwHpxjXPcOH8xfUsWzQu3QiVN8rgZJKPR6ubWGAPHznBX1lTFATEXZq8Z9zCG2g3idQavdY3-DQ1I5QhS20eitU9tytOfIQVjWXK9F2PXJ7LDMblliA3-ncK1JgRg7UXW0ViTjYl8UyhtV_Bx5LiuiE2Mjt-k20P-N2X3emdVC-7BMr4mh4zN1QsIh10rbWkz8TzmXBC28PDQ3XdWJ8G02MOgLH0HOrTvuVgQFgr3q2ysj_11EX-mQIWjAjMXPNXnQtsvKrfsxEZI5Zs_E0pEkGNBMlSpaBOU9CYrLiwyWcPJL3hDQ0L43nebom4Zh4yUgguxQVzUNztTvxgC2J6NLbkOnSCL1lx3aFrkU-GWKmnXfQiyIgfmUVJeji7BGiIdPolqSBHeek3ckl7jr0Yggbcn_T8KsTew2Ss15jaOBYO0gpyhYUmTT4hDVrmydC93ss0uG-RlcWzojzmGlG5H4o36OMS4lvwDOEA3c_eTuT86kDQX1OVUr88Wjs8p6oidFGx3EHtwsscauMOc6dzYfDVFrb8eSjCeS_AnC-QfUNy1o8rCasXkzhMO3SkDsNL87IhtNpTsdNX6ahfWGqPKWyMvf9hm9pXp3IllkeJe_G8qyOt81ulqOZ1pDHnXI7rgPSbuRXLfVPFobJwiHq-I8Xa3fpwuMdFTAvuG39DIXJYL9w6-DEPTdMNdmnW9zAfWuxmlypzy2rXtZhs6lhKFBE4MvBfwmTQZu7rRtwZdjmZl7g-U5lEO-fRXM63ZH5Fl867HujFcG-uu_SoZXuXCT7A3rOh1_CDJqEcEQtIErjmBaHSLkhqHXtMge0Sa0Xd4scsbKp6hjfelwcHMZTYPpMWPtmbSn4p58qiarU5gWRlGhFm2qfRMdyx8MWRdUaOc-ReEpqdze1fPxYG14q2uNIQzvgbzxdhGa7cJ6_8jffxYrVoTx2dGVk0-FJQCwUmYQtw8vVGgmaJnKH2WCBO47GTk-lVdnlk9ZGHQLObXzM4aTwhgRX_4MC9yMiiOET28EeNMzZZEKJOC-hbN3P8xmn8hqyCS6A-rV--ZiY66vggkr_Z6BteEOvD5FQO37knrs-G0bO2yCdOdGtBOhaxNfhVfsyZuTk7iaa5E_b9Kb49M73FPUGslnSXZC-I5UP7g9UBTHyVAoM6dBlaz6i6RP8I-yveMvkO6nl_siX7wslkEnDvrFU5uq8_T1GAcdB71j1bEVInO6B1qA1YFfJNuLjAOqRiGWxO7C9t8ANTz7VxJCAbbgZyfcAVECDwkiC_dP7wlGRwaSEkn14bYVxadzDaFH93vw9leoWbLAYzsneAgaJ8xiC5A39bRXt5i02KSOIZihNCFZtLym9LwLP9SB6sn1xVdbJZVFmgd80HAS6C0DMCqzdVOHMvQANhnKQP4vRW2ztgYsx7utGu1E_dYvAbUwhLeFKiionzLYk-1XAVnbiXf0lQUYoJ-47T6tsBwUtp_M75OsUEKxNJcUd0Dom-75pYj3TfgeArR1-0lTSCQJkGvHUVzj-82QVU7S7-JuyaP_OOFdrf7-_SQu-EFFb2cRUSLZh0L4k80CmdrBI_K4ivkwWSZBdDSA2Uzpz0hwVPWC0Q9yMExfyqNwFhbh8AE1S5n6IOsmhIbqbRM9wEm20c7-vU1F3Hpz39NWk6MHLRrgomWXcBvWig2_Id6xKTOMwFQH9h9rTNdGIIDM4Y63_965__-odbn3mftPL5ezOslT_dDhgnemAayH8Fs_6t7iuz1tqVir1hKbw5WFVZqA-kZ-9L5WwpT_SxCtmAuEQwQqrx1E9EN-488JiAOoyaoHI4LGjJGW8Jrq6qMCkf73G3aEYt5YclgjlS5SIncJjXYE5rKHpqhEFACZ7jm0BG9jZusXJvFZ6V2V3rlCrLh_eJ8wPJ0E_82X_UzAH9Dqih1535l7SyvlthVtQbH0WjLnHo437eleDbNwepl6dkLKLJJlQrPj0buT4JV6NCUWIcnGhXqjjz0bFUf98VZnDOSYhWyoXciMIXbzHkW_vUzgzMIiNu-QwoeYfAv8jUeTr1SNJ5UR5hyYXriG3jrgLqZf-j-ZmbclWCP8vdEHpWl0pSCPUJADPP9arg_Jty23pM92Mt_zDlXC4c-qENYh8_jo8p_C_B4XxZkpaVP6O7u5YBwbWcu_Fu3cvzOwsBuyZ5HlqZYjowz9uf7bZCijzEH6Ory-bAxuqwy0ROzcF8ykq3tiuZWDZ3BXOPrsJEpzdptM922nFgx4IciN46825mMgvCQT5nspw6Kh-utGr6e94NatSkjiRGqPWUstYyK1cH8XXX-Od-DlnDTm2Yh1stNYYPCca479i4SeBvVrle2gkw9aNcqzW26RLkZ7adB8geQ3CswG-IU78YGm4aX1J9zFZp9yPKEW67g4N-CLBrqO7B41bR5iDeVZpMmC4LzdQ0eBRQCLpeTmRJ5AzuuIGOw37TUEFQ8_81_-__AS9c0vhaCwAA";
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
        return (
            <div className="app">
                <div className="row">
                    <div className="graph resizable" draggable={true}>
                        <Report
                            config={embed}
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
