import { Component, OnInit } from '@angular/core';
import { PropertyParameter } from './models/property-parameter.model';
import { Student } from './models/student.model';
import { TableData } from './models/table-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-project';

  student: Student;
  studentParam1 : PropertyParameter;
  studentParam2 : PropertyParameter;
  
  tableData: TableData[];
  tableParameters: PropertyParameter[];



  ngOnInit() {
    this.tableData = this.generateTableData();
    this.tableParameters = this.generateTableParameters();
    
    this.student = this.generateStudentData();

    let params = this.generateStudentParameters();
    this.studentParam1 = params[0];
    this.studentParam2 = params[1];
  }

  public generateTableData(): TableData[]{
    let data = [
      {
        location: {
          country: "Great Britain",
          city: "London"
        },
        cargo: {
          name: "bread",
          type: "food"
        },
        company : {
          name: "Dino-Cab",
          size: 54,
        } 
      },
      {
        location: {
          country: "Russia",
          city: "Moscow"
        },
        cargo: {
          name: "Micro gamer",
          type: "Console"
        },
        company : {
          name: "Tech Labo",
          size: 407,
        } 
      }
    ];

    return data;
  }

  public generateStudentData(): Student {
    let student = {
      age: 21,
      name: "Max",
      group: {
        name: "20PA",
        profession: "Accounter",
        size: 24
      }
    };

    return student;
  }


  public generateTableParameters(): PropertyParameter[] {
    let param = [
      {
        propertyPaths:[
          'location.country',
          'location.city',
        ],
        format: '0; city: 1',
      },
      {
        propertyPaths:[
          'company.name',
          'company.size',
        ],
        format: '0, 1 people',
      },
      {
        propertyPaths:[
          'cargo.name',
          'cargo.type',
        ],
        format: '0, type: 1',
      } 
    ];


    return param;
  }

  public generateStudentParameters() : PropertyParameter[]{
    let param = [
      {
        propertyPaths:[
          'name',
          'age',
          'group.profession'
        ],
        format: 'Name: 0; Age: 1; Proffesion: 2',
      },
      {
        propertyPaths:[
          'group.name',
          'group.size',
        ],
        format: 'Group 0, 1 people',
      } 
    ];

    return param;
  }
}
