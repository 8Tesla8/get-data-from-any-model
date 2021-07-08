import { Component, Input, OnInit } from "@angular/core";
import { PropertyParameter } from "src/app/models/property-parameter.model";
import { PropertyValueService } from "src/app/services/property-value.service";

@Component({
  selector: 'app-prop-format',
  templateUrl: './prop-format.component.html',
  styleUrls: ['./prop-format.component.css']
})
export class PropFormatComponent implements OnInit {

  @Input() data: any;

  @Input() parameter: PropertyParameter;
  
  public valueStr = ""; 

  private propertyService = new PropertyValueService();


  constructor() {
  }

  ngOnInit() {
    let str = this.propertyService.transformPropertyIntoString(
      this.data, this.parameter.propertyPaths, this.parameter.format);

     this.valueStr = str; 
  }


}
