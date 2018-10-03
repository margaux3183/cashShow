import { Injectable } from '@angular/core'
import { Http, Response, Headers} from'@angular/http'
import { World, Pallier, Product} from'./world';

@Injectable({
  providedIn: 'root'
})
export class RestserviceService {
 
  server : string
  user : string

  constructor(private http:Http) { 

   this.server = "http://localhost:8080/"
    this.user =  ""  ;
  }
  
  private handleError(error: any): Promise<any>
   { console.error('An error occurred', error);
    return Promise.reject(error.message || error); } 
  
  
  getWorld(): Promise<World> 
  { return this.http.get(this.server + "adventureisis/generic/world")
   .toPromise().then(response =>response.json()).catch(this.handleError); };

   getUser(): string {
    return this.user;
  }

  setUser(newUser: string) {
      this.user = newUser;
  }

  getServer(): string {
    return this.server;
  }

  setServer(newServer: string) {
      this.server = newServer;
  }
}

