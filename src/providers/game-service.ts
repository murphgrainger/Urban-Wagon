import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const SERVER_URL = 'http://localhost:8080';

@Injectable()
export class GameService {
  data:any;

  constructor(public http: Http) {
    this.http = http;
    this.data = null;
  }

  postGame(game) {
	 this.http.post(SERVER_URL + `/user/1/game`, game)
   .subscribe(data => {
   }, error => {
     console.log('Error: Game did not save!')
   });
 }

  handleError(error) {
  console.log(error);
  return error.json().message || 'Server error, please try again later';
}

}
