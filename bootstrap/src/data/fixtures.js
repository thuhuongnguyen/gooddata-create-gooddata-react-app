import { Model } from '@gooddata/react-components';

const demoProject = {
    'https://secure.gooddata.com': '',
    'https://staging3.intgdc.com': 'qxcxp768fpuythmmt28va9p6oz0y9c41', //pbqw1946hsb7q22oqb1xuzma3s75kltx
    'https://staging2.intgdc.com': 'cxmrlinh0gcspntxsytkwcky7gkay4so', //d8qmrg8qi02th0pdyxi0jg7ekrv9beqh
    'https://staging.intgdc.com': 'uaumkml6k5h0ltatq2y5pjohhz3foylo' //egbqln7774to906vx4pfo6ear7w0ifr3
};
const backendUrl = "https://staging2.intgdc.com"; // eslint-disable-line no-undef
const demoProjectId = demoProject[backendUrl];
if (!demoProjectId) {
    console.error(`[fixtures.js] ProjectId for backend "${backendUrl}" is not in `, demoProject); // eslint-disable-line no-console
}
const backendUrlForInfo = backendUrl;
const projectId = demoProjectId;
const filterProduct = Model.positiveAttributeFilter('label.product.id.name', ["Educationly", "Explorer", "CompuSci", "PhoenixSoft", "WonderKid"], true);
const filterProductCompuSci = Model.positiveAttributeFilter('label.product.id.name', ["CompuSci"], true);
const filterProductExplorerGrammarPlus = Model.positiveAttributeFilter('label.product.id.name', ["Explorer", "Grammar Plus"], true);
const filterProductTouchAll = Model.positiveAttributeFilter('label.product.id.name', ["TouchAll"], true);
const filterProductNegative = Model.negativeAttributeFilter('label.product.id.name', ["TouchAll", "PhoenixSoft"], true);
const filterStageNameNegative = Model.negativeAttributeFilter(`/gdc/md/${projectId}/obj/1805`, [`/gdc/md/${projectId}/obj/1095/elements?id=966649`]);
const filterStageName = Model.positiveAttributeFilter(`/gdc/md/${projectId}/obj/1805`, [
    `/gdc/md/${projectId}/obj/1095/elements?id=966643`,
    `/gdc/md/${projectId}/obj/1095/elements?id=966644`,
    `/gdc/md/${projectId}/obj/1095/elements?id=966645`,
    `/gdc/md/${projectId}/obj/1095/elements?id=966646`,
    `/gdc/md/${projectId}/obj/1095/elements?id=966647`,
    `/gdc/md/${projectId}/obj/1095/elements?id=966648`,
    `/gdc/md/${projectId}/obj/1095/elements?id=1251`]);
const filterStageNameInterest = Model.positiveAttributeFilter(`/gdc/md/${projectId}/obj/1805`, ["Interest"], true);
const filterStageNameInterestShortList = Model.positiveAttributeFilter(`/gdc/md/${projectId}/obj/1805`, ["Interest", "Short List"], true);
const filterDepartment = Model.positiveAttributeFilter('label.owner.department', ["Direct Sales"], true);
const relativeDateYearSnapshot = Model.relativeDateFilter('snapshot.dataset.dt', 'GDC.time.year', -1, -1);
const filterFirstName = Model.positiveAttributeFilter('label.persons.firstname', ["Anh", "Bao", "Cuong"], true);
const filterFirstNameAnh = Model.positiveAttributeFilter('label.persons.firstname', ["Anh"], true);
const absoluteDate = Model.absoluteDateFilter('closed.dataset.dt', '2010-01-01', '2010-06-30');
const relativeDateYear = Model.relativeDateFilter('closed.dataset.dt', 'GDC.time.year', -8, -8);
const relativeDateMonth = Model.relativeDateFilter('closed.dataset.dt', 'GDC.time.month', -100, 12);
const relativeDateQuater = Model.relativeDateFilter('closed.dataset.dt', 'GDC.time.quarter', -50, -4);
const relativeDateWeek = Model.relativeDateFilter('closed.dataset.dt', 'GDC.time.week', -500, -1);
const relativeDateWeekUs = Model.relativeDateFilter('closed.dataset.dt', 'GDC.time.week_us', -500, -1);

