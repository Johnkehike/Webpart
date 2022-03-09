// import * as React from 'react';
// import styles from './SelfAudit.module.scss';
// import { ISelfAuditProps } from './ISelfAuditProps';
// import { ISelfAuditState } from './ISelfAuditState';
// import { escape, set, update } from '@microsoft/sp-lodash-subset';
// import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';
// import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
// import { sp } from "@pnp/sp/presets/all";
// import { SharedColors } from '@fluentui/theme';

// import { Dialog, DialogFooter, DialogType, DocumentCardTitle, ExtendedSelectedItem, hsv2rgb, rgb2hex } from 'office-ui-fabric-react';
// import { Label } from '@microsoft/office-ui-fabric-react-bundle';
// import { indexOf } from 'lodash';
// const dialogContent={Type:DialogType.normal,title:"Message", 
// subText:"Your entry has been submitted successfully",
// ariaLabelledById:"close"};
// var items: IDropdownOption[]=[];
// var BranchCode: IDropdownOption[]=[];
// var zone: IDropdownOption[]=[];
// var region: IDropdownOption[]=[];

// export default class SelfAudit extends React.Component<ISelfAuditProps, ISelfAuditState, {}> {
//   //take: IDropdownOption[];

  
// constructor(props: ISelfAuditProps){
//   super(props);
//   this.Establishment_of_New_accountFn=this.Establishment_of_New_accountFn.bind(this);
//   this.Establishment_of_New_account_CorporateFn=this.Establishment_of_New_account_CorporateFn.bind(this);
//   this.Reactivate_Dormant_accountFn=this.Reactivate_Dormant_accountFn.bind(this);
//   this.Establishment_of_Call_or_Term_DepositFn=this.Establishment_of_Call_or_Term_DepositFn.bind(this);
//   this.ReportFEPsFn=this.ReportFEPsFn.bind(this);
//   this.AccountClosureFn=this.AccountClosureFn.bind(this);
//   this.VaultViewFn=this.VaultViewFn.bind(this);
//   this.BulkRoomReviewFn=this.BulkRoomReviewFn.bind(this);
//   this.BoxedCashDepositFn=this.BoxedCashDepositFn.bind(this);
//   this.ATMReviewFn=this.ATMReviewFn.bind(this);
//   this.RRATMOpsFn=this.RRATMOpsFn.bind(this);
//   this.TellerOpsFn=this.TellerOpsFn.bind(this);
//   this.FundTrxFn=this.FundTrxFn.bind(this);
//   this.ClearActFn=this.ClearActFn.bind(this);
//   this.GLRevFn=this.GLRevFn.bind(this);
//   this.CsServiceFn=this.CsServiceFn.bind(this);
//   this.SecReviewFn=this.SecReviewFn.bind(this);
//   this.ITRoomFn=this.ITRoomFn.bind(this);
//   this.ComplianceFn=this.ComplianceFn.bind(this);
//   this.AwarenessFn=this.AwarenessFn.bind(this);
//   this.AmbienceFn=this.AmbienceFn.bind(this);
//   this.Sabinus=this.Sabinus.bind(this);
//   this.onChange=this.onChange.bind(this);
//   this.On_Change=this.On_Change.bind(this);
//   this.onChange3=this.onChange3.bind(this);
//   this.onChange4=this.onChange4.bind(this);
//   this.toggleDialog=this.toggleDialog.bind(this);
//   //this,this.changeBName=this.changeBName.bind(this);
//   this.state = { 
    
//     items: [],selecteditems:null, BranchCode: [], selectedBranchCode: null,
//     zone: [], selectedZone:null, region: [], selectedRegion: null, 
//     Establishment_of_New_account: "",
//      Establishment_of_New_account_Corporate:"",
//      Reactivate_Dormant_account:"",
//      accountClosure: "",
//      Establishment_of_Call_or_Term_Deposit: "",
//      ReportFEPs: "",
//      vaultView:"",
//      BulkRoomReview: "",
//      BoxedCashDeposit:"",
//      ATMReview: "",
//      RRATMOps:"",
//      TellerOps:"",
//      FundTrx:"",
//      ClearAct:"",
//      GLRev:"",
//      CsService:"",
//      SecReview:"",
//      ITRoom: "",
//      Compliance:"",
//      Awareness: "",
//      Ambience:"",
//      hideDialog: true     
//   };
// }
// /*public componentDidUpdate (e, selectedOption): void {
// var letschec = this;
// //let Title4 [] =this.state.items;
// const check = sp.web.lists.getByTitle("BranchDetails").items.getById(selectedOption).get();
// console.log(check);
//     //items.splice(0, 3, )
      
    
// }*/

// public onChange (e, selectedOption){
//   let item10 = [];
// if (selectedOption) {
//    //item10.push(selectedOption.text as string);
//    item10.push(selectedOption.key as string);
//    this.setState({ selecteditems: item10 });
//    //this.setState({items: item10});
//    //items.filter((newthing)=>{
//      //newthing.key === selectedOption;
//    //});
  
// }

