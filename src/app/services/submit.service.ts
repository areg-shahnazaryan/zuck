import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  constructor(private http: HttpClient) {
  }

/*  public sendMessage(data, urlPart) {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + 'ya29.Glx-B8xS861PywXIxS6_5-K4c0A9UtNMETrnn8ISyLyUztppW78Ttvk_u27DkwljMsEL6h38hFFjjN
      _PAeWsiYoMO6biOuAofE9qfUfpLPU7L4TJZ4g7zdb-IA5BVA',
      'Content-Type': 'message/rfc822',

    });
    return this.http.post
    (
      'https://content.googleapis.com/upload/gmail/v1/users/me/messages/send??key={AIzaSyBVcmH0RC0hFbzysNjBWDQJ7hnIdlO5zjw}',
       data, {headers: header});
  }*/
}
