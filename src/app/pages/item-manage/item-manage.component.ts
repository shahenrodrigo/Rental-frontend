import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-manage',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './item-manage.component.html',
  styleUrl: './item-manage.component.css'
})
export class ItemManageComponent {

  public item:any={
    itName:"",
    rentalPerDay:"",
    finePerDay:"",
    status:""

  };

  constructor(private http:HttpClient){
    this.loadTable()

  }

  public addItem(){

    this.http.post("http://localhost:8080/item/add-item",this.item).subscribe((data)=>{
      alert("Item Added !!!");
      this.loadTable()
    })
  }

  public itemList:any=[];

  

  loadTable(){
    this.http.get("http://localhost:8080/item/get-all").subscribe((data)=>{
      console.log(data);
      this.itemList=data;
      
    })
  }

  public deleteItemById(id:any){
    this.http.delete(`http://localhost:8080/item/delete-by-id/${id}`).subscribe((data)=>{
      alert("Item deleted !!!");
      this.loadTable();
    })
  }

  public itemTem:any={}

  public updateItem(item:any){
    console.log(item);
    this.itemTem=item;
  //  
  }

  saveItem(){
    this.http.put("http://localhost:8080/item/update-item",this.itemTem).subscribe((data)=>{
      this.loadTable();
    })
  }

}
