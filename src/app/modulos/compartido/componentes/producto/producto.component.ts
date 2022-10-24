import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProductoDetalle } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  @Input() producto: IProductoDetalle;
  @Input() isAdmin: boolean;
  @Input() isCart: boolean;
  @Output() onClickAccion: EventEmitter<boolean> = new EventEmitter();
  @Output() eliminar: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