const absoluteYearSnapshot = Model.absoluteDateFilter('snapshot.dataset.dt', '2011-01-01', '2011-06-30');
const relativeYearSnapshot = Model.relativeDateFilter('snapshot.dataset.dt', 'GDC.time.year', -8, 0);

const m_ActivityRestricted = Model.measure(`/gdc/md/${projectId}/obj/1253`).localIdentifier('ActivityRestricted').aggregation('sum');
const m_AmountNullFormat = Model.measure(`/gdc/md/${projectId}/obj/1279`)
    .localIdentifier('AmountNullFormat')
    .format('[=null]trống; #,##0.00;');
const m_AmountNegative = Model.measure(`/gdc/md/${projectId}/obj/76156`).localIdentifier("AmountNegative");
const m_AmountRatio = Model.measure(`/gdc/md/${projectId}/obj/1279`)
    .localIdentifier('AmountRatio')
    .ratio()
    .aggregation('sum');

const m_SumDayToCloseRatio = Model.measure(`/gdc/md/${projectId}/obj/1146`)
    .localIdentifier('SumDayToCloseRatio')
    .ratio()
    .title('<button>Sum days to close</button>')
    .aggregation('sum')
    .filters(filterProduct)
    ;

const m_SumDayToClose = Model.measure(`/gdc/md/${projectId}/obj/1146`)
    .format('[>=100000][color=2190c0]█████ #,##0; [>=50000][color=2190c0]████░ #,##0; [>=30000][color=2190c0]███░░ #,##0; [>=20000][color=2190c0]██░░░ #,##0; [>=0][color=2190c0]█░░░░ #,##0; [=Null] No data;')
    .localIdentifier('SumDayToClose')
    .title('<button>Sum days to close</button>')
    .aggregation('sum')
    //.filters(filterProduct)
    ;

const m_POP_SumDayToClose = Model.popMeasure('SumDayToClose', `/gdc/md/${projectId}/obj/323`)
    .localIdentifier('POP_SumDayToClose')
    .alias('POP SumDayToClose');

const m_PP_SumDayToClose = Model.previousPeriodMeasure('SumDayToClose', [{ dataSet: `/gdc/md/${projectId}/obj/330`, periodsAgo: 1 }])
    .localIdentifier('PP_SumDayToClose')
    .alias('PP SumDayToClose');

//M1: _Closed [BOP], M2: _Snapshot [BOP]
const m_Sum_ClosedBOP_SnapshotBOP = Model.arithmeticMeasure(['ClosedBOP', 'SnapshotBOP'], 'sum');
const m_Change_ClosedBOP_SnapshotBOP = Model.arithmeticMeasure(['ClosedBOP', 'SnapshotBOP'], 'change').localIdentifier('ChangeClosedBOPSnapshotBOP');
const m_Difference_ClosedBOP_SnapshotBOP = Model.arithmeticMeasure(['ClosedBOP', 'SnapshotBOP'], 'difference');
const m_Ratio_ClosedBOP_SnapshotBOP = Model.arithmeticMeasure(['ClosedBOP', 'SnapshotBOP'], 'ratio');
const m_Multiplication_ClosedBOP_SnapshotBOP = Model.arithmeticMeasure(['ClosedBOP', 'SnapshotBOP'], 'multiplication');

const m_MinPaid = Model.measure('fact.persons.paid')
    .localIdentifier('MinPaid')
    .title('Min of Paid')
    .aggregation('min');

const m_SumSalary = Model.measure('fact.persons.salary')
    .localIdentifier('SumSalary')
    .title('Sum of Salary')
    .aggregation('sum');

const m_OppFirstSnapshot = Model.measure(`/gdc/md/${projectId}/obj/9381`).localIdentifier('OppFirstSnapshot');
const m_SnapshotEOP = Model.measure(`/gdc/md/${projectId}/obj/1275`).localIdentifier('SnapshotEOP');
const m_OpenOpps = Model.measure(`/gdc/md/${projectId}/obj/13465`).localIdentifier('OpenOpps');
const m_CountStageHistory = Model.measure(`/gdc/md/${projectId}/obj/1174`)
    .aggregation('count')
    .localIdentifier('CountStageHistory');
