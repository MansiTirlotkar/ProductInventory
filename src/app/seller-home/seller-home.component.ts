import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import {faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
searchInput: any;
submitSearch(arg0: any) {
throw new Error('Method not implemented.');
}
  productList: undefined | product[];
  productMessage: undefined | string;
  icon=faTrash ;
  editIcon=faEdit;
  searchText: string = '';
  searchResult:undefined|product[];

  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.list();

  }

  deleteProduct(id:number) {
    console.warn("test id", id)

    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = "Product is deleted";
        this.list();
      }
    });

    setTimeout(() => {
      this.productMessage=undefined;
    }, 3000);
  }

  list(){
      this.product.productList().subscribe((result) => {
        console.warn(result);
        if(result){
          this.productList = result;
        }
      });
  }
  // Function to filter productList based on searchText
  filterProductList(): product[] {
    return (this.productList ?? []).filter(
      (item) =>
        item.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        item.description.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  SearchProduct(query:KeyboardEvent){
    if(query){
      const element=query.target as HTMLInputElement;
      this.product.searchProducts(element.value).subscribe((result)=>{
        console.warn(result)
        if(result.length>5){
          result.length=5;
        }
        this.searchResult=result;

      })
    }

  }
  hideSearch(){
    this.searchResult=undefined
  }
}
