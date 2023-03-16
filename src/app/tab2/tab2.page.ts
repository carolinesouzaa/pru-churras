import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valor = 1;
  ponto = 0;
  ponto2 = 0;
  partida = 0;
  partida2 = 0;

  constructor(
    private toastController: ToastController,
    private alertController: AlertController
  ) {}

  add1() {
    this.valor = 1;
  }

  add3() {
    this.valor = 3;
  }

  add6() {
    this.valor = 6;
  }

  add9() {
    this.valor = 9;
  }

  add12() {
    this.valor = 12;
  }

  async addValor() {
    this.ponto += this.valor;
    if (this.ponto >= 12) {
      this.partida += 1;
      this.ponto = 0;
      this.ponto2 = 0;
    }

    this.valor = 1;
  }

  async addValor2() {
    this.ponto2 += this.valor;
    if (this.ponto2 >= 12) {
      this.partida2 += 1;
      this.ponto = 0;
      this.ponto2 = 0;
    }

    this.valor = 1;
  }

  tiraValor() {
    this.ponto -= this.valor;
    this.ponto = this.ponto < 0 ? 0 : this.ponto;

    this.valor = 1;
  }

  tiraValor2() {
    this.ponto2 -= this.valor;
    this.ponto2 = this.ponto < 0 ? 0 : this.ponto;

    this.valor = 1;
  }

  limpar() {
    this.valor = 1;
    this.ponto = 0;
    this.ponto2 = 0;
    this.partida = 0;
    this.partida2 = 0;
  }

}



