import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../../services/student-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public studentsList: any;
  public studentForm: FormGroup;
  public val: string = '';
  constructor(
    private formBilder: FormBuilder,
    private studentsServ: StudentServiceService,
  ) { }

  ngOnInit() {
    this.studentsInfo();
    this.setFormControl()
  }
  setFormControl() {
    this.studentForm = this.formBilder.group({
      name: [''],
      last_name: [''],
      email: [''],
      phone: [''],
      groupId: [''],
      facultyId: ['']
    })
  }
  public studentsInfo() {
    this.studentsServ.studentTableItem().
      subscribe(
        (data) => {
          this.studentsList = data;
        },
        (error) => {
          console.log(error);
        }
      )
  }

  getValueForNam(value: string) {
    this.val = value;
    this.getValueForName
  }

  get getValueForName() {
    if (this.val === "name") {
      const name = this.studentForm.value.name.toLowerCase();
      return this.filtrName(name);
    } else if (this.val === "last_name") {
      const last_name = this.studentForm.value.last_name.toLowerCase()
      return this.filterLastName(last_name);
    } else if (this.val === "email") {
      const email = this.studentForm.value.email.toLowerCase();
      return this.filterEmail(email)
    } else if (this.val === "phone") {
      const phone = this.studentForm.value.phone;
      return this.filtrPhone(phone);
    } else if (this.val === "facultyId") {
      console.log(this.studentForm.value.facultyId)
      return this.filtrFacuty();
    } else if (this.val === "groupId") {
      return this.filterGroup();
    }
    return this.studentsList;
  }

  private filtrName(value: string){
    if(this.studentForm.value.last_name.length > 0){
      const last_name = this.studentForm.value.last_name.toLowerCase();
      return this.studentsList.filter(student => student.name.toLowerCase().includes(value) && student.last_name.toLowerCase().includes(last_name))
    } else if(this.studentForm.value.email.length > 0){
      const email=this.studentForm.value.email.toLowerCase()
      return this.studentsList.filter(student => student.name.toLowerCase().includes(value) && student.email.toLowerCase().includes(email))
    }else if(this.studentForm.value.phone.length > 0){
      const phone = this.studentForm.value.phone;
      return this.studentsList.filter(student => student.name.toLowerCase().includes(value) && student.phone.includes(phone))
    }
    else if(this.studentForm.value.facultyId){
      return this.studentsList.filter(student => (student.get_faculty.name === this.studentForm.value.facultyId) && student.name.toLowerCase().includes(value))
    }
    else if(this.studentForm.value.groupId){
      return this.studentsList.filter(student => student.name.toLowerCase().includes(value) && (student.get_group[0].name === this.studentForm.value.groupId))
    }
    else {
      return this.studentsList.filter(student => student.name.toLowerCase().includes(value));
    }
  }

  private filterLastName(value: string) {
    if(this.studentForm.value.name.length > 0){
      const name = this.studentForm.value.name.toLowerCase();
      return this.studentsList.filter(student => student.name.toLowerCase().includes(name) && student.last_name.toLowerCase().includes(value))
    }
    else if(this.studentForm.value.email.length > 0){
      const email=this.studentForm.value.email.toLowerCase();
      return this.studentsList.filter(student => student.last_name.toLowerCase().includes(value) && student.email.toLowerCase().includes(email))
    }
    else if(this.studentForm.value.phone.length > 0){
      const phone = this.studentForm.value.phone;
      return this.studentsList.filter(student => student.last_name.toLowerCase().includes(value) && student.phone.includes(phone))
    }
    else if(this.studentForm.value.facultyId){
      return this.studentsList.filter(student => (student.get_faculty.name === this.studentForm.value.facultyId) && student.last_name.toLowerCase().includes(value))
    }
    else if(this.studentForm.value.groupId){
      return this.studentsList.filter(student => student.last_name.toLowerCase().includes(value) && (student.get_group[0].name === this.studentForm.value.groupId))
    }
     else {
      return this.studentsList.filter(student => student.last_name.toLowerCase().includes(value));
    }
  }
  private filterEmail(value:string){
    if(this.studentForm.value.name.length > 0){
      const name = this.studentForm.value.name.toLowerCase();
      return this.studentsList.filter(student => student.name.toLowerCase().includes(name) && student.email.toLowerCase().includes(value))
    }else if(this.studentForm.value.last_name.length > 0){
      const last_name = this.studentForm.value.last_name.toLowerCase();
      return this.studentsList.filter(student => student.email.toLowerCase().includes(value) && student.last_name.toLowerCase().includes(last_name))    
    }else if(this.studentForm.value.phone.length > 0){
      const phone = this.studentForm.value.phone;
      return this.studentsList.filter(student => student.email.toLowerCase().includes(value) && student.phone.includes(phone))
    }
    else if(this.studentForm.value.facultyId){
      return this.studentsList.filter(student => (student.get_faculty.name === this.studentForm.value.facultyId) && student.email.toLowerCase().includes(value))
    }
    else if(this.studentForm.value.groupId){
      return this.studentsList.filter(student => student.email.toLowerCase().includes(value) && (student.get_group[0].name === this.studentForm.value.groupId))
    }
    else {
      return this.studentsList.filter(student => student.email.toLowerCase().includes(value));
    }
    
  }
  private filtrPhone(value:number){
    if(this.studentForm.value.name.length > 0){
      const name = this.studentForm.value.name.toLowerCase();
      return  this.studentsList.filter(student => student.name.toLowerCase().includes(name) && student.phone.includes(value))
    }
    else if(this.studentForm.value.last_name.length > 0){
      const last_name = this.studentForm.value.last_name.toLowerCase();
      return this.studentsList.filter(student => student.phone.includes(value) && student.last_name.toLowerCase().includes(last_name))
    }
    else if(this.studentForm.value.email.length >0 ){
      const email=this.studentForm.value.email.toLowerCase();
      return this.studentsList.filter(student => student.phone.includes(value) && student.email.toLowerCase().includes(email))
    }
    else if(this.studentForm.value.facultyId){
      return this.studentsList.filter(student => (student.get_faculty.name === this.studentForm.value.facultyId) && student.phone.includes(value))
    }
    else if(this.studentForm.value.groupId){
      return this.studentsList.filter(student => student.phone.toLowerCase().includes(value) && (student.get_group[0].name === this.studentForm.value.groupId))
    }
    else{
      return this.studentsList.filter(student => student.phone.includes(value));
    }

  }


  private filtrFacuty(){
    if (!this.studentForm.value.facultyId.length) {
      return this.studentsList;
    } else {
      if(this.studentForm.value.name.length > 0){
        const name = this.studentForm.value.name.toLowerCase();
        return this.studentsList.filter(student => (student.get_faculty.name === this.studentForm.value.facultyId) && student.name.toLowerCase().includes(name))
       }
       else if(this.studentForm.value.last_name.length > 0){
        const last_name = this.studentForm.value.last_name.toLowerCase();
        return this.studentsList.filter(student => (student.get_faculty.name === this.studentForm.value.facultyId) && student.last_name.toLowerCase().includes(last_name))
       }
       else if(this.studentForm.value.email.length > 0){
        const email=this.studentForm.value.email.toLowerCase();
        return this.studentsList.filter(student => (student.get_faculty.name === this.studentForm.value.facultyId) && student.email.toLowerCase().includes(email))
       }
       else if(this.studentForm.value.phone.length > 0){
        const phone = this.studentForm.value.phone;
        return this.studentsList.filter(student => (student.get_faculty.name === this.studentForm.value.facultyId) && student.phone.includes(phone))  
       }
       else if(this.studentForm.value.groupId){
        return this.studentsList.filter(student => (student.get_faculty.name === this.studentForm.value.facultyId) && (student.get_group[0].name === this.studentForm.value.groupId))
      }
       else{
        return this.studentsList.filter(student => student.get_faculty.name === this.studentForm.value.facultyId);
       }
    }
  }



  private filterGroup(){
    
    if(!this.studentForm.value.groupId.length){
     
      return this.studentsList;

    }else {
      if(this.studentForm.value.name.length > 0){
        const name = this.studentForm.value.name.toLowerCase();
        return this.studentsList.filter(student => (student.get_group[0].name === this.studentForm.value.groupId) && student.name.toLowerCase().includes(name))         
      }
      else if(this.studentForm.value.last_name.length > 0){
        const last_name = this.studentForm.value.last_name.toLowerCase();
        return this.studentsList.filter(student => (student.get_group[0].name === this.studentForm.value.groupId) && student.last_name.toLowerCase().includes(last_name))
      }
      else if(this.studentForm.value.email.length > 0){
        const email=this.studentForm.value.email.toLowerCase();
        return this.studentsList.filter(student => (student.get_group[0].name === this.studentForm.value.groupId) && student.email.toLowerCase().includes(email))
       }
       else if(this.studentForm.value.phone.length > 0){
        const phone = this.studentForm.value.phone;
        return this.studentsList.filter(student => (student.get_group[0].name === this.studentForm.value.groupId) && student.phone.includes(phone))       
       }
       else if(this.studentForm.value.facultyId){
        return this.studentsList.filter(student => (student.get_faculty.name === this.studentForm.value.facultyId) && (student.get_group[0].name === this.studentForm.value.groupId))
       }else{
        return this.studentsList.filter(student => (student.get_group[0].name === this.studentForm.value.groupId));
      }

    }
    
  }

  
}
