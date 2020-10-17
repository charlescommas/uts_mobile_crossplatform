import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.scss'],
})
export class ViewlistComponent implements OnInit {
  @Input() productlist: Product;
  constructor() { }

  ngOnInit() {}

}
