import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient) { }

  getProductions(){
    console.log('no getProductions');
    return new Promise((resolve, reject) => {
      this.http.get('https://lmcapifilmes.herokuapp.com/api/productions', {})    
      .subscribe
        ( (data: any) => {
          console.log("retorno",data.Production);          
          return resolve(data.Production)

        }), (error => {
          return reject(error)
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);

        });
  });
}

/* Aqui */
  Detalhes(id){
  console.log('no Detalhes');
  return new Promise((resolve, reject) => {
    this.http.get('http://lmcapifilmes.herokuapp.com/api/production/' + id, {})    
    .subscribe
      ( (data: any) => {
        console.log("retorno",data.Production);          
        return resolve(data.Production)

      }), (error => {
        return reject(error)
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
});
}

}