// //console.log(item10);
// }
// public On_Change (e, selectedOption){
//   let item11 = [];
// if (selectedOption) {
//    //item10.push(selectedOption.text as string);
//    item11.push(selectedOption.text as string);
//    this.setState({ selectedBranchCode: item11 });
// }

// //console.log(item11);
// }
// public onChange3 (e, selectedOption){
//   let item20 = [];
// if (selectedOption) {
//    //item10.push(selectedOption.text as string);
//    item20.push(selectedOption.text as string);
//    this.setState({ selectedZone: item20 });
// }

// //console.log(item20);
// }
// public onChange4 (e, selectedOption){
//   let item13 = [];
// if (selectedOption) {
//    //item10.push(selectedOption.text as string);
//    item13.push(selectedOption.text as string);
//    this.setState({ selectedRegion: item13 });
// }

// //console.log(item13);
// }
// //public onChange2 = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption ): void =>{
// //let item10 = [];
//   //if (item.selected) {
//     //let selecteditemarr = this.state.selecteditems;
//     //selecteditemarr.push( +item.key);
//     //this.setState({ items: selecteditemarr });
//     //console.log(item10);
//   //}
//   //else {
//     // item10.indexOf(item.key) !== -1 && item10.splice(item10.indexOf(item.key), 1);
//   //}
//   //this.setState({ items: item10 });
  
// //}

// //Promise<void>
// public componentDidMount (): void
// //public async componentDidMount(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void =>
//   {
//     // get all the items from a sharepoint list
//     var reacthandler=this;
//     //let resultitems = [];
//     //sp.web.lists.getByTitle("Branch Details").fields.getByInternalNameOrTitle("").items.select("Zone").get().then
//     sp.web.lists.getByTitle("BranchDetails").items.select('Title').get().then(function(data){
//     for(var k in data){
//      items.push({key:data[k].Title, text:data[k].Title});
//       }
//       reacthandler.setState({items});
      
      
//       return items;

//       //var reacthandler=this;
//       //let resultitems = [];
//  //const check = sp.web.lists.getByTitle("BranchDetails").fields.getByInternalNameOrTitle('Title').select('Title')
// //.get().then((data)=>{
//   //console.log(check);
//   //for(var k in data)
//   //{resultitems.push({key:data[k].Title, text:data[k].Title})}
// });
//     //sp.web.lists.getByTitle("Branch Details").fields.getByInternalNameOrTitle("").items.select("Zone").get().then
//     var reacthandler2=this;
//     sp.web.lists.getByTitle("BranchDetails").items.select('BranchName').get().then(function(data){
//       for(var k in data){
//         BranchCode.push({key:data[k].BranchName, text:data[k].BranchName});
//       }
//       reacthandler2.setState({BranchCode});
//       console.log(BranchCode);
//       return BranchCode;
    
//     //var reacthandler2=this;
//     //let resultitems2 = [];
//  //sp.web.lists.getByTitle("BranchDetails").items.select('BranchName')
// //.get().then((data)=>{
//  // for(var k in data)
//  // {resultitems2.push({key:data[k].BranchName, text:data[k].BranchName});
// //}
// //reacthandler2.setState({BranchCode: resultitems2 as string});
// //console.log({BranchCode});
// });

//     //var reacthandler2=this;
//     //sp.web.lists.getByTitle("Branch Details").fields.getByInternalNameOrTitle("").items.select("Zone").get().then
//     //sp.web.lists.getByTitle("BranchDetails").items.select('Title').get().then(function(data){
//       //for(var k in data){
//         //BranchCode.push({key:data[k].Title, text:data[k].Title});
//       //}
 
     
    
//     var reacthandler_Zone=this;
    
//     //sp.web.lists.getByTitle("Branch Details").fields.getByInternalNameOrTitle("").items.select("Zone").get().then
//     sp.web.lists.getByTitle("BranchDetails").items.select('Zone').get().then(function(data){
//       for(var k in data){
//         zone.push({key:data[k].Zone, text:data[k].Zone});
//       }
//       reacthandler_Zone.setState({zone});
//       console.log({zone});
//       return zone;
//     });

//     var reacthandler_Region=this;
//     //sp.web.lists.getByTitle("Branch Details").fields.getByInternalNameOrTitle("").items.select("Zone").get().then
//     sp.web.lists.getByTitle("BranchDetails").items.select('Region').get().then(function(data){
//       for(var k in data){
//         region.push({key:data[k].Region, text:data[k].Region});
//       }
//       reacthandler_Region.setState({region});
//      console.log({region});
//       return region;
//     });
//   }
  
    

