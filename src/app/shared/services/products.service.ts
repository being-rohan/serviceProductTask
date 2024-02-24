import { Injectable } from '@angular/core';
import { Iproduct, Productst } from '../model/interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  productArray: Array<Iproduct> = [
    {
      pname: 'Samsung 31',
      pdetails: 'Mobile 128 6',
      pstatus: Productst.inProgress,
      id: 'qwerty3456wertyu',
    },
    {
      pname: 'Samsung S32',
      pdetails: 'Mobile 128 6',
      pstatus: Productst.Deleveried,
      id: 'ghjkl5678rtyui',
    },
  ];
  constructor(private _snackbar: SnackbarService) { }

  fetchall(): Array<Iproduct> {
    return this.productArray
  }
  addproduct(product: Iproduct) {

    this.productArray.push(product);
    this._snackbar.opensanck(`the product ${product.pname} is added!!`)

  
  }
  onupdatestatus(id: string, updatedProduct: Productst){
    
    for(const obj of this.productArray){
      if(obj.id===id){
        let oldstat= obj.pstatus
        obj.pstatus=updatedProduct;
        this._snackbar.opensanck(`this Status of ${obj.pname} is changed from ${oldstat}  to ${updatedProduct}`)
      }
    }
  }


}


