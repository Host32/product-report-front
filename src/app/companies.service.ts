import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get(AppConstants.SERVER_URL + '/company/index.json');
  }
}