//   public Establishment_of_New_accountFn = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
//     this.setState({Establishment_of_New_account: item.key as string });
//   }
//   public Establishment_of_New_account_CorporateFn = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
//     this.setState({Establishment_of_New_account_Corporate: item.key as string});
//   }
//   public Reactivate_Dormant_accountFn = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void =>{
//     this.setState({Reactivate_Dormant_account: item.key as string});
//   }
// public AccountClosureFn = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void =>{
// this.setState({accountClosure: item.key as string});
// }
// public Establishment_of_Call_or_Term_DepositFn =  (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void =>{
//   this.setState({Establishment_of_Call_or_Term_Deposit: item.key as string});
// }
// public ReportFEPsFn = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void =>{
//   this.setState({ReportFEPs: item.key as string});
// }
// public VaultViewFn = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void =>{
//   this.setState({vaultView: item.key as string});
// }
// public BulkRoomReviewFn = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void =>{
//   this.setState({BulkRoomReview: item.key as string});
// }
// public BoxedCashDepositFn = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void =>{
//   this.setState({BulkRoomReview: item.key as string});
// }
// public ATMReviewFn = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void =>{
//   this.setState({ATMReview: item.key as string});
// }
// public RRATMOpsFn = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void =>{
//   this.setState({RRATMOps: item.key as string});
// }
// public TellerOpsFn = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void =>{
//   this.setState({TellerOps: item.key as string});
// }
// public FundTrxFn = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void =>{
//   this.setState({FundTrx: item.key as string});
// }
// public ClearActFn = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void =>{
//   this.setState({ClearAct: item.key as string});
// }
// public GLRevFn = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void =>{
//   this.setState({GLRev: item.key as string});
// }
// public CsServiceFn = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void =>{
//   this.setState({CsService: item.key as string});
// }
// public SecReviewFn = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void =>{
//   this.setState({SecReview: item.text as string});
// }
// public ITRoomFn = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void =>{
//   this.setState({ITRoom: item.key as string});
// }
// public ComplianceFn = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void =>{
//   this.setState({Compliance: item.key as string});
// }
// public AwarenessFn = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void =>{
//   this.setState({Awareness: item.key as string});
// }
// public AmbienceFn = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void =>{
//   this.setState({Ambience: item.key as string});
// }


// public Sabinus (){
//   sp.web.lists.getByTitle("Self-Audit").items.add({
//     Title3:  {results:this.state.selecteditems},
//    branchN: {results: this.state.selectedBranchCode},
//     BZone: {results: this.state.selectedZone},
//     BRegion: {results: this.state.selectedRegion},
//     Establishment_of_New_account_Ind: this.state.Establishment_of_New_account,
//     Establishment_of_New_account_Cor: this.state.Establishment_of_New_account_Corporate,
//     Reactivate_Dormant_account: this.state.Reactivate_Dormant_account
//   });
//   this.setState({hideDialog:false});
  
// }
// //public ChangeCode = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption): void =>{

//   //let x = option.selected;
//   //console.log(x);
//   //let x = option.selected;
//   //console.log(option.selected);
//   //arr.push(option.key as string)
//   //console.log(items);
//   //let ppl: any[]=[];
//   //let defaultValue: string[]=[];
//   //items.map((item)=>{
// //ppl.push(item.id);
// //defaultValue.push(item.secondaryText);

// //if (option.selected) {
  
//   //let seleteditemarr = this.state.BranchCode;
//   //seleteditemarr.push(+option.key);
//   //this.setState({ BranchCode: seleteditemarr });
//   //(function(data){
//     //for(var k in data){
//       //BranchCode.push({key:data[k].Title, text:data[k].Title});
// //}
  
//   //console.log(Title);
//    //const nice4: any =sp.web.lists.getByTitle("Branch Details").items.getById(Title).get();

// //console.log(nice4)
//  // }
//   //public componentDidUpdate(prevProps: Readonly<ISelfAuditProps>, prevState: Readonly<ISelfAuditState>, snapshot?: {}): void {
    
//    //if (Title !== null) {
//   //sp.web.lists.getByTitle("Branch Details").items.getById(Title).
// //  sp.web.lists.getByTitle("Branch Details").items.getById(Title).update
//   // ({
    

//    //'BranchName': document.getElementById("BName")['value'],
//     //'Zone': document.getElementById("BZone")['value'],
//     //'Region': document.getElementById("BRegion")['value']
//   //});
//   //console.log({region});
// //}

//  // }

//  //public changeBName = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
// //var Title = this.state.items;
// //sp.web.lists.getByTitle("BranchDetails").items.getById(Title: item.key )
//  // this.setState({zone: item.key as string});
// //}
// //public changeBName (event, selectedOption){
//   //var Title = selectedOption;
  
//   //const nice: any = sp.web.lists.getByTitle("BranchDetails").items.getById(Title).fieldValuesAsText.get();
//   //selectedOption.nice;
//   //sp.web.lists.getByTitle("BranchDetails").items.getById(Title2).select("Title,ID,BranchName,Zone,Region").get();
//   //const nice: any = sp.web.lists.getByTitle("BranchDetails").items.getById(Title).get();
//   //sp.web.lists.getByTitle("Branch Details").items.getById('Title').get();
//   //sp.web.lists.getByTitle("BranchDetails").items.getById(Title).select("Title,ID,BranchName,Zone,Region").get();
//   //var Title= selectedOption;
//   //var x = document.getElementById("BCode");
//   //var y = document.getElementById("BName")
//   //if (x.nodeValue === "37") {
//     //y.nodeValue = ""
// //this.setState({region: })
//    // console.log(nice);
//  // }



//   //sp.web.lists.getByTitle("Branch Details").items.getById(Title).update({
//     //'BranchName': document.getElementById("BName")['text']
    