const m_changeOfOpenOppsAndCountStageHistory = Model.arithmeticMeasure(['CountStageHistory', 'OpenOpps'], 'change')
    .localIdentifier('changeOfOpenOppsAndCountStageHistory')
    .title('<button>change Of OpenOpps & CountStageHistory</button> ~!@#$%^&*()_+`-=[]\{}|;:",./<>?');
const m_ratioOfOpenOppsAndCountStageHistory = Model.arithmeticMeasure(['CountStageHistory', 'OpenOpps'], 'ratio')
    .localIdentifier('ratioOfOpenOppsAndCountStageHistory');
const m_CountStageHistoryRatio = Model.measure(`/gdc/md/${projectId}/obj/1174`)
    .aggregation('count')
    .ratio()
    .localIdentifier('CountStageHistoryWithRatio');
const m_Amount = Model.measure(`/gdc/md/${projectId}/obj/1279`).localIdentifier('Amount');
const m_AmountDuplicate = Model.measure(`/gdc/md/${projectId}/obj/1279`).localIdentifier('AmountDuplicate');
const m_ClosedEOP = Model.measure(`/gdc/md/${projectId}/obj/9203`).localIdentifier('ClosedEOP');
const m_ClosedBOP = Model.measure(`/gdc/md/${projectId}/obj/9211`).localIdentifier('ClosedBOP');
const m_CountProduct = Model.measure(`/gdc/md/${projectId}/obj/949`)
    .localIdentifier('CountProduct')
    .title('<button>Count Product</button>')
    .aggregation('count')
    ;
const m_MinAmount = Model.measure(`/gdc/md/${projectId}/obj/1144`)
    .localIdentifier('MinAmount')
    .title('<button>Min Amount</button>')
    .aggregation('min')
    ;
const m_SnapshotBOP = Model.measure(`/gdc/md/${projectId}/obj/2723`).localIdentifier('SnapshotBOP');

const m_AmountBOP = Model.measure(`/gdc/md/${projectId}/obj/2858`).localIdentifier('AmountBOP');
const m_AvgAmount = Model.measure(`/gdc/md/${projectId}/obj/62827`);
const m_AvgWon = Model.measure(`/gdc/md/${projectId}/obj/1281`);

const a_Account = Model.attribute(`label.account.id.name`).localIdentifier('Account');
//or const a_Account = Model.attribute(`/gdc/md/${projectId}/obj/970`);
const a_Activity = Model.attribute(`label.activity.id.subject`).localIdentifier('Activity');
//or const a_Activity = Model.attribute(`/gdc/md/${projectId}/obj/1254`);
const a_Product = Model.attribute('label.product.id.name').localIdentifier('ProductName');
//const CompuSci = Model.attribute([`/gdc/md/${projectId}/obj/949/elements?id=168279`]);
const a_StageName = Model.attribute('label.stage.name.stagename').localIdentifier('StageName');
const a_Department = Model.attribute('label.owner.department').localIdentifier('Department');
const a_FirstName = Model.attribute('label.persons.firstname').localIdentifier('Firstname');
const a_Lastname = Model.attribute('label.persons.lastname').localIdentifier('Lastname');
const a_Address = Model.attribute('label.persons.address').localIdentifier('Address');
const a_StartFrom = Model.attribute('startfrom.aag81lMifn6q').localIdentifier('YearStartFrom');
const a_YearClosed = Model.attribute('closed.aag81lMifn6q').localIdentifier('YearClosed');
const a_YearSnapshot = Model.attribute('snapshot.aag81lMifn6q').localIdentifier('YearSnapshot');

//geo pushpin corona virus
const g_Corona = Model.attribute(`/gdc/md/${projectId}/obj/77941`);
const g_Country = Model.attribute(`/gdc/md/${projectId}/obj/77939`);
const m_SumCases = Model.measure(`/gdc/md/${projectId}/obj/77973`)
    .localIdentifier('SumCases');
