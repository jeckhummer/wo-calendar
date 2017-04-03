const tasksB = [
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse libero alias, ab placeat vel quibusdam facere obcaecati ex, saepe fugiat, repellendus qui numquam consequatur, quas quo amet velit aperiam natus.',
        WOTNumber: '90',
        WONumber: '1084',
        WODisplayNumber: "1190",
        WOTDisplayNumber: "221084",
        start: new Date('15 Mar 2017 11:30:00'),
        end: new Date('16 Mar 2017 11:00:00'),
        teamID: '2',
        teamMember: 'Teymur Ordukhanov',
        phase: 'Execution',
        status: 'awaiting submission'
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse libero alias, ab placeat vel quibusdam facere obcaecati ex, saepe fugiat.',
        WOTNumber: '89',
        WONumber: '1085',
        WODisplayNumber: "1189",
        WOTDisplayNumber: "221085",
        start: new Date('15 Mar 2017 08:30:00'),
        end: new Date('15 Mar 2017 12:00:00'),
        teamID: '2',
        teamMember: 'Teymur Ordukhanov',
        phase: 'Execution',
        status: 'task on hold'
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse libero alias, ab placeat vel quibusdam facere obcaecati ex, saepe fugiat.',
        WOTNumber: '91',
        WONumber: '1086',
        WODisplayNumber: "1191",
        WOTDisplayNumber: "221086",
        start: new Date('16 Mar 2017 08:00:00'),
        end: new Date('16 Mar 2017 12:00:00'),
        teamID: '1',
        teamMember: 'Teymur Ordukhanov',
        phase: 'Execution',
        status: 'task waiting for assignment'
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse libero alias, ab placeat vel quibusdam facere obcaecati ex, saepe fugiat.',
        WOTNumber: '92',
        WONumber: '1086',
        WODisplayNumber: "1192",
        WOTDisplayNumber: "221086",
        start: new Date('16 Mar 2017 09:00:00'),
        end: new Date('16 Mar 2017 14:30:00'),
        teamID: '4',
        teamMember: 'Sattar Seyidov',
        phase: 'Execution',
        status: 'task execution in progress'
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse libero alias, ab placeat vel quibusdam facere obcaecati ex, saepe fugiat.',
        WOTNumber: '93',
        WONumber: '1085',
        WODisplayNumber: "1193",
        WOTDisplayNumber: "221085",
        start: new Date('16 Mar 2017 12:00:00'),
        end: new Date('16 Mar 2017 15:00:00'),
        teamID: '3',
        teamMember: 'Sattar Seyidov',
        phase: 'Execution',
        status: 'task rejected'
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse libero alias, ab placeat vel quibusdam facere obcaecati ex, saepe fugiat.',
        WOTNumber: '94',
        WONumber: '1085',
        WODisplayNumber: "1194",
        WOTDisplayNumber: "221085",
        start: new Date('17 Mar 2017 08:45:00'),
        end: new Date('17 Mar 2017 12:00:00'),
        teamID: '1',
        teamMember: null,
        phase: 'Execution',
        status: 'canceled'
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse libero alias, ab placeat vel quibusdam facere obcaecati ex, saepe fugiat.',
        WOTNumber: '95',
        WONumber: '1084',
        WODisplayNumber: "1195",
        WOTDisplayNumber: "221084",
        start: new Date('17 Mar 2017 10:00:00'),
        end: new Date('17 Mar 2017 12:30:00'),
        teamID: '3',
        teamMember: 'Teymur Mustafayev',
        phase: 'Execution',
        status: 'draft wo'
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse libero alias, ab placeat vel quibusdam facere obcaecati ex, saepe fugiat.',
        WOTNumber: '96',
        WONumber: '1084',
        WODisplayNumber: "1196",
        WOTDisplayNumber: "221084",
        start: new Date('17 Mar 2017 13:00:00'),
        end: new Date('17 Mar 2017 16:30:00'),
        teamID: '2',
        teamMember: 'Teymur Mustafayev',
        phase: 'Execution',
        status: 'task rejected'
    },
];

const teamsB = [
    {id: '1', name: 'Red Team', active: true},
    {id: '2', name: 'Green Team', active: true},
    {id: '3', name: 'Blue Team', active: true},
    {id: '4', name: 'Yellow Team', active: true},
];