//     //const nice: any = 
//      //sp.web.lists.getByTitle("Branch Details").items.getById(Title).get();
//     //this.setState({region: [Title.Region]});
//     //document.getElementById('BName')['text'] = nice.BranchName;
//       //  document.getElementById('BZone')['text'] = nice.Zone;
//     //this.setState({items: Title.text})
//   //})
  
//   public  Establishment_of_New_account = [
//    // { key: 'fruitsHeader', text: 'Region', itemType: DropdownMenuItemType.Header },
//     { key: 'Valid means of Identification', text: 'Valid means of Identification' },
//     { key: 'Utility bill', text: 'Utility bill' },
//     { key: 'Reference (Savings account with Cheque deposit over N2million  holder or other cheque in account)', text: 'Reference (Savings account with Cheque deposit over N2million  holder or other cheque in account)'},
//     { key: 'Reference (Current account holder or other cheque in account)', text: 'Reference (Current account holder or other cheque in account)' },
//     { key: 'Visitation report/ Address Verification Report', text: 'Visitation report/ Address Verification Report' },
//   ];
//   public Establishment_of_New_account_Corporate = [
//     { key: 'Valid means of Identification', text: 'Valid means of Identification' },
//     { key: 'Utility bill', text: 'Utility bill' },
//     { key: 'Visitation report/ Address Verification Report', text: 'Visitation report/ Address Verification Report'},
//     { key: 'Reference', text: 'Reference' },
//     { key: 'Search report', text: 'Search report' },
//     { key: 'Means of Identification of directors and account signatories', text: 'Means of Identification of directors and account signatories' },
//     { key: 'Certificate of incorporation of Business', text: 'Certificate of incorporation of Business'},
//     { key: 'Article and Memorandum of association- C02', text: 'Article and Memorandum of association- C02' },
//     { key: 'Particulars of directors- C07', text: 'Particulars of directors- C07' },
//   ];
// public Reactivate_Dormant_account = [
//   { key: 'Completion of reactivation form with customer signature dully verified(Where the customer is a corporate body, reactivation request must be on a letter head paper.)', text: '  Completion of reactivation form with customer signature dully verified(Where the customer is a corporate body, reactivation request must be on a letter head paper.)'},
//   { key: 'Valid means of Identification', text: 'Valid means of Identification' },
//   { key: 'Utility Bill', text: 'Utility Bill'},
//   { key: 'Visitation report / Address Verification Report ( Where customers address has changed)', text: 'Visitation report / Address Verification Report ( Where customers address has changed)'},
//   { key: 'Customer update form- ( Where customers address has changed)', text: 'Customer update form- ( Where customers address has changed)' },
//   { key: 'Where reactivation is done outside branch of domiciliation- ( Did you obtain approval from branch of domiciliation)', text: 'Where reactivation is done outside branch of domiciliation- ( Did you obtain approval from branch of domiciliation)' }, 
// ] ;
// public accountClosure = [
//   { key: '1', text: 'Customer Closure request  with customer signature duly verified.(Where customer is a corporate, closure request must be on  the companys letter head)'},
//   { key: '2', text: 'Retrieval of Bank Instruments(Cheques, ATM cards etc.)' },
//   { key: '3', text: 'Payment of closure balances'},
//   { key: '4', text: ' Application of closure charges.'},
// ];
// public Establishment_of_Call_or_Term_Deposit = [
//   { key: '1', text: 'Valid means of identification'},
//   { key: '2', text: 'Utility bill' },
//   { key: '3', text: 'Visitation report/ Address Verification Report'},
//   { key: '4', text: 'Where customer maintains an active current or savings account. Ensure that all KYC documents are replicated in the fixed deposit file.'},
//   { key: '5', text: 'Confirm that every roll over certificate is acknowledged by the customer' },
//   { key: '6', text: 'Confirm that rollover instruction is in customers file'},
// ];
// public ReportFEPs = [
//   { key: '1', text: 'Confirm that all customers categorised under PEPs are reported and uploaded on the dedicated portal'},
// ];
// public vaultView = [
//   { key: '1', text: 'Vault compartment equipped with restrictive device for dual control' },
//   { key: '2', text: 'Dual control maintained over the vault keys' },
//   { key: '3', text: 'Vault Combination lock in use'},
//   { key: '4', text: 'Physical Vault cash balanced with system/Register' },
//   { key: '5', text: 'Vault Movement Register Maintained and in use' },
//   { key: '6', text: 'Vault Key not compromised' },
//   { key: '7', text: 'Vault Limit Exceeded/Insurance in place'},
//   { key: '8', text: 'Vault/Consolidated Proof in place' },
//   { key: '9', text: 'Bait Cash Maintained in Vault' },
//   { key: '10', text: 'Vault cash Register maintained' },
//   { key: '11', text: 'Rechargeable Lamp in Vault' },
//   { key: '12', text: 'CCTV Coverage of Vault Entrance'},
//   { key: '13', text: 'Vault cash strapped' },
//   { key: '14', text: 'Vault door working properly' },
//   { key: '15', text: 'Vault cash balancing properly done' },
//   { key: '16', text: 'Cash movement (if any) in line with policy'},
//   { key: '17', text: 'Confirm that Support staff does not handle any vault keys without appropriate approval' },
//   { key: '18', text: 'Ensure the Spare vault keys are kept in nearby Bank branch vault' },
//   { key: '19', text: 'Confirm that vault combination lock is changed annually or when there is a movement of staff'},
//   { key: '20', text: 'Confirm that cash -in -counter (CIC) limit is maintained at all times' },
//   { key: '21', text: 'Confirm if the vault door is opened under dual control' },
// ];
// public BulkRoomReview = [
//   { key: '1', text: 'Cash strapping machine available/functional' },
//   { key: '2', text: 'Is cash strapping machine under the coverage of CCTV camera' },
//   { key: '3', text: 'CCTV coverage in place'},
//   { key: '4', text: 'Single Occupancy?'},
// ];
// public BoxedCashDeposit =[
//   { key: '1', text: 'Late cash deposits posted to Late cash suspense GL account' },
//   { key: '2', text: 'Late cash vault? Duplicate Deposit tickets in place' },
//   { key: '3', text: 'Late cash box in tamper proof'},
//   { key: '4', text: 'Confirm if cash once brought into the note counting area is not taken away (from the room/vault area) without passing through the nominated account and the authorization of the HTS/BSM'},
//   ]; 
//   public ATMReview = [
//     { key: '1', text: 'ATM Movement register in place' },
//     { key: '2', text: 'ATM Movement register updated' },
//     { key: '3', text: 'ATM physical and system balance agree '},
//     { key: '4', text: 'Anti-skimming devices installed' },
//     { key: '5', text: 'ATM working properly? ' },
//     { key: '6', text: 'ATM Cassettes in good condition ' },
//     { key: '7', text: 'ATM area covered by CCTV'},
//     { key: '8', text: 'Combination lock in place' },
//     { key: '9', text: 'Confirm that ATM vault combination lock is changed annually or when there is a movement of staff in the branch' },
// ];
// public RRATMOps = [
//   { key: '1', text: 'Is ATMs located in such a manner that guarantees safety and security of users and confidentiality of their transactions?' },
//   { key: '2', text: 'Confirm if ATMs placed outside buildings bolted to the floor and surrounded by structures to prevent removald' },
//   { key: '3', text: 'Is ATMs network connectivity to the bank or switch protected to prevent the connection of other devices to the network point? '},
//   { key: '4', text: 'Where the user of an ATM blocks his image for camera capture, is there a mechanism in place capable of aborting the transaction?' },
//   { key: '5', text: 'Confirm if the CBN /NDIC sticker is  adequately displayed at the ATM terminals ' },
//   { key: '6', text: 'Confirm if Back-up power is available at all ATM locations in such a way that the machine would not cease operation while in the middle of a transaction ' },
//   { key: '7', text: 'If Waste disposal basket provided at all ATM locations?'},
//   { key: '8', text: 'Confirm if Anti-Skimming devices is installed on the ATMs' },
// ];
// public TellerOps = [
//   { key: '1', text: 'Accubanker in use' },
//   { key: '2', text: 'Teller Till balance and system agree' },
//   { key: '3', text: 'Time Stamping Machine in use '},
//   { key: '4', text: 'Cash in Counter Limit exceeded' },
//   { key: '5', text: 'Cash pick up in line with policy ' },
//   { key: '6', text: 'Automated Deposit slip in place and in use ' },
//   { key: '7', text: 'Teller alarm'},
//   { key: '8', text: 'Confirm if  Tellers do not enter their cubicles with their Jacket/Hand bags/ Phone/ Wallets etc' },
//   { key: '9', text: 'Confirm that Tellers declare their Cash to their Service Officers before commencing any operation'},
//   { key: '7', text: 'Ensure all mobile phones and any other gadgets are not be seen around the cubicle'},
// ];
// public FundTrx = [
//   { key: '1', text: 'MC Printer in place, functional and in use' },
//   { key: '2', text: 'MC manually processed with Approval in place' },
//   { key: '3', text: 'Customers’ accounts debited with MC purchased'},
//   { key: '4', text: 'MC instruments serially issued' },
//   { key: '5', text: 'Cancelled MC instruments are void on the system' },
//   { key: '6', text: 'Branch Created on Western Union/ MoneyGram/Ria and other Platform ' },
// ];
// public ClearAct = [
//   { key: '1', text: 'Branch Endpoint Clearing Account zerorizes on daily basis or at intervals' },
//   { key: '2', text: 'All OBC properly truncated' },
// ];
// public GLRev = [
//   { key: '1', text: 'Trial Balance okay' },
//   { key: '2', text: 'Monthly GL Proof prepared'},
//   { key: '3', text: 'Monthly GL Proof reviewed by HTS & BSM'},
//   { key: '4', text: 'Suspense GL Balance'},
// ];
// public CsService = [
//   { key: '1', text: ' All Accounts opened with complete documentation' },
//   { key: '2', text: 'Confirm that the Account reactivation form was used with complete KYC documentations in place.' },
//   { key: '3', text: 'Confirm that customer has valid ID card and not yet expired'},
//   { key: '4', text: 'Review of liability and tier accounts for documentation and compliance with thresholds for both single and cumulative deposit limits.' },
//   { key: '5', text: 'Confirm existence of information on beneficial owners where a customer is an intermediary i.e. Trust account or other accounts where the operator(s) is/are not the beneficial owners' },
//   { key: '6', text: 'Confirm existence of customers’ records and proper safe keeping for easy reference.' },
//   { key: '7', text: 'Confirm that anonymous accounts, fictitious names and shell companies from doing business in the bank'},
//   { key: '8', text: 'Search Reports in place  ' },
//   { key: '9', text: 'Customers mandate Uploaded' },
//   { key: '10', text: 'Cheque Book  released to RMs and acknowledged by customers' },
//   { key: '11', text: 'Retracted  Other Bank ATM Cards Perforated' },
//   { key: '12', text: 'Landmarks indicated on Visitation Reports '},
//   { key: '13', text: 'Retracted other branch ATM Cards Hotlisted' },
//   { key: '14', text: 'Confirm that stock of token is well documented in register and issued serially.' },
//   { key: '15', text: 'Confirm that number of outstanding tokens tally with the register.' },
//   { key: '16', text: 'Review Customer Service administration for charges obtained on Status enquiry, Reference letter, Letter of non-indebtedness.'},
//   { key: '17', text: 'Review all account closed to confirm that no account was closed without valid BVN and that any such account closed has complete KYC documents and information.' },
//   { key: '18', text: 'Actively operated account of deceased person or defunct organization or liquidated company should be raised as exception if any is noted.' },
//   { key: '19', text: 'Confirm that  searches were conducted on CRMS and at least 2 CB for serial DUD cheque issuer due to insufficient fund before onboarding a current account customer'},
// ];
// public SecReview = [
//   { key: '1', text: 'Fixed Asset register agree with Physical Assets' },
//   { key: '2', text: 'In-house security men adequate' },
//   { key: '3', text: 'Clean desk maintained'},
//   { key: '4', text: 'Integrity test Documented' },
//   { key: '5', text: 'Queue Rope in Branch' },
//   { key: '6', text: 'Branch Generator servicing schedule properly maintained' },
//   { key: '7', text: 'CCTV Functioning/recording'},
//   { key: '8', text: 'Armed police in place day/night' },
//   { key: '9', text: 'Spy hole on Exit door' },
//   { key: '10', text: 'Fire extinguishers available and serviced regularly' },
//   { key: '11', text: 'Pool cars in good condition' },
//   { key: '12', text: 'Fire Alarm, Smoke detector in place and functional'},
//   { key: '13', text: 'Ambience satisfactory?' },
//   { key: '14', text: 'Is Burglar Alarm Activated at EOD?' },
//   { key: '15', text: 'Is Burglar Alarm Deactivated at BOD?' },
//   { key: '16', text: 'Mantrap door functional'},
//   { key: '17', text: 'Security personnel are equipped with necessary tools including hand held scanner.' },
//   { key: '18', text: 'Is First Aid Box in place?' },
// ];
// public ITRoom = [
//   { key: '1', text: 'IT Room movement register maintained' },
//   { key: '2', text: 'IT Room securely locked' },
//   { key: '3', text: 'Stable Link'},
//   { key: '4', text: 'IT Room with functional air-conditioning systems' },
// ];
// public Compliance = [
//   { key: '1', text: 'Picture of President' },
//   { key: '2', text: 'Picture of Governor' },
//   { key: '3', text: 'CBN Licensed'},
//   { key: '4', text: 'Abridged Financial Statement' },
//   { key: '5', text: 'Current Statement of Affairs' },
//   { key: '6', text: 'EFCC - AML Notification to customers' },
//   { key: '7', text: 'STR memos/file. Review of STR filed by branches for rendition of reports on suspicious transactions.'},
//   { key: '8', text: 'Review of currency reportable transactions for rendition of appropriate report.' },
//   { key: '9', text: 'Fire Certificate is in place and yet to expire' },
//   { key: '10', text: 'Rate Board in place and functional' },
//   { key: '11', text: 'NDIC Sticker in the business Premises' },
//   { key: '12', text: 'Branch Complying with SCUML Registration'},
// ];
// public Awareness = [
//   { key: '1', text: 'Availability of External Signages' },
//   { key: '2', text: 'Visibility of External signages (Obscure/Conspicuous)' },
//   { key: '3', text: 'Presence of security guards to direct drive-in and pedestrian customers'},
//   { key: '4', text: 'Visibility of car park notice' },
//   { key: '5', text: 'Availability of Pigeon Boxes' },
// ];
// public Ambience = [
//   { key: '1', text: 'Functional Mantrap doors (Non-problematic)' },
//   { key: '2', text: 'Branch Cooling' },
//   { key: '3', text: 'Clean branch walls'},
//   { key: '4', text: 'Display of posters, frames and signages in appropriate place' },
//   { key: '5', text: 'Branch Tiles Clean' },
//   { key: '6', text: 'Branch Furniture in Good State' },
//   { key: '7', text: 'Branch Toilet in Good Condition' },
// ];
//   public dropdownStyles: Partial<IDropdownStyles> = {
//     dropdown: { width: 200,
//      height: 50},
//      dropdownItemsWrapper: {},
//      label: { fontWeight: "bold" }
     
