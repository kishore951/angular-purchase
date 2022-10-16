import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor( private myrouter:Router) { }

  userid=""
  password=""

  status:boolean=false

  readValues=()=>{
    let data ={
      "userid":this.userid,
      "password":this.password
    }
    if(this.userid == "admin" && this.password=="12345") {
      this.myrouter.navigate(["/dashboard"])
    
    }else{
      alert("invalid login")
    }
    console.log(data)
    this.status=true
  }
  
 

  ngOnInit(): void {
  }

}
