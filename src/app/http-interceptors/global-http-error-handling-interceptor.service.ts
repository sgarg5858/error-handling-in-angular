import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { catchError, concatMap, delay, EMPTY, finalize, map, Observable, of, retryWhen, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalHttpErrorHandlingInterceptorService implements HttpInterceptor {

  constructor() { }

  //HttpRequest => The HttpRequest is an outgoing HTTP request which is being intercepted. 
  //It contains URL, method, headers, body, and other request configuration. 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

     req = req.clone({headers:req.headers.set("name","Sanjay")});
    console.log(req);

    return next.handle(req).pipe(

      map((response)=>{
        console.log(response);
        return response;
      }),
      retryWhen(
        (errors)=>errors.pipe(
          concatMap((error,index)=>{
            if(index>2)
            {
              return throwError(()=>new Error(error))
            }
            else{
              return of(error).pipe(delay(2000))
            }
          })
        )
        ),
      catchError((err)=>{
        console.log("Error Intercepted in Http Error Interceptor",err);
        return throwError(()=>new Error(err))
      }),
      finalize(()=>{
        const profilingMsg = `${req.method} ${req.urlWithParams}`;
        console.log(profilingMsg);
      })
    )

  }
}