//   };
//   public toggleDialog(){
//     this.setState({hideDialog: true});
//   }
//   public stackTokens: IStackTokens = { childrenGap: 20 };
//   public render(): React.ReactElement<ISelfAuditProps> {
//     return (
//       <div className={ styles.selfAudit }>
//         <div className={ styles.container }>
//           <div className={ styles.row }>
//             <div className={ styles.title}>
//              <p > BRANCH SERVICES - SELF AUDIT</p>
//             </div>
//             <div className={styles.grid}>
//             <div className={styles.gridRow}>
            
//               <div className={styles.Col1}>
                
//               <Dropdown onChange={this.onChange} id='BCode' placeholder="Select an option" label="Branch Code" 
//               options={this.state.items} styles={this.dropdownStyles}  />
//               </div>
//               <div className={styles.Col2}>
//               <Dropdown onChange={this.On_Change} id='BName' placeholder="Select an option" label="Branch Name" options={this.state.BranchCode} styles={this.dropdownStyles} />
//               </div>
//               <div className={styles.Col3}>
//               <Dropdown onChange={this.onChange3} id='BZone' placeholder="Select an option" label="Area" options={this.state.zone} styles={this.dropdownStyles} />
//                 </div>
//             </div>

//             <div className={styles.gridRow}>
//             <div className={styles.Col1}>
//             <Dropdown onChange={this.onChange4} id='BRegion' placeholder="Select an option" label="Region" options={this.state.region} styles={this.dropdownStyles} />
//              </div>
//              <div className={styles.Col2}>
//              <Dropdown
//       id='Establishment'
//         placeholder="Select an option"
//         label="Est of New account- Individual"
//         selectedKey={this.state.Establishment_of_New_account}
//         options={this.Establishment_of_New_account}
//         styles={this.dropdownStyles}
//         onChange={this.Establishment_of_New_accountFn}
//       />

