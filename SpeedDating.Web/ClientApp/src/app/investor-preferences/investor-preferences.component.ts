import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-investor-preferences',
  templateUrl: './investor-preferences.component.html',
  styleUrls: ['./investor-preferences.component.scss']
})
export class InvestorPreferencesComponent implements OnInit {
  preferences = new FormControl();
  companyList: string[] = ['Microsoft', 'Google', 'Apple', 'Amazon', 'Netflix', 'Facebook'];
  constructor(private router:Router) { }

  ngOnInit() {
    //TODO : load avaiable companies
  }

  finish() {
    //TODO : save preferences
    this.router.navigateByUrl("complete-investor-registration");
    
  }
}
