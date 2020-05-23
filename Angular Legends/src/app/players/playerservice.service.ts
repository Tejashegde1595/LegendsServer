import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlayerserviceService {

  constructor(private http:HttpClient) {

  }

 public getplayers(){
   
   var headers = {'Authorization': 'Bearer '+localStorage.getItem("token")};
   console.log(headers);
   return this.http.get('http://localhost:3000/players',{headers:headers});
 }
}
