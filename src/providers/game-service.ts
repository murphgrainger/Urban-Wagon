import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const SERVER_URL = 'http://localhost:8080';

@Injectable()
export class GameService {
  data:any;
  game:any = {};

  constructor(public http: Http) {
    this.http = http;
    this.data = null;
  }

  postGame(game) {
  let goalID = Number(game.goal);
	 this.http.post(SERVER_URL + `/goal/${goalID}/game`, game)
   .subscribe(response => {
     console.log('Success!')
   }, error => {
     console.log(error)
   });
 }

 // getGameDetails() {
 //   this.http.get(SERVER_URL + `game/${gameID}`)
 // }

  handleError(error) {
  console.log(error);
  return error.json().message || 'Server error, please try again later';
}

}