//              </div>
//              <div className={styles.Col3}>
//              <Dropdown
//       id='EstablishmentCorporate'
//         placeholder="Select an option"
//         label="Est of New account- Corporate"
//         selectedKey={this.state.Establishment_of_New_account_Corporate}
//         options={this.Establishment_of_New_account_Corporate}
//         styles={this.dropdownStyles}
//         onChange={this.Establishment_of_New_account_CorporateFn}
//       />
//              </div>
//             </div>

//             <div className={styles.gridRow}>
//             <div className={styles.Col1}>
//             <Dropdown
//       id='ReactivateDormant'
//         placeholder="Select an option"
//         label="Reactivate Dormant account"
//         selectedKey={this.state.Reactivate_Dormant_account}
//         options={this.Reactivate_Dormant_account}
//         styles={this.dropdownStyles}
//         onChange={this.Reactivate_Dormant_accountFn}
//       />
//              </div>
//              <div className={styles.Col2}>
//              <Dropdown
//       id='AccountClosure'
//         placeholder="Select an option"
//         label="Account Closure"
//         selectedKey={this.state.accountClosure}
//         options={this.accountClosure}
//         styles={this.dropdownStyles}
//         onChange={this.AccountClosureFn}
//       />

//              </div>
//              <div className={styles.Col3}>
//              <Dropdown
//       id='Establishment_of_Call_or_Term_Deposit'
//         placeholder="Select an option"
//         label="Est of Call or Term Deposit"
//         selectedKey={this.state.Establishment_of_Call_or_Term_Deposit}
//         options={this.Establishment_of_Call_or_Term_Deposit}
//         styles={this.dropdownStyles}
//         onChange={this.Establishment_of_Call_or_Term_DepositFn}
//       />
//              </div>
//             </div>
            
