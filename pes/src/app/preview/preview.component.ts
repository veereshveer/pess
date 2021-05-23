import { Component, Input, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  isCollapsed:boolean=true;
  @Input()
 answer='not yet ready';
 checkbox='';
 short='';
 dropdownList: any = [];
 dropdownSettings!: IDropdownSettings; 
  constructor() { }

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'Employee' },
      { item_id: 2, item_text: 'Department' },
      { item_id: 3, item_text: 'Project' },
      { item_id: 4, item_text: 'EPMS Department' },
      { item_id: 5, item_text: 'BI Department' }
    ];
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
    this.dropdownSettings = {
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

preview()
{
  this.isCollapsed=!this.isCollapsed;

}
delete()
{

}
  }


