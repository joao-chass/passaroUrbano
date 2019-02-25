import { Component, OnInit } from '@angular/core';
import { OfertasService } from './../../../ofertas.service';
import { Oferta } from '../shared/oferta.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private OfertasService: OfertasService) { }

  ngOnInit() {
    //this.ofertas =  this.OfertasService.getOfertas()
    //console.log(this.ofertas);

    this.OfertasService.getOfertas()
      .then(
        (ofertas: Oferta[]) => {  
        this.ofertas = ofertas 
      } )
      .catch(
        ( param: any ) => {
  })
  }

}
