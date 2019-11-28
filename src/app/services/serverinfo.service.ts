import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerinfoService {

  public jsonContent:any;

  constructor(private http: HttpClient) { }

  getServerInfo(){
      const URL = ("http://127.0.0.1/preprod");
      // const URL = ("http://localhost:8082?servers=10");
      this.http.get(URL).subscribe(result => {
      this.jsonContent = result
    })
  }
}
