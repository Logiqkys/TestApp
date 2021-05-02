import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestMethod, RequestOptions } from '@angular/http';
import { BehaviorSubject, } from 'rxjs';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { throwError } from 'rxjs';
import { Card } from '../models/payment';



@Injectable()
export class EmailService{
    private _url = "http://localhost:5001/WeatherForecast";
    private _pay = "http://localhost:5001/Paymaya";
    constructor(private _http: Http) {
     
    }

    email(file: FormData) : Observable<any>{
    //   let auth = ''; 
    //   if(user.isUser != null){
    //     auth = 'Basic TWFzdGVyOmZ2ZGlnaWxpbms=';
    //   }else{
    //     auth = 'Basic ' +btoa(user.username+':'+user.password);
    //   }
       
    //   sessionStorage.setItem("auth", auth);
    console.log(file);
      var headerOptions = new Headers({'Content-Type': '"multipart/form-data'});
        var requestOption = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
        return this._http.post(this._url, file)
            .map((response: Response) => {
                if(response){
                    if(response.status == 200){
                        // return [{status: response.status, data: response.json()}]
                    }
                } 
            });
    }

    paymaya(card: Card) : Observable<any>{
      //   let auth = ''; 
      //   if(user.isUser != null){
      //     auth = 'Basic TWFzdGVyOmZ2ZGlnaWxpbms=';
      //   }else{
      //     auth = 'Basic ' +btoa(user.username+':'+user.password);
      //   }
         
      //   sessionStorage.setItem("auth", auth);
      // console.log(file);
        var headerOptions = new Headers({'Content-Type': '"application/json'});
          var requestOption = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
          return this._http.post(this._pay, card);
              // .map((response: Response) => {
              //   console.log(response.json())
              //     // if(response){
              //     //     if(response.status == 200){
              //     //       window.open(response.json());
              //     //         // return [{status: response.status, data: response.json()}]
              //     //     }
              //     // } 
              // });

              // return this.api.post<string>(`${this.configService.get('baseUrl')}/auth/login`, user);
      }

    private handleError(error: any) {
        var message = error.json().Error.Message;
        if (error.json().Error.Code == 'ACCOUNT_NOT_FOUND') {
          return throwError(message);
        }
        return Observable.throw(error.json().Error.Message || 'Server error');
      }
}