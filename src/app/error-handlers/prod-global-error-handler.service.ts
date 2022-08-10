import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class ProdGlobalErrorHandlerService implements ErrorHandler{

  constructor() { }
  //here we can write the logic for error handler
  handleError(error: any): void {
    console.error("PROD",error)
  }
}