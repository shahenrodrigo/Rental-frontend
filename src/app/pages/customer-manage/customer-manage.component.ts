import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-manage',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './customer-manage.component.html',
  styleUrl: './customer-manage.component.css'
})
export class CustomerManageComponent {

  public customer:any={
    name:"",
    city:"",
    contact:""

  };

  constructor(private http:HttpClient){
    this.loadTable()

  }

  public addCustomer(){

    this.http.post("http://localhost:8080/customer/add-customer",this.customer).subscribe((data)=>{
      alert("Customer Added !!!");
      this.loadTable()
    })
  }

  public customerList:any=[];

  

  loadTable(){
    this.http.get("http://localhost:8080/customer/get-all").subscribe((data)=>{
      console.log(data);
      this.customerList=data;
      
    })
  }

  public deleteCustomerById(id:any){
    this.http.delete(`http://localhost:8080/customer/delete-by-id/${id}`).subscribe((data)=>{
      alert("customer deleted !!!");
      this.loadTable();
    })
  }

  public customerTem:any={}

  public updateCustomer(customer:any){
    console.log(customer);
    this.customerTem=customer;
  //  
  }

  saveCustomer(){
    this.http.put("http://localhost:8080/customer/update-customer",this.customerTem).subscribe((data)=>{
      this.loadTable();
    })
  }

 

}
