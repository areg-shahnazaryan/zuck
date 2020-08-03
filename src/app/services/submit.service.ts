import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {
  vacancy: string;

  constructor(private http: HttpClient) {
  }

  createOrder(url, data) {
    return this.http.post(`https://zuckandberg.bitrix24.com/rest/378/dlpp93croousv7w4/${url}`, data);
  }
}
