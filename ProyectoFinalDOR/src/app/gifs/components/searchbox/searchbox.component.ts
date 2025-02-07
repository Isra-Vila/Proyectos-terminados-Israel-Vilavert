import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
@Component({
  selector: 'gifs-searchbox',
  template: `
  <style>
    input::placeholder {
      color:rgb(255, 255, 255); 
    } 
    h1{
      text-align: center;
    }
  </style>
    <h1 class="text-light">Tele-Gif</h1>
    <input 
      type="text" 
      class="form-control text-white" 
      placeholder="Buscar..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    >
  `
})
export class SearchboxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){}

  //searchTag(newTag: string){
  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    console.log({newTag});
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
