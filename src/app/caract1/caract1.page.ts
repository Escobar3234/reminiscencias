import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caract1',
  templateUrl: './caract1.page.html',
  styleUrls: ['./caract1.page.scss'],
})
export class Caract1Page implements OnInit {
  dropdownVisible: string | null = null; // Cambiamos a string para indicar qué dropdown está visible

  constructor() {}

  ngOnInit() {}

  toggleDropdown(type: string) {
    // Si ya está visible, lo ocultamos; si no, mostramos el seleccionado
    this.dropdownVisible = this.dropdownVisible === type ? null : type;
  }
}
