import {Component, OnInit} from '@angular/core';
import {CompaniesService} from './companies.service';
import {AppConstants} from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  companies: any = [];
  formData: any = {};

  constructor(private companiesService: CompaniesService) {
  }

  ngOnInit() {
    this.companiesService.findAll().subscribe(companies => {
      this.companies = companies;
    });
  }

  submit() {
    const params = [];
    if (this.formData.companyId && this.formData.companyId !== 'null') {
      params.push('companyId=' + this.formData.companyId);
    }
    if (this.formData.beginDate) {
      params.push('beginDate=' + this.formData.beginDate);
    }
    if (this.formData.endDate) {
      params.push('endDate=' + this.formData.endDate);
    }
    if (this.formData.layout) {
      params.push('layout=' + this.formData.layout);
    }
    window.open(AppConstants.SERVER_URL + '/excel/index?' + params.join('&'), '_blank');
  }
}
