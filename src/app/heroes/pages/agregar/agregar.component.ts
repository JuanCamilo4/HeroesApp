import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
