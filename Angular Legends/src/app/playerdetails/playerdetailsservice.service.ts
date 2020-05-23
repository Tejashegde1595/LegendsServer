import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PlayerdetailsserviceService {

  constructor(private http:HttpClient) { }

  public getplayers(playerid:String){
    console.log("Player id ",playerid);
    var headers = {'Authorization': 'Bearer '+localStorage.getItem("token")};
    console.log(headers);
    return this.http.get('http://localhost:3000/players/'+playerid,{headers:headers});
  }
}