const absoluteYearCorona = Model.absoluteDateFilter('date.dataset.dt', '2020-03-30', '2020-03-30');

//geo pushpin too large
const g_Latlon1 = Model.attribute(`/gdc/md/${projectId}/obj/77307`);

//geo pushpin
const g_Latlon = Model.attribute(`/gdc/md/${projectId}/obj/77094`).alias('<button>LatLon</button>');
const a_Zip = Model.attribute(`/gdc/md/${projectId}/obj/77080`).alias('Zip');
const a_City = Model.attribute(`/gdc/md/${projectId}/obj/77082`).alias('City');
const a_State = Model.attribute(`/gdc/md/${projectId}/obj/77084`).alias('State').localIdentifier('State');
const a_Timezone = Model.attribute(`/gdc/md/${projectId}/obj/77090`).alias('Timezone');
const a_DST = Model.attribute(`/gdc/md/${projectId}/obj/77092`).alias('DST');

const m_SumPopulation = Model.measure(`/gdc/md/${projectId}/obj/77185`).localIdentifier('SumPopulation').alias('Sum Population');
const m_SumPopulationFormat = Model.measure(`/gdc/md/${projectId}/obj/77185`)
        .localIdentifier('SumPopulationFormat')
        .format('[>=60000000][color=2190c0]█████ #,##0; [>=170000][color=2190c0]████░ #,##0; [>=600][color=2190c0]███░░ #,##0; [>=500][color=2190c0]██░░░ #,##0; [>=0][color=2190c0]█░░░░ #,##0; [=Null] No data;')
        .alias('Sum Population Format');
const m_SumPopulationRatio = Model.measure(`/gdc/md/${projectId}/obj/77185`).ratio().localIdentifier('SumPopulationRatio').alias('Sum Population Ratio')
const m_MinPopulation = Model.measure(`/gdc/md/${projectId}/obj/77186`).localIdentifier('MinPopulation').alias('Min Population');
const m_MinPopulationRatio = Model.measure(`/gdc/md/${projectId}/obj/77186`).ratio().localIdentifier('MinPopulationRatio').alias('Min Population Ratio')
const m_MaxPopulation = Model.measure(`/gdc/md/${projectId}/obj/77187`).localIdentifier('MaxPopulation');
const m_SumLaBorPopulation = Model.measure(`/gdc/md/${projectId}/obj/77197`).localIdentifier('SumLaBorPopulation');
const m_MinLaBorPopulation = Model.measure(`/gdc/md/${projectId}/obj/77198`).localIdentifier('MinLaBorPopulation');
const m_Sum_SumPopulation = Model.arithmeticMeasure(['SumPopulation', 'SumPopulation'], 'sum').localIdentifier('AM_Sum_Population').alias('AM SUM Population');
const m_Difference_SumPopulation = Model.arithmeticMeasure(['SumPopulation', 'SumPopulation'], 'difference').localIdentifier('AM_Difference_Population').alias('AM difference Population');;
const m_Ratio_SumPopulation = Model.arithmeticMeasure(['SumPopulation', 'SumPopulation'], 'ratio').localIdentifier('AM_Ratio_Population').alias('AM ratio Population');
const m_Change_SumPopulation = Model.arithmeticMeasure(['SumPopulation', 'SumPopulation'], 'change').localIdentifier('AM_Change_Population').alias('AM change Population');
const m_Multiplication_SumPopulation = Model.arithmeticMeasure(['SumPopulation', 'SumPopulation'], 'multiplication').localIdentifier('AM_Multiplication_Population').alias('AM SUM Population');
const m_POP_SumPopulation = Model.popMeasure('SumPopulation', `/gdc/md/${projectId}/obj/513`)
    .localIdentifier('POP_SumPopulation')
    .alias('POP SumPopulation');
const m_PP_SumPopulation = Model.previousPeriodMeasure('SumDayToClose', [{ dataSet: `/gdc/md/${projectId}/obj/520`, periodsAgo: 1 }])
    .localIdentifier('PP_SumPopulation')
    .alias('PP SumPopulation');

