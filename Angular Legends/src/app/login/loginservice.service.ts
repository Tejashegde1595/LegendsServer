import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { User} from '../../models/User'
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }

  
  public loginuser(user:User)
  {
    return this.http.post('http://localhost:3000/users/login',user);
  }
}
