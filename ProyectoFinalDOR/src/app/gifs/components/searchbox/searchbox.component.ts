import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
@Component({
  selector: 'gifs-searchbox',
  template: `
  <style>
    input::placeholder {
      color:rgb(255, 255, 255); 
    } 
  </style>
    <h5 class="text-light">Buscar:</h5>
    <input 
      type="text" 
      class="form-control text-white" 
      placeholder="Buscar gifs..."
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
