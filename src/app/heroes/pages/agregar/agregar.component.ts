import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/Heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  publishers = [
    "DC comics",
    "Marvel Comics"
  ]

  heroe: Heroe = {
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',    
    first_appearance: '',
    characters: '',
    alt_img: ''   
  }

  constructor(private http: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    if (this.router.url.includes('editar')) {
      this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.http.getHeroeById(id))
      )
      .subscribe(heroe => this.heroe = heroe)
    }
  }

  guardar(){
    console.log(this.heroe);

    if (this.heroe.id) {
      this.http.putHeroe(this.heroe)
        .subscribe(heroe => console.log('Actualizando heroe'))
    } else {
      this.http.postHeroe(this.heroe)
      .subscribe(res => {
        console.log(res);
      })
    }
  }

  borrarHeroe(){
    this.http.deleteHeroe(this.heroe.id!)
      .subscribe(resp => {
        
      })
  }

}
