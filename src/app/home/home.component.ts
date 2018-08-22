import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Storage } from '../shared/utils/storage';
import { AppService } from '../shared/service/app.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'

})
export class HomeComponent implements OnInit {

  fromDate: any = new Date();
  data: any = [];
  key: string = 'slNo'; //set default
  reverse: boolean = false;
  iFilter: any = "";
  len: any = [];
  number: any;
  p: number = 1;
  
  constructor(private appService: AppService) {
    // Storage.clearSession();
    // history.pushState(null, null, location.href);
    // window.onpopstate = function(event) {
    //  history.go(1);
    this.data = [
    {autoReqID: "90060BR",
    billingDateIST:"30-Jul-14",
    billingType:"Billable",
    canbehiredRehireNew:"Yes",
    contactNumber:"9966961699",
    country:"INDIA",
    customerName:"MICROSOFT CORPORATION",
    cvid:"3588762",
    department:"54532642, 54532644, 54353534, 54288299, 54288299, 54288299, 54353534, 54286722, 54286722, 54288299, 54288299, 54353621, 54353621, 54353621, 54353621",
    designation2:"CONSULTANT",
    eBand:"E1",
    eSubBand:"E1.2",
    emailAddress:"pradeep_pednekar2003@yahoo.com",
    employeeGroup:"Business Line FT",
    expectedClosureDateIST:"1-Jul-14",
    expectedJoiningDateist:"6-Oct-14",
    expectedJoiningMonth:"1-Oct-14",
    firstName:"Pradeep",
    fulfillmentMonth:"28-Jul-14",
    gender:"Male",
    homePhone:"9966961699",
    hrStatus:"Offer Accepted",
    job:"Technical Consultant - Senior - MSD",
    jobFamily:"Practice (Packages - MSD)",
    jobTitle:"EXECUTIVE, ASSOCIATE MANAGER- TAG OFFSHORE, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler",
    joiningL1:"SL CORE APPS",
    joiningL2:"SL CORE APPS-FT",
    joiningL3:"SL CORE APPS-FT-Microsoft",
    joiningL4:"SL CORE APPS-FT-Microsoft-DU4",
    joiningLocation:"Hyd-Madhapur,H01B HITEC CITY-2",
    lastName:"Pednekar",
    offerAcceptDateIST:"15-Sep-14",
    offerDateIST:"23-May-14",
    otherPhone:"9966961699",
    personalArea:"SS India",
    personalSubArea:"Hyderabad",
    pofuRagStatus:"Red",
    pojectCode:"C130164",
    previousOrganizationName:"HCL Technologies Limited",
    primarySkill:"Technical Skills-Microsoft Technologies-.Net",
    projectName:"MSIT EAS_MSD CCRM_Engg - Staff Aug",
    recruiter:"Kumar, D Ravi (51496659)",
    recruiterAck:"Yes",
    reportingManager:"Satishchandra Damera (51429114)",
    requisitionDateIST:"23-Apr-14",
    requisitionSource:"New Project/Extension",
    rex:"49",
    source:"DirectRPO",
    sourceDetails:"DirectRPO",
    srNumber:"EAS-/EAS-/2014/313243",
    srStatus:"Open",
    tagExecutiveAssignDateIST:"2-May-14",
    tagManager:"System Integration (HRXMLEMPLID) (HRXMLEMPLID)",
    tagManagerAssignDateIST:"29-Apr-14",
    taggedLOB:"APPS",
    targetFulfillmentRoundUp:"1-Jul-14",
    tex:"49",
    trackDetail:"Kumar, D Ravi ",
    type:"FTE"
  },
  {autoReqID: "90060BR",
    billingDateIST:"30-Jul-14",
    billingType:"Billable",
    canbehiredRehireNew:"Yes",
    contactNumber:"9966961699",
    country:"INDIA",
    customerName:"MICROSOFT CORPORATION",
    cvid:"3588762",
    department:"54532642, 54532644, 54353534, 54288299, 54288299, 54288299, 54353534, 54286722, 54286722, 54288299, 54288299, 54353621, 54353621, 54353621, 54353621",
    designation2:"CONSULTANT",
    eBand:"E1",
    eSubBand:"E1.2",
    emailAddress:"pradeep_pednekar2003@yahoo.com",
    employeeGroup:"Business Line FT",
    expectedClosureDateIST:"1-Jul-14",
    expectedJoiningDateist:"6-Oct-14",
    expectedJoiningMonth:"1-Oct-14",
    firstName:"Pradeep",
    fulfillmentMonth:"28-Jul-14",
    gender:"Male",
    homePhone:"9966961699",
    hrStatus:"Offer Accepted",
    job:"Technical Consultant - Senior - MSD",
    jobFamily:"Practice (Packages - MSD)",
    jobTitle:"EXECUTIVE, ASSOCIATE MANAGER- TAG OFFSHORE, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler, Recruitment Enabler",
    joiningL1:"SL CORE APPS",
    joiningL2:"SL CORE APPS-FT",
    joiningL3:"SL CORE APPS-FT-Microsoft",
    joiningL4:"SL CORE APPS-FT-Microsoft-DU4",
    joiningLocation:"Hyd-Madhapur,H01B HITEC CITY-2",
    lastName:"Pednekar",
    offerAcceptDateIST:"15-Sep-14",
    offerDateIST:"23-May-14",
    otherPhone:"9966961699",
    personalArea:"SS India",
    personalSubArea:"Hyderabad",
    pofuRagStatus:"Red",
    pojectCode:"C130164",
    previousOrganizationName:"HCL Technologies Limited",
    primarySkill:"Technical Skills-Microsoft Technologies-.Net",
    projectName:"MSIT EAS_MSD CCRM_Engg - Staff Aug",
    recruiter:"Kumar, D Ravi (51496659)",
    recruiterAck:"Yes",
    reportingManager:"Satishchandra Damera (51429114)",
    requisitionDateIST:"23-Apr-14",
    requisitionSource:"New Project/Extension",
    rex:"49",
    source:"DirectRPO",
    sourceDetails:"DirectRPO",
    srNumber:"EAS-/EAS-/2014/313243",
    srStatus:"Open",
    tagExecutiveAssignDateIST:"2-May-14",
    tagManager:"System Integration (HRXMLEMPLID) (HRXMLEMPLID)",
    tagManagerAssignDateIST:"29-Apr-14",
    taggedLOB:"APPS",
    targetFulfillmentRoundUp:"1-Jul-14",
    tex:"49",
    trackDetail:"Kumar, D Ravi ",
    type:"FTE"
  }
  
    // { slNo: 2, name: 'Ashwin', lob: '-', email: 'ashwin@gmail.com', phone: '8526547892', stage: 'S1', status: '	No Response' },
    // { slNo: 3, name: 'Sunil', lob: '-', email: 'sunil@gmail.com', phone: '8526547892', stage: 'S2', status: 'Connect Later' },
    // { slNo: 4, name: 'Rakesh', lob: '-', email: 'rakesh@gmail.com', phone: '8526547892', stage: 'S3', status: 'Complete' },
    // { slNo: 5, name: 'Sharath', lob: '-', email: 'sharath@gmail.com', phone: '8526547892', stage: 'S1', status: 'Pending' },
    // { slNo: 6, name: 'Chethan', lob: '-', email: 'chethan@gmail.com', phone: '8526547892', stage: 'S1', status: 'No Response' },
    // { slNo: 7, name: 'Roshan', lob: '-', email: 'chethan@gmail.com', phone: '8526547892', stage: 'S2', status: 'Connect Later' },
    // { slNo: 8, name: 'Ranjith', lob: '-', email: 'ranjith@gmail.com', phone: '8526547892', stage: 'S3', status: 'Complete' },
    // { slNo: 9, name: 'Raj', lob: '-', email: 'raj@gmail.com', phone: '8526547892', stage: 'S1', status: 'No Response' },
    // { slNo: 10, name: 'Sravan', lob: '-', email: 'sravan@gmail.com', phone: '8526547892', stage: 'S2', status: 'Connect Later' },
    // { slNo: 11, name: 'Jagan', lob: '-', email: 'jagan@gmail.com', phone: '8526547892', stage: 'S3', status: 'Complete' }
  ];
    this.number = 10;
  }

  ngOnInit() { }
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  pageChanged(event) {
    // console.log(event)
    this.p = event;
  }

}