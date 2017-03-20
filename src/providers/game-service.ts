import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


const SERVER_URL = 'http://localhost:8080';
const HEROKU_URL = 'https://modern-pioneer.herokuapp.com'

@Injectable()
export class GameService {
  data:any;
  game:any = {};

  constructor(public http: Http) {
    this.http = http;
    this.data = null;
    this.getURL()
}

    postGame(game) {
    let goalID = Number(game.goal);
  	 return this.http.post(this.getURL() + `/goal/${goalID}/game`, game)
     .toPromise()
   }

   getGameDetails(id) {
     return this.http.get(this.getURL() + `/game/2`)
     .map(response => response.json())
     .toPromise()
   }

   getPlayers(id) {
     return this.http.get(this.getURL() + `/game/${id}/player`)
     .map(response => response.json())
     .toPromise()
   }

  assignTask(playerID, taskID) {
    let obj = {
      id: taskID
    }
    return this.http.post(this.getURL() + `/player/${playerID}/task`, obj)
    .toPromise()
  }

  getActivePlayer() {
    return this.http.get(this.getURL() + `/player/active`)
    .map(response => response.json())
    .toPromise()
  }

  updateTaskStatus(id, status) {
    let obj = {
      status: status
    }
    return this.http.patch(this.getURL() + `/task_status/${id}`, obj)
    .toPromise()
  }

  updatePlayerHealth(player) {
    let obj = {
      morale: player.morale,
      rest_count: player.rest_count
    }
    return this.http.patch(this.getURL() + `/player/${player.id}`, obj)
    .toPromise()
  }

  updatePlayerRest(player) {
    let obj = {
      rest_count: player.rest_count - 1
    }
    return this.http.patch(this.getURL() + `/player/${player.id}/rest_count`, obj)
    .toPromise()
  }



   getURL() {
        if (window.location.host.indexOf('localhost') != -1) {
            return SERVER_URL;
        } else {
            return HEROKU_URL;
        }
    }

  handleError(error) {
  console.log(error);
  return error.json().message || 'Server error, please try again later';
}



}
