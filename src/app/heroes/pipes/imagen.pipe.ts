import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/Heroe.interface';

@Pipe({
    name: 'imagen'
})

export class ImagenPipe implements PipeTransform {
    transform(heroe: Heroe) {

        if (!heroe.id) {
            return 'assets/no-image.png'
        } else if (heroe.alt_img) {
            return heroe.alt_img;
        } else {
            return `assets/heroes/${heroe.id}.jpg`
        }
    }
}