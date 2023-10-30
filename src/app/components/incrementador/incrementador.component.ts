import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{

  @Input('valor') progreso: number = 95;
  @Input()btnClass:string="btn-primary";

  @Output()
  valorSalida: EventEmitter<number> = new EventEmitter<number>();


  ngOnInit(): void {
   this.btnClass=`btn ${this.btnClass}`;
  }




  cambiarValor(valor: number): void {

    if (this.progreso >= 100 && valor > 0) {
      this.valorSalida.emit(100);
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);

  }

  onChange(newValue: number){
    if(newValue>=100){
     this.valorSalida.emit(100);
    }else if(newValue<=0 || null){
      this.valorSalida.emit(0);
    }else{
      this.valorSalida.emit(newValue)
    }
  }
}
