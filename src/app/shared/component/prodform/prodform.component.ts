import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { Iproduct, Productst } from '../../model/interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-prodform',
  templateUrl: './prodform.component.html',
  styleUrls: ['./prodform.component.scss']
})
export class ProdformComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private _uuidservuce: UuidService,
    private _productService: ProductsService) { }

  ngOnInit(): void {
    this.createProductForm();
  }
  public createProductForm() {
    this.productForm = new FormGroup({
      pname: new FormControl(null, [Validators.required]),
      pdetails: new FormControl(null, [Validators.required]),

    })
  }
  public onProductAdd() {
    if (this.productForm.valid) {
      let product: Iproduct = {
        ...this.productForm.value,
        id: this._uuidservuce.generateUUID(),
        pstatus: Productst.inProgress
      };
      this.productForm.reset();
      console.log(product);
      this._productService.addproduct(product);
    }

  }
}
