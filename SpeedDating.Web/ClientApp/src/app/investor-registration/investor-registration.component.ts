import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-investor-registration',
  templateUrl: './investor-registration.component.html',
  styleUrls: ['./investor-registration.component.scss']
})
export class InvestorRegistrationComponent implements OnInit {

  public newInvestor: Investor = new Investor("","","");

  constructor(private http : HttpClient, private router:Router) { }

  ngOnInit() {
  }

  register() {
    this.http.post("/api/Registration", this.newInvestor).subscribe(result => {
      this.router.navigateByUrl("investor-preferences/" + result);
    });
  }

}

interface IInvestor {
  FirstName: string;
  LastName: string;
  Company: string;
}

class Investor implements IInvestor {
  FirstName: string;
  LastName: string;
  Company: string;
  constructor(firstName: string, lastName: string, company: string) {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Company = company;
  }
}