const filterCity = Model.positiveAttributeFilter(`/gdc/md/${projectId}/obj/77082`, [
    `/gdc/md/${projectId}/obj/77081/elements?id=475`,
    `/gdc/md/${projectId}/obj/77081/elements?id=312`]);
const filterCity1value = Model.positiveAttributeFilter(`/gdc/md/${projectId}/obj/77082`, [
    `/gdc/md/${projectId}/obj/77081/elements?id=312`]);
const filterState = Model.positiveAttributeFilter('label.geopushpin.state', ["VI", "NY", "PR"], true);
const filterTimezoneNegative = Model.negativeAttributeFilter('label.geopushpin.timezone', ["-4"], true);
const filterDSTNegative = Model.negativeAttributeFilter(`/gdc/md/${projectId}/obj/77092`, [`/gdc/md/${projectId}/obj/77091/elements?id=321`]);
const filterabsoluteYearSnapshot = Model.absoluteDateFilter('snapshot.dataset.dt', '2019-03-13', '2019-03-14');
const filterrelativeYearSnapshot = Model.relativeDateFilter('snapshot.dataset.dt', 'GDC.time.date', -2, 0);

const filterAmount_GreaterThan = {
    measureValueFilter: {
        measure: {
            localIdentifier: "Amount"
        },
        condition: {
            comparison: {
                operator: "GREATER_THAN",
                value: 5000000
            }
        }
    }
};

const filterAmount_GreaterThan_samevalue = {
    measureValueFilter: {
        measure: {
            localIdentifier: "Amount"
        },
        condition: {
            comparison: {
                operator: "GREATER_THAN",
                value: 5000000
            }
        }
    }
};

const filterAmount_GreaterThan_differencevalue = {
    measureValueFilter: {
        measure: {
            localIdentifier: "Amount"
        },
        condition: {
            comparison: {
                operator: "GREATER_THAN",
                value: 1000000
            }
        }
    }
};

const filterAmount_LessThan = {
    measureValueFilter: {
        measure: {
            localIdentifier: "Amount"
        },
        condition: {
            comparison: {
                operator: "LESS_THAN",
                value: 1000000
            }
        }
    }
};

const filterChange_EqualTo = {
    measureValueFilter: {
        measure: {
            localIdentifier: "ChangeClosedBOPSnapshotBOP"
        },
        condition: {
            comparison: {
                operator: "EQUAL_TO",
                value: -1
            }
        }
    }
};

const filterAmountNegative_NotEqualTo =
{
    measureValueFilter: {
        measure: {
            localIdentifier: "AmountNegative"
        },
        condition: {
            comparison: {
                operator: "NOT_EQUAL_TO",
                value: 57025
            }
        }
    }
};

const filterAmount_NotBetween = {
    measureValueFilter: {
        measure: {
            localIdentifier: "Amount"
        },
        condition: {
            range: {
                operator: "NOT_BETWEEN",
                from: 0,
                to: 20000000
            }
        }

    }
};

const filterAmountRatio_GreaterThan =
{
    measureValueFilter: {
        measure: {
            localIdentifier: "AmountRatio"
        },
        condition: {
            comparison: {
                operator: "GREATER_THAN",
                value: 5000000
            }
        }
    }
};
const filterAmountRatio_LessThan =
{
    measureValueFilter: {
        measure: {
            localIdentifier: "AmountRatio"
        },
        condition: {
            comparison: {
                operator: "LESS_THAN",
                value: 50000000
            }
        }
    }
};

const filterPOPSumDayToClose_Between =
{
    measureValueFilter: {
        measure: {
            localIdentifier: "POP_SumDayToClose"
        },
        condition: {
            range: {
                operator: "BETWEEN",
                from: 20000,
                to: 100000
            }
        }
    }
};
const filterAmountNullFormat_GreaterThanOrEqualTo =
{
    measureValueFilter: {
        measure: {
            localIdentifier: "Amount"
        },
        condition: {
            comparison: {
                operator: "GREATER_THAN_OR_EQUAL_TO",
                value: 5000000
            }
        }
    }
};
const filterActivityRestricted_LessThanOrEqualTo =
{
    measureValueFilter: {
        measure: {
            localIdentifier: "ActivityRestricted"
        },
        condition: {
            comparison: {
                operator: "LESS_THAN_OR_EQUAL_TO",
                value: 5000000
            }
        }
    }
};