//             <div className={styles.gridRow}>
//             <div className={styles.Col1}>
//             <Dropdown
//       id='Reports_on_feps'
//         placeholder="Select an option"
//         label="Reports on FEPs"
//         selectedKey={this.state.ReportFEPs}
//         options={this.ReportFEPs}
//         styles={this.dropdownStyles}
//         onChange={this.ReportFEPsFn}
//       />
//              </div>
//              <div className={styles.Col2}>
//              <Dropdown
//       id='VaultVew'
//         placeholder="Select an option"
//         label="Vault View"
//         selectedKey={this.state.vaultView}
//         options={this.vaultView}
//         styles={this.dropdownStyles}
//         onChange={this.VaultViewFn}
//       />

//              </div>
//              <div className={styles.Col3}>
//              <Dropdown
//       id='BulkRoomReview'
//         placeholder="Select an option"
//         label="Bulk Room Review"
//         selectedKey={this.state.BulkRoomReview}
//         options={this.BulkRoomReview}
//         styles={this.dropdownStyles}
//         onChange={this.BulkRoomReviewFn}
//       />
//              </div>
//             </div>   
            

//             <div className={styles.gridRow}>
//             <div className={styles.Col1}>
//             <Dropdown
//       id='Late/Boxed_Cash_Deposit_Review'
//         placeholder="Select an option"
//         label="Late/Boxed Cash Deposit"
//         selectedKey={this.state.BoxedCashDeposit}
//         options={this.BoxedCashDeposit}
//         styles={this.dropdownStyles}
//         onChange={this.BoxedCashDepositFn}
//       />
//              </div>
//              <div className={styles.Col2}>
//              <Dropdown
//       id='ATMReview'
//         placeholder="Select an option"
//         label="ATM Review"
//         selectedKey={this.state.ATMReview}
//         options={this.ATMReview}
//         styles={this.dropdownStyles}
//         onChange={this.ATMReviewFn}
//       />

