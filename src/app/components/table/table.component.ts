import { Component, Input, OnInit } from "@angular/core";
import { PropertyParameter } from "src/app/models/property-parameter.model";
import { PropertyValueService } from "src/app/services/property-value.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data: any[];

  @Input() parameters: PropertyParameter[];

  private propertyService = new PropertyValueService();


  constructor() {
  }

  ngOnInit() {
    // array.forEach(element => {      
    // });

  }

  getValue(obj: any, parameter:PropertyParameter){
    let str = this.propertyService.transformPropertyIntoString(
      obj, parameter.propertyPaths, parameter.format);

      return str;
  }

}
