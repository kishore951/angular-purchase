import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }
status:boolean=false
  name=""
  phoneNo=""
  gender=""
  address=""
  pincode=""
  dob=""
  password=""
  confirmPassword=""


  readValues=()=>{
    let data ={
      "name":this.name,
  "phoneNo":this.phoneNo,
  "gender":this.gender,
  "address":this.address,
  "pincode":this.pincode,
  "dob":this.dob,
  "password":this.password,
  "confirmPassword":this.confirmPassword

 

    }
    console.log(data)
    this.status=true
  }


  ngOnInit(): void {
  }

}
