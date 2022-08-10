import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevGlobalErrorHandlerService } from './error-handlers/dev-global-error-handler.service';
import { GlobalErrorHandlerService } from './error-handlers/global-error-handler.service';
import { ProdGlobalErrorHandlerService } from './error-handlers/prod-global-error-handler.service';
import { Environment } from './models/Environment.model';
import { ENVIRONMENT } from './tokens/environment.token';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { GlobalHttpErrorHandlingInterceptorService } from './http-interceptors/global-http-error-handling-interceptor.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      multi:true,
      useClass:GlobalHttpErrorHandlingInterceptorService
    },
    { provide:ErrorHandler,
      useFactory:((env:Environment)=>{

        if(env.production)
        {
          return new ProdGlobalErrorHandlerService();
        }
        else{
          return new DevGlobalErrorHandlerService();
        }

      }),deps:[ENVIRONMENT] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
