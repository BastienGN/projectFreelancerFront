import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Test } from '../models/test';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  tests: any;
  test: Test = new Test();

  constructor(private testService: TestService, private appService: AppService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.testService.findAll().subscribe(data => { this.tests = data });
  }
  deleteTest(id: number) {
    this.testService.delete(id).subscribe(() => { this.findAll() });
  }

  saveTest() {
    this.testService.save(this.test).subscribe(
      () => { this.findAll(); this.test = new Test(); })}
      

  findOne(id: number) {
    this.testService.findOne(id).subscribe(data => { this.test = data });
  }

  authenticated(){
    return this.appService.authenticated;
  }
  log(){
    if(this.appService.isFreelancer==true){
      return true;
    }
    else{
      return false;
    }
  }
  logAdmin(){
    if(this.appService.isAdmin==false){
      return true;
    }
    else{
      return false;
    }
  }

}
