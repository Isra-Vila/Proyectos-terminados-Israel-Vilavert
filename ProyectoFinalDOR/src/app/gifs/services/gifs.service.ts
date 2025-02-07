import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];

  private _taghistory: string[] = [];
  private apikey: string = 'FtgjESVYwteJMgOveX3V0OWLGTGOowS6';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient ) {

    this.loadLocalStorage();

   }

  get tagHistory(){
    return[...this._taghistory];
  }

  private organizeHistory(tag:string){
    tag = tag.toLowerCase();

    if ( this._taghistory.includes(tag) ){
      this._taghistory = this._taghistory.filter( (oldTag) => oldTag !== tag)
    }

    this._taghistory.unshift(tag);
    this._taghistory = this.tagHistory.splice(0,10);

    this.saveLocalStorage();
  }

  private saveLocalStorage():void{
    /*localStorage: para guardar en el almacenamiento local. setItem(): para
    guardar en el item 'history' donde grabaremos el objeto _taghistory.
    JSON.stringify(): serializa el objeto _taghistory como un string para que
    pueda ser guardado en localStorage. */
    localStorage.setItem('history', JSON.stringify(this._taghistory));
  }

  private loadLocalStorage():void{

    /*!localStorage ≡ si NO hay data grabada con la key 'history'. getItem():
    para mostrar el item 'history' donde se guardó el objeto _taghistory */
    if( !localStorage.getItem('history')) return;

    /*JSON.parse(): para convertir el string en el objeto _taghistory. !: →
    siempre habrá data */
    this._taghistory = JSON.parse(localStorage.getItem('history')!);

    // Para que no haga nada si el historial de búsqueda está vacío
    if(this._taghistory.length === 0) return;
    this.searchTag(this._taghistory[0]);
 
  }
    
  searchTag(tag:string):void {
    if(tag.length === 0) return;
    this.organizeHistory(tag);
  
    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', '6')
      .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(Response =>{
        this.gifList = Response.data;
        console.log(Response);
      })
  }
}