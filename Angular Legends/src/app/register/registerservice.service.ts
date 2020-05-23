import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { User} from '../../models/User'
@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  constructor(private http:HttpClient) {

  }

 public registeruser(user:User)
 {
   return this.http.post('http://localhost:3000/users/signup',user);
 }
}