const tasksA = [
{
    "description": "Planned Work Request",
    "WOTNumber": "63793",
    "WONumber": "8645",
    "WODisplayNumber": "WO#00179",
    "WOTDisplayNumber": "TSK#00544",
    "start": "01 Apr 2017 09:00:00",
    "end": "01 Apr 2017 20:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Waiting for HOX"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63787",
    "WONumber": "8637",
    "WODisplayNumber": "WO#00177",
    "WOTDisplayNumber": "TSK#00538",
    "start": "01 Apr 2017 10:00:00",
    "end": "01 Apr 2017 12:00:00",
    "teamID": "1025",
    "teamMember": "AydinA",
    "phase": "Execution",
    "status": "Waiting for HOX"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63784",
    "WONumber": "8633",
    "WODisplayNumber": "WO#00176",
    "WOTDisplayNumber": "TSK#00535",
    "start": "02 Apr 2017 22:00:00",
    "end": "03 Apr 2017 08:00:00",
    "teamID": "1025",
    "teamMember": "Huseyn Ziyadov ",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63781",
    "WONumber": "8629",
    "WODisplayNumber": "WO#00175",
    "WOTDisplayNumber": "TSK#00532",
    "start": "04 Jan 2017 10:00:00",
    "end": "04 Jan 2017 12:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Canceled"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63772",
    "WONumber": "8617",
    "WODisplayNumber": "WO#00172",
    "WOTDisplayNumber": "TSK#00523",
    "start": "01 Apr 2017 02:00:00",
    "end": "01 Apr 2017 08:00:00",
    "teamID": "1025",
    "teamMember": "Elshad Sarkharov",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63769",
    "WONumber": "8613",
    "WODisplayNumber": "WO#00171",
    "WOTDisplayNumber": "TSK#00520",
    "start": "01 Apr 2017 09:00:00",
    "end": "01 Apr 2017 20:00:00",
    "teamID": "1025",
    "teamMember": "AydinA",
    "phase": "Execution",
    "status": "Waiting for HOX"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63766",
    "WONumber": "8609",
    "WODisplayNumber": "WO#00170",
    "WOTDisplayNumber": "TSK#00517",
    "start": "31 Mar 2017 16:00:00",
    "end": "31 Mar 2017 18:00:00",
    "teamID": "1025",
    "teamMember": "Aliyev, Rashad",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63760",
    "WONumber": "8601",
    "WODisplayNumber": "WO#00168",
    "WOTDisplayNumber": "TSK#00511",
    "start": "01 Apr 2017 09:00:00",
    "end": "01 Apr 2017 20:00:00",
    "teamID": "1025",
    "teamMember": "Ilham Orujlu",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63754",
    "WONumber": "8593",
    "WODisplayNumber": "WO#00166",
    "WOTDisplayNumber": "TSK#00505",
    "start": "01 Apr 2017 02:00:00",
    "end": "01 Apr 2017 04:00:00",
    "teamID": "1025",
    "teamMember": "Javid Shahmuradov",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63748",
    "WONumber": "8585",
    "WODisplayNumber": "WO#00164",
    "WOTDisplayNumber": "TSK#00499",
    "start": "31 Mar 2017 14:00:00",
    "end": "31 Mar 2017 18:00:00",
    "teamID": "1025",
    "teamMember": "Elshad Sarkharov",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63745",
    "WONumber": "8581",
    "WODisplayNumber": "WO#00163",
    "WOTDisplayNumber": "TSK#00496",
    "start": "01 Apr 2017 00:00:00",
    "end": "01 Apr 2017 02:00:00",
    "teamID": "1025",
    "teamMember": "Javid Shahmuradov",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63733",
    "WONumber": "8565",
    "WODisplayNumber": "WO#00159",
    "WOTDisplayNumber": "TSK#00484",
    "start": "31 Mar 2017 15:00:00",
    "end": "31 Mar 2017 16:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63727",
    "WONumber": "8557",
    "WODisplayNumber": "WO#00157",
    "WOTDisplayNumber": "TSK#00478",
    "start": "31 Mar 2017 15:00:00",
    "end": "31 Mar 2017 16:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63724",
    "WONumber": "8553",
    "WODisplayNumber": "WO#00156",
    "WOTDisplayNumber": "TSK#00475",
    "start": "01 Apr 2017 09:00:00",
    "end": "01 Apr 2017 18:00:00",
    "teamID": "1025",
    "teamMember": "Rashad Nabiyev",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63721",
    "WONumber": "8549",
    "WODisplayNumber": "WO#00155",
    "WOTDisplayNumber": "TSK#00472",
    "start": "31 Mar 2017 11:00:00",
    "end": "31 Mar 2017 20:00:00",
    "teamID": "1025",
    "teamMember": "Ilham Orujlu",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63718",
    "WONumber": "8545",
    "WODisplayNumber": "WO#00154",
    "WOTDisplayNumber": "TSK#00469",
    "start": "31 Mar 2017 11:00:00",
    "end": "31 Mar 2017 20:00:00",
    "teamID": "1025",
    "teamMember": "Ilham Orujlu",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63706",
    "WONumber": "8529",
    "WODisplayNumber": "WO#00150",
    "WOTDisplayNumber": "TSK#00457",
    "start": "31 Mar 2017 11:00:00",
    "end": "31 Mar 2017 20:00:00",
    "teamID": "1025",
    "teamMember": "Ilham Orujlu",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63703",
    "WONumber": "8525",
    "WODisplayNumber": "WO#00149",
    "WOTDisplayNumber": "TSK#00454",
    "start": "31 Mar 2017 14:00:00",
    "end": "31 Mar 2017 18:00:00",
    "teamID": "1025",
    "teamMember": "Marat Sirayev",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63700",
    "WONumber": "8521",
    "WODisplayNumber": "WO#00148",
    "WOTDisplayNumber": "TSK#00451",
    "start": "31 Mar 2017 15:00:00",
    "end": "31 Mar 2017 17:00:00",
    "teamID": "1025",
    "teamMember": "Rustamov, Elvin",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63697",
    "WONumber": "8517",
    "WODisplayNumber": "WO#00147",
    "WOTDisplayNumber": "TSK#00448",
    "start": "31 Mar 2017 11:30:00",
    "end": "31 Mar 2017 18:00:00",
    "teamID": "1025",
    "teamMember": "Javid Shahmuradov",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63688",
    "WONumber": "8505",
    "WODisplayNumber": "WO#00144",
    "WOTDisplayNumber": "TSK#00439",
    "start": "31 Mar 2017 15:00:00",
    "end": "01 Apr 2017 12:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Canceled"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63685",
    "WONumber": "8501",
    "WODisplayNumber": "WO#00143",
    "WOTDisplayNumber": "TSK#00436",
    "start": "31 Mar 2017 11:00:00",
    "end": "31 Mar 2017 20:00:00",
    "teamID": "1025",
    "teamMember": "Ilham Orujlu",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63682",
    "WONumber": "8497",
    "WODisplayNumber": "WO#00142",
    "WOTDisplayNumber": "TSK#00433",
    "start": "31 Mar 2017 16:30:00",
    "end": "31 Mar 2017 18:00:00",
    "teamID": "1025",
    "teamMember": "Sadig Mammadov",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63676",
    "WONumber": "8489",
    "WODisplayNumber": "WO#00140",
    "WOTDisplayNumber": "TSK#00427",
    "start": "31 Mar 2017 11:00:00",
    "end": "31 Mar 2017 18:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63673",
    "WONumber": "8485",
    "WODisplayNumber": "WO#00139",
    "WOTDisplayNumber": "TSK#00424",
    "start": "31 Mar 2017 13:00:00",
    "end": "31 Mar 2017 15:00:00",
    "teamID": "1025",
    "teamMember": "Sadig Mammadov",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63670",
    "WONumber": "8481",
    "WODisplayNumber": "WO#00138",
    "WOTDisplayNumber": "TSK#00421",
    "start": "31 Mar 2017 12:00:00",
    "end": "31 Mar 2017 18:00:00",
    "teamID": "1025",
    "teamMember": "Hatam Shukur",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63664",
    "WONumber": "8473",
    "WODisplayNumber": "WO#00136",
    "WOTDisplayNumber": "TSK#00415",
    "start": "31 Mar 2017 13:00:00",
    "end": "31 Mar 2017 15:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Canceled"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63661",
    "WONumber": "8469",
    "WODisplayNumber": "WO#00135",
    "WOTDisplayNumber": "TSK#00412",
    "start": "31 Mar 2017 14:00:00",
    "end": "31 Mar 2017 16:00:00",
    "teamID": "1025",
    "teamMember": "Sadig Mammadov",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63658",
    "WONumber": "8465",
    "WODisplayNumber": "WO#00134",
    "WOTDisplayNumber": "TSK#00409",
    "start": "31 Mar 2017 11:00:00",
    "end": "31 Mar 2017 15:00:00",
    "teamID": "1025",
    "teamMember": "Farkhad Alakbarov",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63652",
    "WONumber": "8457",
    "WODisplayNumber": "WO#00132",
    "WOTDisplayNumber": "TSK#00403",
    "start": "31 Mar 2017 11:00:00",
    "end": "31 Mar 2017 12:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63646",
    "WONumber": "8449",
    "WODisplayNumber": "WO#00130",
    "WOTDisplayNumber": "TSK#00397",
    "start": "31 Mar 2017 00:00:00",
    "end": "31 Mar 2017 04:00:00",
    "teamID": "1025",
    "teamMember": "Huseyn Ziyadov ",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63637",
    "WONumber": "8437",
    "WODisplayNumber": "WO#00127",
    "WOTDisplayNumber": "TSK#00388",
    "start": "30 Mar 2017 22:00:00",
    "end": "31 Mar 2017 01:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63634",
    "WONumber": "8433",
    "WODisplayNumber": "WO#00126",
    "WOTDisplayNumber": "TSK#00385",
    "start": "30 Mar 2017 17:00:00",
    "end": "30 Mar 2017 18:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63625",
    "WONumber": "8421",
    "WODisplayNumber": "WO#00123",
    "WOTDisplayNumber": "TSK#00376",
    "start": "31 Mar 2017 00:00:00",
    "end": "31 Mar 2017 04:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Canceled"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63607",
    "WONumber": "8397",
    "WODisplayNumber": "WO#00117",
    "WOTDisplayNumber": "TSK#00358",
    "start": "31 Mar 2017 09:30:00",
    "end": "31 Mar 2017 12:00:00",
    "teamID": "1025",
    "teamMember": "Rashad Hasanli",
    "phase": "Execution",
    "status": "Waiting for HOX"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63604",
    "WONumber": "8393",
    "WODisplayNumber": "WO#00116",
    "WOTDisplayNumber": "TSK#00355",
    "start": "01 Jan 1900 00:00:00",
    "end": "31 Mar 2017 12:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Canceled"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63601",
    "WONumber": "8389",
    "WODisplayNumber": "WO#00115",
    "WOTDisplayNumber": "TSK#00352",
    "start": "30 Mar 2017 15:00:00",
    "end": "30 Mar 2017 18:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63598",
    "WONumber": "8385",
    "WODisplayNumber": "WO#00114",
    "WOTDisplayNumber": "TSK#00349",
    "start": "31 Mar 2017 00:00:00",
    "end": "31 Mar 2017 02:00:00",
    "teamID": "1025",
    "teamMember": "Rustam Amirguliyev",
    "phase": "Execution",
    "status": "Task Rejected"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63589",
    "WONumber": "8373",
    "WODisplayNumber": "WO#00111",
    "WOTDisplayNumber": "TSK#00340",
    "start": "01 Jan 1900 00:00:00",
    "end": "30 Mar 2017 12:00:00",
    "teamID": "1025",
    "teamMember": "Rasim Aliyev ",
    "phase": "Execution",
    "status": "Task Failed"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63577",
    "WONumber": "8357",
    "WODisplayNumber": "WO#00107",
    "WOTDisplayNumber": "TSK#00328",
    "start": "30 Mar 2017 11:00:00",
    "end": "30 Mar 2017 14:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63568",
    "WONumber": "8345",
    "WODisplayNumber": "WO#00104",
    "WOTDisplayNumber": "TSK#00319",
    "start": "30 Mar 2017 10:00:00",
    "end": "30 Mar 2017 18:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63562",
    "WONumber": "8337",
    "WODisplayNumber": "WO#00102",
    "WOTDisplayNumber": "TSK#00313",
    "start": "30 Mar 2017 04:00:00",
    "end": "30 Mar 2017 06:00:00",
    "teamID": "1025",
    "teamMember": "Javid Shahmuradov",
    "phase": "Execution",
    "status": "Task Rejected"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63559",
    "WONumber": "8333",
    "WODisplayNumber": "WO#00101",
    "WOTDisplayNumber": "TSK#00310",
    "start": "30 Mar 2017 02:00:00",
    "end": "30 Mar 2017 04:00:00",
    "teamID": "1025",
    "teamMember": "Javid Shahmuradov",
    "phase": "Execution",
    "status": "Task Rejected"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63553",
    "WONumber": "8325",
    "WODisplayNumber": "WO#00099",
    "WOTDisplayNumber": "TSK#00304",
    "start": "30 Mar 2017 00:00:00",
    "end": "30 Mar 2017 02:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63547",
    "WONumber": "8317",
    "WODisplayNumber": "WO#00097",
    "WOTDisplayNumber": "TSK#00298",
    "start": "30 Mar 2017 00:00:00",
    "end": "30 Mar 2017 06:00:00",
    "teamID": "1025",
    "teamMember": "Elshan Hasanov",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63544",
    "WONumber": "8313",
    "WODisplayNumber": "WO#00096",
    "WOTDisplayNumber": "TSK#00295",
    "start": "30 Mar 2017 00:00:00",
    "end": "30 Mar 2017 03:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63538",
    "WONumber": "8305",
    "WODisplayNumber": "WO#00094",
    "WOTDisplayNumber": "TSK#00289",
    "start": "29 Mar 2017 12:00:00",
    "end": "29 Mar 2017 12:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Canceled"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63535",
    "WONumber": "8301",
    "WODisplayNumber": "WO#00093",
    "WOTDisplayNumber": "TSK#00286",
    "start": "29 Mar 2017 17:00:00",
    "end": "29 Mar 2017 17:20:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63532",
    "WONumber": "8297",
    "WODisplayNumber": "WO#00092",
    "WOTDisplayNumber": "TSK#00283",
    "start": "29 Mar 2017 15:30:00",
    "end": "29 Mar 2017 18:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63529",
    "WONumber": "8293",
    "WODisplayNumber": "WO#00091",
    "WOTDisplayNumber": "TSK#00280",
    "start": "29 Mar 2017 14:24:00",
    "end": "29 Mar 2017 14:25:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63526",
    "WONumber": "8289",
    "WODisplayNumber": "WO#00090",
    "WOTDisplayNumber": "TSK#00277",
    "start": "29 Mar 2017 14:19:00",
    "end": "29 Mar 2017 14:21:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63523",
    "WONumber": "8285",
    "WODisplayNumber": "WO#00089",
    "WOTDisplayNumber": "TSK#00274",
    "start": "29 Mar 2017 14:00:00",
    "end": "29 Mar 2017 20:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63520",
    "WONumber": "8281",
    "WODisplayNumber": "WO#00088",
    "WOTDisplayNumber": "TSK#00271",
    "start": "29 Mar 2017 13:00:00",
    "end": "29 Mar 2017 13:30:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63517",
    "WONumber": "8277",
    "WODisplayNumber": "WO#00087",
    "WOTDisplayNumber": "TSK#00268",
    "start": "29 Mar 2017 12:00:00",
    "end": "29 Mar 2017 13:00:00",
    "teamID": "1025",
    "teamMember": "Tamerlan Afandiyev",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63514",
    "WONumber": "8273",
    "WODisplayNumber": "WO#00086",
    "WOTDisplayNumber": "TSK#00265",
    "start": "29 Mar 2017 12:30:00",
    "end": "29 Mar 2017 15:30:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63511",
    "WONumber": "8269",
    "WODisplayNumber": "WO#00085",
    "WOTDisplayNumber": "TSK#00262",
    "start": "29 Mar 2017 12:00:00",
    "end": "29 Mar 2017 13:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63508",
    "WONumber": "8265",
    "WODisplayNumber": "WO#00084",
    "WOTDisplayNumber": "TSK#00259",
    "start": "29 Mar 2017 11:00:00",
    "end": "29 Mar 2017 17:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63505",
    "WONumber": "8261",
    "WODisplayNumber": "WO#00083",
    "WOTDisplayNumber": "TSK#00256",
    "start": "29 Mar 2017 09:45:00",
    "end": "29 Mar 2017 10:45:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63502",
    "WONumber": "8257",
    "WODisplayNumber": "WO#00082",
    "WOTDisplayNumber": "TSK#00253",
    "start": "29 Mar 2017 09:00:00",
    "end": "29 Mar 2017 18:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63499",
    "WONumber": "8253",
    "WODisplayNumber": "WO#00081",
    "WOTDisplayNumber": "TSK#00250",
    "start": "28 Mar 2017 16:30:00",
    "end": "28 Mar 2017 23:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63496",
    "WONumber": "8249",
    "WODisplayNumber": "WO#00080",
    "WOTDisplayNumber": "TSK#00247",
    "start": "28 Mar 2017 16:45:00",
    "end": "28 Mar 2017 18:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63493",
    "WONumber": "8245",
    "WODisplayNumber": "WO#00079",
    "WOTDisplayNumber": "TSK#00244",
    "start": "28 Mar 2017 15:00:00",
    "end": "28 Mar 2017 23:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Canceled"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63490",
    "WONumber": "8241",
    "WODisplayNumber": "WO#00078",
    "WOTDisplayNumber": "TSK#00241",
    "start": "28 Mar 2017 15:00:00",
    "end": "28 Mar 2017 17:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63487",
    "WONumber": "8237",
    "WODisplayNumber": "WO#00077",
    "WOTDisplayNumber": "TSK#00238",
    "start": "28 Mar 2017 13:00:00",
    "end": "28 Mar 2017 15:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63484",
    "WONumber": "8233",
    "WODisplayNumber": "WO#00076",
    "WOTDisplayNumber": "TSK#00235",
    "start": "28 Mar 2017 10:30:00",
    "end": "28 Mar 2017 12:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63481",
    "WONumber": "8229",
    "WODisplayNumber": "WO#00075",
    "WOTDisplayNumber": "TSK#00232",
    "start": "27 Mar 2017 13:00:00",
    "end": "27 Mar 2017 16:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63478",
    "WONumber": "8225",
    "WODisplayNumber": "WO#00074",
    "WOTDisplayNumber": "TSK#00229",
    "start": "28 Mar 2017 00:00:00",
    "end": "28 Mar 2017 04:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63475",
    "WONumber": "8221",
    "WODisplayNumber": "WO#00073",
    "WOTDisplayNumber": "TSK#00226",
    "start": "16 Mar 2017 19:00:00",
    "end": "16 Mar 2017 20:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63463",
    "WONumber": "8207",
    "WODisplayNumber": "WO#00071",
    "WOTDisplayNumber": "TSK#00214",
    "start": "17 Mar 2017 00:00:00",
    "end": "17 Mar 2017 02:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63460",
    "WONumber": "8203",
    "WODisplayNumber": "WO#00070",
    "WOTDisplayNumber": "TSK#00211",
    "start": "16 Mar 2017 15:00:00",
    "end": "16 Mar 2017 16:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63448",
    "WONumber": "8187",
    "WODisplayNumber": "WO#00066",
    "WOTDisplayNumber": "TSK#00199",
    "start": "15 Mar 2017 09:30:00",
    "end": "15 Mar 2017 21:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63445",
    "WONumber": "8183",
    "WODisplayNumber": "WO#00065",
    "WOTDisplayNumber": "TSK#00196",
    "start": "15 Mar 2017 01:00:00",
    "end": "15 Mar 2017 05:00:00",
    "teamID": "1025",
    "teamMember": "Kamran Alakbarov",
    "phase": "Execution",
    "status": "Waiting for HOX+"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63442",
    "WONumber": "8179",
    "WODisplayNumber": "WO#00064",
    "WOTDisplayNumber": "TSK#00193",
    "start": "14 Mar 2017 11:00:00",
    "end": "14 Mar 2017 18:00:00",
    "teamID": "1025",
    "teamMember": "Sadig Mammadov",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63439",
    "WONumber": "8175",
    "WODisplayNumber": "WO#00063",
    "WOTDisplayNumber": "TSK#00190",
    "start": "13 Mar 2017 16:00:00",
    "end": "13 Mar 2017 19:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63436",
    "WONumber": "8171",
    "WODisplayNumber": "WO#00062",
    "WOTDisplayNumber": "TSK#00187",
    "start": "13 Mar 2017 14:00:00",
    "end": "13 Mar 2017 15:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63433",
    "WONumber": "8167",
    "WODisplayNumber": "WO#00061",
    "WOTDisplayNumber": "TSK#00184",
    "start": "12 Mar 2017 01:00:00",
    "end": "12 Mar 2017 05:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63421",
    "WONumber": "8151",
    "WODisplayNumber": "WO#00057",
    "WOTDisplayNumber": "TSK#00172",
    "start": "11 Mar 2017 00:00:00",
    "end": "11 Mar 2017 02:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63412",
    "WONumber": "8139",
    "WODisplayNumber": "WO#00054",
    "WOTDisplayNumber": "TSK#00163",
    "start": "10 Mar 2017 11:30:00",
    "end": "10 Mar 2017 13:30:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63409",
    "WONumber": "8135",
    "WODisplayNumber": "WO#00053",
    "WOTDisplayNumber": "TSK#00160",
    "start": "07 Mar 2017 12:00:00",
    "end": "08 Mar 2017 12:00:00",
    "teamID": "1025",
    "teamMember": "Tamerlan Afandiyev",
    "phase": "Execution",
    "status": "Waiting for HOX"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63397",
    "WONumber": "8119",
    "WODisplayNumber": "WO#00049",
    "WOTDisplayNumber": "TSK#00148",
    "start": "06 Mar 2017 18:00:00",
    "end": "06 Mar 2017 19:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63394",
    "WONumber": "8115",
    "WODisplayNumber": "WO#00048",
    "WOTDisplayNumber": "TSK#00145",
    "start": "06 Mar 2017 19:00:00",
    "end": "06 Mar 2017 20:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63391",
    "WONumber": "8111",
    "WODisplayNumber": "WO#00047",
    "WOTDisplayNumber": "TSK#00142",
    "start": "06 Mar 2017 12:00:00",
    "end": "06 Mar 2017 12:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63388",
    "WONumber": "8107",
    "WODisplayNumber": "WO#00046",
    "WOTDisplayNumber": "TSK#00139",
    "start": "06 Mar 2017 18:00:00",
    "end": "06 Mar 2017 19:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63358",
    "WONumber": "8067",
    "WODisplayNumber": "WO#00036",
    "WOTDisplayNumber": "TSK#00109",
    "start": "06 Mar 2017 12:00:00",
    "end": "07 Mar 2017 12:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Canceled"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63352",
    "WONumber": "8059",
    "WODisplayNumber": "WO#00034",
    "WOTDisplayNumber": "TSK#00103",
    "start": "03 Mar 2017 12:00:00",
    "end": "03 Mar 2017 15:00:00",
    "teamID": "1025",
    "teamMember": "Tamerlan Afandiyev",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63346",
    "WONumber": "8051",
    "WODisplayNumber": "WO#00032",
    "WOTDisplayNumber": "TSK#00097",
    "start": "04 Mar 2017 03:00:00",
    "end": "04 Mar 2017 05:00:00",
    "teamID": "1025",
    "teamMember": "Farkhad Alakbarov",
    "phase": "Execution",
    "status": "Task Rejected"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63343",
    "WONumber": "8047",
    "WODisplayNumber": "WO#00031",
    "WOTDisplayNumber": "TSK#00094",
    "start": "03 Mar 2017 13:15:00",
    "end": "03 Mar 2017 14:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63333",
    "WONumber": "8034",
    "WODisplayNumber": "WO#00028",
    "WOTDisplayNumber": "TSK#00084",
    "start": "03 Mar 2017 12:00:00",
    "end": "03 Mar 2017 13:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63330",
    "WONumber": "8030",
    "WODisplayNumber": "WO#00027",
    "WOTDisplayNumber": "TSK#00081",
    "start": "03 Mar 2017 12:00:00",
    "end": "03 Mar 2017 13:00:00",
    "teamID": "1025",
    "teamMember": "Tamerlan Afandiyev",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63327",
    "WONumber": "8026",
    "WODisplayNumber": "WO#00026",
    "WOTDisplayNumber": "TSK#00078",
    "start": "03 Mar 2017 12:00:00",
    "end": "03 Mar 2017 13:00:00",
    "teamID": "1025",
    "teamMember": "Tamerlan Afandiyev",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63318",
    "WONumber": "8014",
    "WODisplayNumber": "WO#00023",
    "WOTDisplayNumber": "TSK#00069",
    "start": "03 Mar 2017 12:00:00",
    "end": "03 Mar 2017 13:00:00",
    "teamID": "1025",
    "teamMember": "Tamerlan Afandiyev",
    "phase": "Execution",
    "status": "Waiting for HOX"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63315",
    "WONumber": "8010",
    "WODisplayNumber": "WO#00022",
    "WOTDisplayNumber": "TSK#00066",
    "start": "02 Mar 2017 12:00:00",
    "end": "03 Mar 2017 12:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63309",
    "WONumber": "8002",
    "WODisplayNumber": "WO#00020",
    "WOTDisplayNumber": "TSK#00060",
    "start": "02 Mar 2017 23:00:00",
    "end": "02 Mar 2017 23:30:00",
    "teamID": "1025",
    "teamMember": "Tamerlan Afandiyev",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63306",
    "WONumber": "7998",
    "WODisplayNumber": "WO#00019",
    "WOTDisplayNumber": "TSK#00057",
    "start": "02 Mar 2017 23:00:00",
    "end": "02 Mar 2017 23:30:00",
    "teamID": "1025",
    "teamMember": "Tamerlan Afandiyev",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63300",
    "WONumber": "7990",
    "WODisplayNumber": "WO#00017",
    "WOTDisplayNumber": "TSK#00051",
    "start": "02 Mar 2017 23:00:00",
    "end": "02 Mar 2017 23:30:00",
    "teamID": "1025",
    "teamMember": "Rashad Hasanli",
    "phase": "Execution",
    "status": "Waiting for HOX"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63297",
    "WONumber": "7986",
    "WODisplayNumber": "WO#00016",
    "WOTDisplayNumber": "TSK#00048",
    "start": "02 Mar 2017 23:00:00",
    "end": "02 Mar 2017 23:55:00",
    "teamID": "1025",
    "teamMember": "Rashad Hasanli",
    "phase": "Execution",
    "status": "Waiting for HOX"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63291",
    "WONumber": "7978",
    "WODisplayNumber": "WO#00014",
    "WOTDisplayNumber": "TSK#00042",
    "start": "02 Mar 2017 22:00:00",
    "end": "02 Mar 2017 23:00:00",
    "teamID": "1025",
    "teamMember": "Tamerlan Afandiyev",
    "phase": "Execution",
    "status": "Waiting for HOX"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63285",
    "WONumber": "7970",
    "WODisplayNumber": "WO#00012",
    "WOTDisplayNumber": "TSK#00036",
    "start": "02 Mar 2017 17:35:00",
    "end": "02 Mar 2017 18:00:00",
    "teamID": "1025",
    "teamMember": "Tamerlan Afandiyev",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63282",
    "WONumber": "7966",
    "WODisplayNumber": "WO#00011",
    "WOTDisplayNumber": "TSK#00033",
    "start": "02 Mar 2017 20:00:00",
    "end": "02 Mar 2017 20:40:00",
    "teamID": "1025",
    "teamMember": "Rashad Hasanli",
    "phase": "Execution",
    "status": "Waiting for HOX"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63279",
    "WONumber": "7962",
    "WODisplayNumber": "WO#00010",
    "WOTDisplayNumber": "TSK#00030",
    "start": "02 Mar 2017 18:00:00",
    "end": "02 Mar 2017 19:00:00",
    "teamID": "1025",
    "teamMember": "Kamran Alakbarov",
    "phase": "Execution",
    "status": "Waiting for HOX+"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63276",
    "WONumber": "7958",
    "WODisplayNumber": "WO#00009",
    "WOTDisplayNumber": "TSK#00027",
    "start": "02 Mar 2017 18:00:00",
    "end": "02 Mar 2017 19:00:00",
    "teamID": "1025",
    "teamMember": "Rashad Hasanli",
    "phase": "Execution",
    "status": "Waiting for HOX"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63273",
    "WONumber": "7954",
    "WODisplayNumber": "WO#00008",
    "WOTDisplayNumber": "TSK#00024",
    "start": "02 Mar 2017 17:00:00",
    "end": "02 Mar 2017 18:00:00",
    "teamID": "1025",
    "teamMember": "Tamerlan Afandiyev",
    "phase": "Execution",
    "status": "Task Execution in Progress"
}, {
    "description": "Planned Work Request",
    "WOTNumber": "63270",
    "WONumber": "7950",
    "WODisplayNumber": "WO#00007",
    "WOTDisplayNumber": "TSK#00021",
    "start": "02 Mar 2017 16:00:00",
    "end": "02 Mar 2017 17:00:00",
    "teamID": "1025",
    "teamMember": "",
    "phase": "Execution",
    "status": "Task Complete"
}
];

