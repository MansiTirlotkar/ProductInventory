import { Component, OnInit } from '@angular/core';
import { signUp } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  showLogin=false;
  authError:string='';
  constructor(private seller:SellerService) {}
  ngOnInit(): void {
    this.seller. reloadSeller()
  }
  signUp(data: signUp): void {
    console.warn(data);
    this.seller.userSignUp(data);
  }
  login(data: signUp): void {
    this.authError="";
    //console.warn(data);
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError: any)=>{
      if(isError){
        this.authError="Email or password is invalid";
      }
    })
  }
  
  openLogin(){
    this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }
}