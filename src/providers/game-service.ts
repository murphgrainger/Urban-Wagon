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
  let goalID = Number(game.goal);
	 this.http.post(SERVER_URL + `/goal/${goalID}/game`, game)
   .subscribe(data => {
     console.log(data)
   }, error => {
     console.log(error)
   });
 }

  handleError(error) {
  console.log(error);
  return error.json().message || 'Server error, please try again later';
}

}
