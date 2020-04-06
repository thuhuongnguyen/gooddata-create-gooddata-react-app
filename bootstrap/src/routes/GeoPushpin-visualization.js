import React from "react";
import Page from "../components/Page";
import { Visualization, HeaderPredicateFactory, GeoPushpinChart } from "@gooddata/react-components";
import fixtures from '../data/fixtures.js';
const WRAPPER_STYLE = { position: "relative", height: 600, border: "solid 2px black" };
let exportResult: any;

function onExportReady(execution: any) {
    exportResult = execution;
}

async function doExport() {
    const result = await exportResult({
        format: 'xlsx',
        includeFilterContext: true,
        mergeHeaders: true
    });
    window.open(result.uri);
}

const DEFAULT_CONFIG = {
    mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
}

const GeoVisualization = () => {
    return <Page>
        <h1>No location</h1>
            <div style={WRAPPER_STYLE}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaSc2ulWdbHf"
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Only Location</h1>
            <div style={WRAPPER_STYLE}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aasxRRtKbTLU"
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Location + size</h1>
            <div style={WRAPPER_STYLE}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaiXFzYnfuDp"
                    config={{
                        ...DEFAULT_CONFIG,
                        tooltipText: fixtures.a_State
                    }}
                />
            </div>
            <h1>Location + color</h1>
            <div style={WRAPPER_STYLE}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aabfiMtLeZGC"
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Location + size + segment</h1>
            <div style={WRAPPER_STYLE}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aadfkyQZgXcx"
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}

                />
            </div>
            <h1>Location + color + segment</h1>
            <div style={WRAPPER_STYLE}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aabMcl9oaEHj"
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}

                />
            </div>
            <h1>Location + size + color</h1>
            <div style={WRAPPER_STYLE}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaerv5m0iy8m"
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                    filters={[fixtures.filterCity]}
                />
            </div>
            <h1>Location + size + color + segment</h1>
            <div style={WRAPPER_STYLE}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaryAqK6hpES"
                    config={{
                        separators: {
                            thousand: ' ',
                            decimal: ':'
                        },
                        chart: {
                            verticalAlign: 'bottom'  //top, middle
                        },
                        ...DEFAULT_CONFIG
                    }}

                />
            </div>
            <h1>Filter inside measure</h1>
            <div style={WRAPPER_STYLE}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aadUg2hJghFC"
                    filters={[
                        {
                            "measureValueFilter": {
                                "condition": {
                                    "comparison": {
                                        "operator": "LESS_THAN_OR_EQUAL_TO",
                                        "value": 50
                                    }
                                },
                                "measure": {
                                    "localIdentifier": "e2ca72bcfbf542fbb427e76b45b4ebbc"
                                }
                            }
                        }
                    ]}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Filter attribute + date</h1>
            <div style={WRAPPER_STYLE}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aadUg2hJghFC"
                    //filters={[fixtures.filterCity, fixtures.filterabsoluteYearSnapshot]}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}

                />
            </div>

            
       
        </Page>;
};

export default GeoVisualization;