const filterSumPopulation_LessThanOrEqualTo =
{
    measureValueFilter: {
        measure: {
            localIdentifier: "SumPopulation"
        },
        condition: {
            comparison: {
                operator: "LESS_THAN_OR_EQUAL_TO",
                value: 50
            }
        }
    }
};
const filterMinPopulation_EqualTo =
{
    measureValueFilter: {
        measure: {
            localIdentifier: "MinPopulation"
        },
        condition: {
            comparison: {
                operator: "EQUAL_TO",
                value: -10000
            }
        }
    }
};
const filterSumPopulation_Between =
{
    measureValueFilter: {
        measure: {
            localIdentifier: "SumPopulation"
        },
        condition: {
            range: {
                operator: "BETWEEN",
                from: 0,
                to: 50
            }
        }
    }
};
const filterSumPopulation_Equal =
{
    measureValueFilter: {
        measure: {
            localIdentifier: "SumPopulation"
        },
        condition: {
            comparison: {
                operator: "EQUAL_TO",
                value: 6
            }
        }
    }
};
const s_sortbyStageNameTotal =
{
    attributeSortItem: {
        direction: 'desc',
        attributeIdentifier: 'StageName',
        aggregation: 'sum'
    }
};

const s_sortbyProductTotal =
{
    attributeSortItem: {
        aggregation: 'sum',
        direction: 'desc',
        attributeIdentifier: 'ProductName'

    }
};
const s_sortonProductDesc = Model.attributeSortItem('ProductName', 'desc');

const s_sortByAmountGrammarPlusDesc = Model.measureSortItem('Amount', 'desc')
    .attributeLocators({
        attributeIdentifier: 'ProductName',
        element: `/gdc/md/${projectId}/obj/949/elements?id=168284`
    });

const s_sortByClosedBOPDescWithDepartment = Model.measureSortItem('ClosedBOP', 'desc')
    .attributeLocators({
        attributeIdentifier: 'Department',
        element: `/gdc/md/${projectId}/obj/1026/elements?id=1226`
    });

const s_sortByAmountDesc = Model.measureSortItem('Amount', 'desc');
const s_sortByClosedBOPDesc = Model.measureSortItem('ClosedBOP', 'desc');

const s_sortByYearClosedAsc = Model.attributeSortItem('YearClosed', 'asc');
const s_sortByYearSnapshotDesc = Model.attributeSortItem('YearSnapshot', 'desc');

const s_sortByYearClosedSumClosedBOP = {
    attributeSortItem: {
        direction: 'desc',   // or 'desc',
        attributeIdentifier: 'StageName',
        aggregation: 'avg' // Optional;
    }
};

const t_totalsPivotTable =
{
    measureIdentifier: 'Amount',
    type: 'avg',
    attributeIdentifier: 'StageName'
};

// add more totals in pivot table
const t_parentTotalsOnPivotTable = [
    {
        measureIdentifier: 'Amount',
        type: 'sum',
        attributeIdentifier: 'YearClosed'
    },
    {
        measureIdentifier: 'Amount',
        type: 'max',
        attributeIdentifier: 'YearClosed'
    },
    {
        measureIdentifier: 'Amount',
        type: 'min',
        attributeIdentifier: 'YearClosed'
    },
    {
        measureIdentifier: 'Amount',
        type: 'avg',
        attributeIdentifier: 'YearClosed'
    },
    {
        measureIdentifier: 'Amount',
        type: 'med',
        attributeIdentifier: 'YearClosed'
    },
    {
        measureIdentifier: 'Amount',
        type: 'nat',
        attributeIdentifier: 'YearClosed'
    },
    {
        measureIdentifier: 'ClosedBOP',
        type: 'sum',
        attributeIdentifier: 'YearClosed'
    },
    {
        measureIdentifier: 'ClosedBOP',
        type: 'max',
        attributeIdentifier: 'YearClosed'
    },
    {
        measureIdentifier: 'ClosedBOP',
        type: 'min',
        attributeIdentifier: 'YearClosed'
    },
    {
        measureIdentifier: 'ClosedBOP',
        type: 'avg',
        attributeIdentifier: 'YearClosed'
    },
    {
        measureIdentifier: 'ClosedBOP',
        type: 'med',
        attributeIdentifier: 'YearClosed'
    },
    {
        measureIdentifier: 'ClosedBOP',
        type: 'nat',
        attributeIdentifier: 'YearClosed'
    }
];

