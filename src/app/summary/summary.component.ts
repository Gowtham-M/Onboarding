import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class SummaryComponent implements OnInit {
  public item_id:any;
  public item_text:any;
  public dropdownList: { item_id: number; item_text: string }[] = [];
  title = 'angular 10';
  public selectedItems: { item_id: number; item_text: string }[] = [];
  dropdownSettings = {};

  constructor() { }


  
  ngOnInit(){
 
 this.dropdownList = [
  { item_id: 1, item_text: 'Mumbai' },
  { item_id: 2, item_text: 'Bangaluru' },
  { item_id: 3, item_text: 'Pune' },
  { item_id: 4, item_text: 'Navsari' },
  { item_id: 5, item_text: 'New Delhi' }
];
this.selectedItems = [
  { item_id: 3, item_text: 'Pune' },
  { item_id: 4, item_text: 'Navsari' }
];
this.dropdownSettings= {
  singleSelection: false,
  idField: 'item_id',
  textField: 'item_text',
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  itemsShowLimit: 3,
  allowSearchFilter: true
};

}

onItemSelect(item: any) {
  console.log(item);
}
onSelectAll(items: any) {
  console.log(items);
}
onItemDeSelect(item: any) {
  console.log(item);
}

}

