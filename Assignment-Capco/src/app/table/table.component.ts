import { Component, OnInit } from '@angular/core';
import { TableapiService } from '../tableapi.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  manuInfo: any;
  sampleData: any;
  controlRow = 20;

  constructor(private data: TableapiService) { }

  ngOnInit() {
    this.data.getJsonInfo().subscribe( data => {
      this.sampleData = data;
      console.log(data);
    });
  }
  // function to select the  row data from table

  getManType(manuType: any) {
    this.manuInfo = manuType;
    // tslint:disable-next-line:max-line-length
    alert(this.manuInfo.id + ',' + this.manuInfo.name + ',' + this.manuInfo.phone + ',' + this.manuInfo.email + ',' + this.manuInfo.address_1 + ',' + this.manuInfo.city + ',' + this.manuInfo.company + ',' + this.manuInfo.date_entry);
    console.log(manuType);
  }

}