const t_childTotalsOnPivotTable = [
    {
        measureIdentifier: 'Amount',
        type: 'sum',
        attributeIdentifier: 'StageName'
    },
    {
        measureIdentifier: 'Amount',
        type: 'max',
        attributeIdentifier: 'StageName'
    },
    {
        measureIdentifier: 'Amount',
        type: 'min',
        attributeIdentifier: 'StageName'
    },
    {
        measureIdentifier: 'Amount',
        type: 'avg',
        attributeIdentifier: 'StageName'
    },
    {
        measureIdentifier: 'Amount',
        type: 'med',
        attributeIdentifier: 'StageName'
    },
    {
        measureIdentifier: 'Amount',
        type: 'nat',
        attributeIdentifier: 'StageName'
    },
    {
        measureIdentifier: 'ClosedBOP',
        type: 'sum',
        attributeIdentifier: 'StageName'
    },
    {
        measureIdentifier: 'ClosedBOP',
        type: 'max',
        attributeIdentifier: 'StageName'
    },
    {
        measureIdentifier: 'ClosedBOP',
        type: 'min',
        attributeIdentifier: 'StageName'
    },
    {
        measureIdentifier: 'ClosedBOP',
        type: 'avg',
        attributeIdentifier: 'StageName'
    },
    {
        measureIdentifier: 'ClosedBOP',
        type: 'med',
        attributeIdentifier: 'StageName'
    },
    {
        measureIdentifier: 'ClosedBOP',
        type: 'nat',
        attributeIdentifier: 'StageName'
    }
];

const t_bothParentandChildTotalsOnPivotTable = [
    {
        measureIdentifier: 'Amount',
        type: 'sum',
        attributeIdentifier: 'StageName'
    },
    {
        measureIdentifier: 'Amount',
        type: 'max',
        attributeIdentifier: 'StageName'
    },
    {
        measureIdentifier: 'Amount',
        type: 'min',
        attributeIdentifier: 'StageName'
    },
    {
        measureIdentifier: 'Amount',
        type: 'avg',
        attributeIdentifier: 'StageName'
    },
    {
        measureIdentifier: 'Amount',
        type: 'med',
        attributeIdentifier: 'StageName'
    },
    {
        measureIdentifier: 'Amount',
        type: 'nat',
        attributeIdentifier: 'StageName'
    },
    {
        measureIdentifier: 'Amount',
        type: 'sum',
        attributeIdentifier: 'YearClosed'
    },
    {
        measureIdentifier: 'Amount',
        type: 'max',
        attributeIdentifier: 'YearClosed'
    },
    {
        measureIdentifier: 'Amount',
        type: 'min',
        attributeIdentifier: 'YearClosed'
    },
    {
        measureIdentifier: 'Amount',
        type: 'avg',
        attributeIdentifier: 'YearClosed'
    },
    {
        measureIdentifier: 'Amount',
        type: 'med',
        attributeIdentifier: 'YearClosed'
    },
    {
        measureIdentifier: 'Amount',
        type: 'nat',
        attributeIdentifier: 'YearClosed'
    }
];

//Set protected attribute
const a_Opportunity = Model.attribute('label.opportunity.id.name').localIdentifier('Opportunity');
//Set masked for attribute
const a_Priority = Model.attribute('label.activity.priority').localIdentifier('Priority ');



