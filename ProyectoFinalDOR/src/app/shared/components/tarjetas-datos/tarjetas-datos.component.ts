import { Component, Input } from '@angular/core';

import { Gif } from '../../../gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'shared-tarjetas-datos',
  templateUrl: './tarjetas-datos.component.html',
  styleUrls: ['./tarjetas-datos.component.css']
})
export class TarjetasDatosComponent {

  @Input() public gifs: Gif[] = [];

}
