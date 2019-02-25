 //import { Http} from '@angular/http'
 import { Injectable } from '@angular/core'
 import { Oferta } from 'src/app/shared/oferta.model';
 import { HttpClient} from '@angular/common/http';
 import { Observable } from 'rxjs';
 import { URL_API } from 'src/app/app.api';
 import { map, retry } from 'rxjs/operators';

  
 import 'rxjs'



  
  
 @Injectable()
  
 export class OfertasService{

    //private url_api = 'http://localhost:3000/ofertas'

     constructor(private http: HttpClient){}
  
     public getOfertas(): Promise<Array<Oferta>>{
         return this.http.get(`${URL_API}/ofertas?destaque=true`)
             .toPromise()
             .then((resposta: any) => resposta)
     }   

     public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]>{
         return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
         .toPromise()
         .then((resposta: any)=> resposta)
     }

     public getOfertaPorId(id: number): Promise<Oferta> {
         return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: any) => {              
               return resposta[0]    
            })
     }

     public getComoUsarOfertaId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            
            return resposta [0].descricao
        })
     }

     public getComoOndeFicaOfertaId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta [0].descricao
        })
     }

     public getPesquisaOfertas(termo : string): Observable<Oferta[]>{
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
        .pipe(retry(20))
        .pipe(map((resposta : any ) => resposta))
    }
    }
