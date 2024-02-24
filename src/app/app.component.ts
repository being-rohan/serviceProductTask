import { Component, OnInit } from '@angular/core';
import { ProductsService } from './shared/services/products.service';
import { Iproduct } from './shared/model/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'serviceproducttask';
  prodArr!: Array<Iproduct>
  constructor(private _productservice: ProductsService) { }
  ngOnInit(): void {
    this.prodArr = this._productservice.fetchall()
  }

}
