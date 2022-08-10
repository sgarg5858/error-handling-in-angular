import { InjectionToken, Injector } from "@angular/core";
import { environment } from "src/environments/environment";
import { Environment } from "../models/Environment.model";


export const ENVIRONMENT = new InjectionToken<Environment>('Environment',{
    factory:()=>{
        return environment
    }
})