import { IDropdownOption } from "office-ui-fabric-react";
var items: IDropdownOption[]=[];
export interface ISelfAuditState {
  
  items: IDropdownOption[];
  selecteditems: IDropdownOption[];
  BranchCode: IDropdownOption[];
  selectedBranchCode: IDropdownOption[];
  zone: IDropdownOption[];
  selectedZone: IDropdownOption[];
  region: IDropdownOption[];
  selectedRegion: IDropdownOption[];
  Establishment_of_New_account: string;
  Establishment_of_New_account_Corporate: string;
  Reactivate_Dormant_account: string;
  accountClosure: string;
  Establishment_of_Call_or_Term_Deposit: string;
  ReportFEPs: string;
  vaultView: string;
  BulkRoomReview: string;
  BoxedCashDeposit: string;
  ATMReview: string;
  RRATMOps: string;
  TellerOps: string;
  FundTrx: string;
  ClearAct: string;
  GLRev: string;
  CsService: string;
  SecReview: string;
  ITRoom: string;
  Compliance: string;
  Awareness: string;
  Ambience: string;
  hideDialog: boolean;
}