//              </div>
//              <div className={styles.Col3}>
//              <Dropdown
//       id='RRATMOps'
//         placeholder="Select an option"
//         label="Requirements ATM Ops"
//         selectedKey={this.state.RRATMOps}
//         options={this.RRATMOps}
//         styles={this.dropdownStyles}
//         onChange={this.RRATMOpsFn}
//       />
//              </div>
//             </div>   
            
//             <div className={styles.gridRow}>
//             <div className={styles.Col1}>
//             <Dropdown
//       id='TellerOps'
//         placeholder="Select an option"
//         label="Teller Operations"
//         selectedKey={this.state.TellerOps}
//         options={this.TellerOps}
//         styles={this.dropdownStyles}
//         onChange={this.TellerOpsFn}
//       />
//              </div>
//              <div className={styles.Col2}>
//              <Dropdown
//       id='FundsTrx'
//         placeholder="Select an option"
//         label="Fund Transfer Ativities"
//         selectedKey={this.state.FundTrx}
//         options={this.FundTrx}
//         styles={this.dropdownStyles}
//         onChange={this.FundTrxFn}
//       />

//              </div>
//              <div className={styles.Col3}>
//              <Dropdown
//       id='ClearAct'
//         placeholder="Select an option"
//         label="Clearing Activities"
//         selectedKey={this.state.ClearAct}
//         options={this.ClearAct}
//         styles={this.dropdownStyles}
//         onChange={this.ClearActFn}
//       />
//              </div>                
            
//             </div>



//             <div className={styles.gridRow}>
//             <div className={styles.Col1}>
//             <Dropdown
//       id='GLRev'
//         placeholder="Select an option"
//         label="GL Review"
//         selectedKey={this.state.GLRev}
//         options={this.GLRev}
//         styles={this.dropdownStyles}
//         onChange={this.GLRevFn}
//       />
//              </div>
//              <div className={styles.Col2}>
//              <Dropdown
//       id='CsService'
//         placeholder="Select an option"
//         label="Customer Service"
//         selectedKey={this.state.CsService}
//         options={this.CsService}
//         styles={this.dropdownStyles}
//         onChange={this.CsServiceFn}
//       />

//              </div>
//              <div className={styles.Col3}>
//              <Dropdown
//       id='SecReview'
//         placeholder="Select an option"
//         label="Security/Admin Review"
//         selectedKey={this.state.SecReview}
//         options={this.SecReview}
//         styles={this.dropdownStyles}
//         onChange={this.SecReviewFn}
//       />
//              </div>                
            
//             </div>


//             <div className={styles.gridRow}>
//             <div className={styles.Col1}>
//             <Dropdown
//       id='ITRoom'
//         placeholder="Select an option"
//         label="IT Room Review"
//         selectedKey={this.state.ITRoom}
//         options={this.ITRoom}
//         styles={this.dropdownStyles}
//         onChange={this.ITRoomFn}
//       />
//              </div>
//              <div className={styles.Col2}>
//              <Dropdown
//       id='Compliance'
//         placeholder="Select an option"
//         label="Compliance/Regulatory"
//         selectedKey={this.state.Compliance}
//         options={this.Compliance}
//         styles={this.dropdownStyles}
//         onChange={this.ComplianceFn}
//       />

//              </div>
//              <div className={styles.Col3}>
//              <Dropdown
//       id='Awareness'
//         placeholder="Select an option"
//         label="Awareness"
//         selectedKey={this.state.Awareness}
//         options={this.Awareness}
//         styles={this.dropdownStyles}
//         onChange={this.AwarenessFn}
//       />
//              </div>                
            
//             </div>
//             <div className={styles.gridRow}>
//             <div className={styles.Col3} >
//             <Dropdown
//       id='Ambience'
//         placeholder="Select an option"
//         label="Branch Ambience"
//         selectedKey={this.state.Ambience}
//         options={this.Ambience}
//         styles={this.dropdownStyles}
//         onChange={this.AmbienceFn}
//       />
//       <Dialog dialogContentProps={dialogContent}
//                   hidden={this.state.hideDialog}
//                   onDismiss={this.toggleDialog}
//                   >
//                   <DialogFooter>
//                     <button onClick={this.toggleDialog}>Close</button>
//                   </DialogFooter>
//                   </Dialog>
//             </div>
            
//             </div>
//             <div className={styles.button}>
//                   <span onClick={this.Sabinus} className={styles.label}>Save</span>
//                 </div>
// </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