const teamsA = [{
    "id": "100",
    "name": "Network Engineer",
    "active": true,
    "color": "red"
}, {
    "id": "200",
    "name": "HOX",
    "active": true,
    "color": "orange"
}, {
    "id": "300",
    "name": "HOD",
    "active": true,
    "color": "yellow"
}, {
    "id": "400",
    "name": "COO",
    "active": true,
    "color": "olive"
}, {
    "id": "500",
    "name": "NOC",
    "active": true,
    "color": "green"
}, {
    "id": "540",
    "name": "Team Lead",
    "active": true,
    "color": ""
}, {
    "id": "600",
    "name": "SPM Authenticated User",
    "active": true,
    "color": ""
}, {
    "id": "800",
    "name": "WO Approver",
    "active": true,
    "color": ""
}, {
    "id": "900",
    "name": "System Administrators",
    "active": true,
    "color": "teal"
}, {
    "id": "999",
    "name": "Task Team Lead",
    "active": true,
    "color": "blue"
}, {
    "id": "1001",
    "name": "NSS",
    "active": true,
    "color": "violet"
}, {
    "id": "1002",
    "name": "PS(2)",
    "active": true,
    "color": "purple"
}, {
    "id": "1003",
    "name": "IN_VAS",
    "active": true,
    "color": "pink"
}, {
    "id": "1004",
    "name": "NS",
    "active": true,
    "color": "brown"
}, {
    "id": "1005",
    "name": "IPBB",
    "active": true,
    "color": "grey"
}, {
    "id": "1006",
    "name": "PS",
    "active": true,
    "color": "red"
}, {
    "id": "1007",
    "name": "TX",
    "active": true,
    "color": "orange"
}, {
    "id": "1008",
    "name": "IT\\Business",
    "active": true,
    "color": "green"
}, {
    "id": "1009",
    "name": "Testing",
    "active": true,
    "color": "olive"
}, {
    "id": "1010",
    "name": "Roaming Partner",
    "active": true,
    "color": "blue"
}, {
    "id": "1011",
    "name": "AU",
    "active": true,
    "color": "red"
}, {
    "id": "1012",
    "name": "Roaming",
    "active": true,
    "color": "green"
}, {
    "id": "1013",
    "name": "Test Team",
    "active": true,
    "color": "violet"
}, {
    "id": "1014",
    "name": "New Test Team 6",
    "active": true,
    "color": "purple"
}, {
    "id": "1015",
    "name": "New Test Team 7",
    "active": true,
    "color": ""
}, {
    "id": "1018",
    "name": "INFRA",
    "active": true,
    "color": ""
}, {
    "id": "1019",
    "name": "OSS",
    "active": true,
    "color": ""
}, {
    "id": "1020",
    "name": "Interconnection Partner",
    "active": true,
    "color": ""
}, {
    "id": "1021",
    "name": "Partner",
    "active": true,
    "color": ""
}, {
    "id": "1022",
    "name": "Testing",
    "active": true,
    "color": ""
}, {
    "id": "1023",
    "name": "VAS Partner",
    "active": true,
    "color": ""
}, {
    "id": "1024",
    "name": "SIM Vendor",
    "active": true,
    "color": ""
}, {
    "id": "1025",
    "name": "Request Group",
    "active": true,
    "color": ""
}, {
    "id": "1026",
    "name": "Vendor",
    "active": true,
    "color": ""
}, {
    "id": "1027",
    "name": "Execution Group",
    "active": true,
    "color": ""
}, {
    "id": "1028",
    "name": "SIP Partner",
    "active": true,
    "color": ""
}, {
    "id": "1029",
    "name": "PSS",
    "active": true,
    "color": ""
}, {
    "id": "1030",
    "name": "CSS",
    "active": true,
    "color": ""
}, {
    "id": "1031",
    "name": "OSA",
    "active": true,
    "color": ""
}, {
    "id": "1032",
    "name": "OSS&OSA",
    "active": true,
    "color": ""
}, {
    "id": "1033",
    "name": "RNP",
    "active": true,
    "color": ""
}, {
    "id": "1034",
    "name": "RNO",
    "active": true,
    "color": ""
}, {
    "id": "1035",
    "name": "FOAM",
    "active": true,
    "color": ""
}, {
    "id": "1036",
    "name": "OAM",
    "active": true,
    "color": ""
}, {
    "id": "1037",
    "name": "TNR",
    "active": true,
    "color": ""
}, {
    "id": "1038",
    "name": "TNP",
    "active": true,
    "color": ""
}, {
    "id": "1039",
    "name": "CW",
    "active": true,
    "color": ""
}, {
    "id": "1040",
    "name": "TI",
    "active": true,
    "color": ""
}
];

const mocksB = {
    tasks: tasksA,
    teams: teamsA
};

export default mocksB;