import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http:HttpClient) { }

  public pollsData:Array<any> = [];

  public fetchPolls(){
    return new Promise<any>((resolve, reject)=>{
      this.http.get('http://localhost:3000/polls').subscribe(
        (res)=>{
          resolve(res);
        },
        (err)=>{
          reject(err);
        }
      );
    });
  }
}
