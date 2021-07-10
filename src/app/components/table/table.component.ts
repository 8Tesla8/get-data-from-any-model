import { Component, Input } from "@angular/core";
import { PropertyParameter } from "src/app/models/property-parameter.model";
import { PropertyValueService } from "src/app/services/property-value.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() data: any[];

  @Input() parameters: PropertyParameter[];

  private propertyService = new PropertyValueService();

  getValue(obj: any, parameter:PropertyParameter){
    let str = this.propertyService.transformPropertyIntoString(
      obj, parameter.propertyPaths, parameter.format);

      return str;
  }

}
