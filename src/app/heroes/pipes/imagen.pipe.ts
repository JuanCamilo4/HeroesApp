import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/Heroe.interface';

@Pipe({
    name: 'imagen'
})

export class ImagenPipe implements PipeTransform {
    transform(value: Heroe) {
        return `assets/heroes/${value.id}.jpg`
    }
}