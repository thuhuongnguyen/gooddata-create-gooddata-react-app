import React from "react";
import Page from "../components/Page";
import { Visualization, HeaderPredicateFactory, GeoPushpinChart } from "@gooddata/react-components";
import fixtures from '../data/fixtures.js';
const WRAPPER_STYLE1 = { width: 1200, height: 400 };
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

const GeoPushpin = () => {
    return <Page>
        
            <h1>only Location - clustering - no tooltipText</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    config={{
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>only Location - no clustering - tooltipText</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    config={{
                        ...DEFAULT_CONFIG,
                        zoom: 18,
                        tooltipText: fixtures.a_City
                    }}
                />
            </div>
            <h1>Location + Size</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    config={{ 
                        tooltipText: fixtures.a_City,
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Location + Color</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    color={fixtures.m_SumPopulation}
                    config={{ 
                        tooltipText: fixtures.a_City,
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Location + Segment By</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    segmentBy={fixtures.a_State}
                    config={{ 
                        tooltipText: fixtures.a_City,
                        ...DEFAULT_CONFIG
                    }}

                />
            </div>
            <h1>Location + Size + Segment By</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    segmentBy={fixtures.a_State}
                    config={{ 
                        tooltipText: fixtures.a_City,
                        ...DEFAULT_CONFIG
                    }}

                />
            </div>
            <h1>Location + Color + Segment By</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    color={fixtures.m_SumPopulation}
                    segmentBy={fixtures.a_State}
                    config={{ 
                        tooltipText: fixtures.a_City,
                        ...DEFAULT_CONFIG
                    }}

                />
            </div>
            <h1>Location + Size + Color + Segment By</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_State}
                    config={{ 
                        tooltipText: fixtures.a_City,
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Missing Location</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    size={fixtures.m_SumPopulation}
                    color={[fixtures.m_MinPopulation]}
                    segmentBy={fixtures.a_Timezone}
                    filters={[fixtures.filterCity]}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Too large insight but can’t render</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon1}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>No data</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_State}
                    filters={[fixtures.filterMinPopulation_EqualTo]}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Invalid data</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_StageName}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Protected attribute in segment</h1> //Protected attribute: DST
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_DST}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Ratio</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_PopulationRatio}
                    color={fixtures.m_SumPopulation}
                    segmentBy={fixtures.a_City}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Derive measure - POP</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_POP_SumPopulation}
                    segmentBy={fixtures.a_YearSnapshot}
                    filters={[fixtures.filterabsoluteYearSnapshot]}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Derive measure - PP</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_PP_SumPopulation}
                    segmentBy={fixtures.a_YearSnapshot}
                    filters={[fixtures.filterabsoluteYearSnapshot]}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Static filter inside measures - less than or = 50 </h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterSumPopulation_LessThanOrEqualTo]}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Static filter inside measures - between 0 -50</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterSumPopulation_Between]}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Static filter inside measures - equal 6</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterSumPopulation_Equal]}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Global filter by attribute</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterCity]}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Global filter negative attribute</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_DST}
                    filters={[fixtures.filterDSTNegative]}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Global filter by absolute date</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterabsoluteYearSnapshot]}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Global filter by relative date</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterrelativeYearSnapshot]}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Global filter by attribute + date</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterCity, fixtures.filterabsoluteYearSnapshot]}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>both static and global filters</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterCity, fixtures.filterSumPopulation_LessThanOrEqualTo]}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>both static and global filters - export</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_State}
                    filters={[fixtures.filterState]}
                    config=
                    {{
                        ...DEFAULT_CONFIG
                    }}
                    onExportReady={onExportReady}
                />
                <button style={{ padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>

            <h1>Ratio + format metric + filter, zoom minimum</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulationRatio}
                    color={fixtures.m_MinPopulationRatio}
                    segmentBy={fixtures.a_State}
                    config={{
                        zoom: 1,
                        center: { lat: 40.922326, lng: -72.637078 },
                        ...DEFAULT_CONFIG
                    }}
                    filters={[fixtures.filterCity1value]}
                    onExportReady={onExportReady}
                />
                <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>

            <h1>AM sum + format metric + filter, zoom maximum</h1>
            <div style={{  position: "relative",height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_Sum_SumPopulation}
                    segmentBy={fixtures.a_State}
                    config={{
                        zoom: 14,
                        center: { lat: 40.922326, lng: -72.637078 },
                        ...DEFAULT_CONFIG
                    }}
                    filters={[fixtures.filterCity]}
                    onExportReady = {onExportReady}
                />
                <button style={{  position: "relative",padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
            <h1>AM dif + format metric + filter</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_Difference_SumPopulation}
                    segmentBy={fixtures.a_City}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                    filters={[fixtures.filterCity1value]}
                    onExportReady = {onExportReady}
                />
                <button style={{  position: "relative",padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>

            <h1>Element masking + format metric + filter</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_Zip}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                    filters={[fixtures.filterCity1value]}
                    onExportReady={onExportReady}
                />
                <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>

            <h1>config zoom, center, filter City</h1>
            <div style={WRAPPER_STYLE}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_State}
                    config={{
                        tooltipText: fixtures.a_City,
                        zoom: 6,
                        center: { lat: 40.922326, lng: -72.637078 },
                        ...DEFAULT_CONFIG
                    }}
                    filters={[fixtures.filterCity]}
                    onExportReady={onExportReady}
                />
                <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
       
        </Page>;
};

export default GeoPushpin;
