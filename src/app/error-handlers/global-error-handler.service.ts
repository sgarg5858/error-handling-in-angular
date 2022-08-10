import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandlerService  implements ErrorHandler{

  constructor() { }
  //here we can write the logic for error handler
  handleError(error: any): void {
    console.error(error)
  }
}
