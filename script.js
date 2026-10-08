// script.js

function loadMain(){

Plotly.newPlot('chart',[{
type:'pie',
hole:0.45,

labels:[
'Process',
'People',
'Technology',
'Data',
'Facilities'
],

values:[20,20,20,20,20],

textinfo:'label',
textposition:'inside',

marker:{
colors:[
'#22c55e',
'#0ea5e9',
'#7c3aed',
'#ec4899',
'#eab308'
]
}

}],{

showlegend:false,

annotations:[{
text:'PPTDF',
showarrow:false,
font:{size:24}
}]

});

document.getElementById('chart').on('plotly_click', function(data){
let selected = data.points[0].label;
loadVulnerability(selected);
});

}

function loadVulnerability(domain){

const dataMap = {

Process:['No Policy','Weak SOP'],
People:['Low Awareness','Human Error'],
Technology:['Weak Password','Outdated Software'],
Data:['Unencrypted Files','Poor Backup'],
Facilities:['No CCTV','Open Access']

};

Plotly.newPlot('chart',[{
type:'pie',
hole:0.45,
labels:dataMap[domain],
values:[50,50]

}],{
title:domain + ' Vulnerabilities'
});

document.getElementById('chart').on('plotly_click', function(data){
loadThreat(data.points[0].label);
});

}

function loadThreat(vuln){

const threats = {

'No Policy':['Unauthorized Access'],
'Weak SOP':['Process Failure'],
'Low Awareness':['Phishing'],
'Human Error':['Misconfiguration'],
'Weak Password':['Brute Force'],
'Outdated Software':['Exploit Attack'],
'Unencrypted Files':['Data Theft'],
'Poor Backup':['Data Loss'],
'No CCTV':['Physical Intrusion'],
'Open Access':['Trespassing']

};

Plotly.newPlot('chart',[{
type:'pie',
hole:0.45,
labels:threats[vuln],
values:[100]

}],{
title:vuln + ' Threat'
});

document.getElementById('chart').on('plotly_click', function(data){
loadSource(data.points[0].label);
});

}

function loadSource(threat){

const source = {

'Unauthorized Access':['Insider'],
'Process Failure':['Negligence'],
'Phishing':['Spam Sender'],
'Misconfiguration':['Employee'],
'Brute Force':['External Hacker'],
'Exploit Attack':['Cyber Criminal'],
'Data Theft':['Attacker'],
'Data Loss':['System Failure'],
'Physical Intrusion':['Trespasser'],
'Trespassing':['Visitor']

};

Plotly.newPlot('chart',[{
type:'pie',
hole:0.45,
labels:source[threat],
values:[100]

}],{
title:threat + ' Source'
});

}

loadMain();