import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
allowNewProduct=true;
productCreationStatus='No Product Added';
productName='';
productCreated=false;
products=[];


  constructor() { }

  ngOnInit(): void {}
  
  onCreateProduct(){
    this.products.push(this.productName);
   this.productCreationStatus = 'product Added !';
   this.productCreated = true;
console.log(this.products);
}
}
