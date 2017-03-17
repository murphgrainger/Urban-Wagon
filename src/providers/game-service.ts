import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


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
	 return this.http.post(SERVER_URL + `/goal/${goalID}/game`, game)
   .toPromise()
 }

 getGameDetails(id) {
   return this.http.get(SERVER_URL + `/game/2`)
   .map(response => response.json())
   .toPromise()
 }


  assignTask(playerID, taskID) {
    let obj = {
      id: taskID
    }
    return this.http.post(SERVER_URL + `/player/${playerID}/task`, obj)
    .toPromise()
  }

  getActivePlayer() {
    return this.http.get(SERVER_URL + `/player/active`)
    .map(response => response.json())
    .toPromise()
  }

  updateTaskStatus(id) {
    let obj = {
      status: 'Completed'
    }
    return this.http.put(SERVER_URL + `/task_status/${id}`, obj)
    .toPromise()
  }


  handleError(error) {
  console.log(error);
  return error.json().message || 'Server error, please try again later';
}


}
