import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  anoAtual = new Date().getFullYear();

  irParaDelivery() {
    window.location.href = 'https://pizzartesanal.pt/delivery/';
  }
}
