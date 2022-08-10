import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  private userBehaviorSubject = new BehaviorSubject<any[] | null>(null);
  public readonly users$ = this.userBehaviorSubject.asObservable();

  public getUsers()
  {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users')
    .subscribe({
      next:(users:any[])=>{
        this.userBehaviorSubject.next(users);
      },
      error:(error)=>{
        console.log(error)
        this.userBehaviorSubject.next([]);
      },
      complete:()=>{
        console.log("BAM")
      }
    })
  }

}
