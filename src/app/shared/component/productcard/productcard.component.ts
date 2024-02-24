import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct, Productst } from '../../model/interface';


@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {
  @Input() prodarr!: Iproduct

  constructor(private _productService:ProductsService) { }

  ngOnInit(): void {

  }
  onproductupdate(){
    this._productService.onupdatestatus(this.prodarr.id,Productst.inProgress)

  }
  onDispatched(){
    this._productService.onupdatestatus(this.prodarr.id,Productst.Dispatched)
  }
  onDilevered(){
    this._productService.onupdatestatus(this.prodarr.id,Productst.Deleveried)

  }

}
