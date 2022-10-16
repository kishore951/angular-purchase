import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor() { }

  userid=""
  password=""

  status:boolean=false

  readValues=()=>{
    let data ={
      "userid":this.userid,
      "password":this.password
    }
    console.log(data)
    this.status=true
  }
 

  ngOnInit(): void {
  }

}
