import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-viewgrid',
  templateUrl: './viewgrid.component.html',
  styleUrls: ['./viewgrid.component.scss'],
})
export class ViewgridComponent implements OnInit {
  @Input() productgrid: Product;
  constructor() { }

  ngOnInit() {}

}