export default {
    backendUrlForInfo,
    projectId,
    filterProduct,
    filterProductNegative,
    filterProductCompuSci,
    filterProductTouchAll,
    filterStageName,
    filterStageNameNegative,
    filterStageNameInterest,
    filterFirstName,
    filterFirstNameAnh,
    filterDepartment,
    filterStageNameInterestShortList,
    filterProductExplorerGrammarPlus,
    filterAmount_LessThan,
    filterAmountRatio_LessThan,
    filterAmount_GreaterThan_samevalue,
    filterAmount_GreaterThan_differencevalue,
    filterAmount_GreaterThan,
    filterAmountRatio_GreaterThan,
    filterPOPSumDayToClose_Between,
    filterChange_EqualTo,
    filterAmount_NotBetween,
    filterAmountNegative_NotEqualTo,
    filterAmountNullFormat_GreaterThanOrEqualTo,
    filterActivityRestricted_LessThanOrEqualTo,
    absoluteDate,
    absoluteYearSnapshot,
    relativeYearSnapshot,
    relativeDateYear,
    relativeDateQuater,
    relativeDateWeek,
    relativeDateWeekUs,
    relativeDateMonth,
    relativeDateYearSnapshot,
    a_Account,
    a_Activity,
    a_Address,
    a_Department,
    a_FirstName,
    a_Lastname,
    a_Product,
    a_StageName,
    a_StartFrom,
    a_YearClosed,
    a_YearSnapshot,
    a_Opportunity,
    a_Priority,
    m_AmountRatio,
    m_AmountNegative,
    m_AmountNullFormat,
    m_ActivityRestricted,
    m_AmountDuplicate,
    m_AmountBOP,
    m_AvgAmount,
    m_AvgWon,
    m_SumDayToCloseRatio,
    m_SumDayToClose,
    m_Change_ClosedBOP_SnapshotBOP,
    m_Difference_ClosedBOP_SnapshotBOP,
    m_Multiplication_ClosedBOP_SnapshotBOP,
    m_POP_SumDayToClose,
    m_PP_SumDayToClose,
    m_Ratio_ClosedBOP_SnapshotBOP,
    m_Sum_ClosedBOP_SnapshotBOP,
    m_MinPaid,
    m_SumSalary,
    m_OppFirstSnapshot,
    m_SnapshotEOP,
    m_SnapshotBOP,
    m_OpenOpps,
    m_CountStageHistory,
    m_changeOfOpenOppsAndCountStageHistory,
    m_ratioOfOpenOppsAndCountStageHistory,
    m_CountStageHistoryRatio,
    m_Amount,
    m_ClosedEOP,
    m_ClosedBOP,
    m_CountProduct,
    m_MinAmount,
    t_parentTotalsOnPivotTable,
    t_childTotalsOnPivotTable,
    t_bothParentandChildTotalsOnPivotTable,
    s_sortByClosedBOPDesc,
    s_sortbyStageNameTotal,
    s_sortbyProductTotal,
    s_sortonProductDesc,
    s_sortByAmountDesc,
    s_sortByAmountGrammarPlusDesc,
    s_sortByClosedBOPDescWithDepartment,
    s_sortByYearClosedAsc,
    s_sortByYearSnapshotDesc,
    s_sortByYearClosedSumClosedBOP,
    g_Latlon,
    m_SumPopulation,
    m_SumPopulationFormat,
    m_MinPopulation,
    m_MaxPopulation,
    a_City,
    a_Zip,
    a_DST,
    a_State,
    a_Timezone,
    filterSumPopulation_LessThanOrEqualTo,
    filterMinPopulation_EqualTo,
    filterCity,
    filterSumPopulation_Between,
    filterSumPopulation_Equal,
    m_SumLaBorPopulation,
    m_MinLaBorPopulation,
    filterTimezoneNegative,
    filterabsoluteYearSnapshot,
    filterrelativeYearSnapshot,
    filterDSTNegative,
    filterState,
    g_Latlon1,
    g_Corona,
    g_Country,
    m_SumCases,
    absoluteYearCorona,
    m_POP_SumPopulation,
    m_PP_SumPopulation,
    m_SumPopulationRatio,
    m_MinPopulationRatio,
    filterCity1value,
    m_Sum_SumPopulation,
    m_Difference_SumPopulation,
    m_Ratio_SumPopulation,
    m_Change_SumPopulation,
    m_Multiplication_SumPopulation
};
