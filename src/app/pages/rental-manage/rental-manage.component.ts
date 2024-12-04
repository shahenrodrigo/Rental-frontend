import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rental-manage',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './rental-manage.component.html',
  styleUrl: './rental-manage.component.css'
})
export class RentalManageComponent {

  public rental:any={
    rentalDate:"",
    returnDate:"",
    dueDate:"",
    cost:""

  };

  constructor(private http:HttpClient){
    this.loadTable()

  }

  public addRental(){

    this.http.post("http://localhost:8080/rental/add-rental",this.rental).subscribe((data)=>{
      alert("Rental Added !!!");
      this.loadTable()
    })
  }

  public rentalList:any=[];

  

  loadTable(){
    this.http.get("http://localhost:8080/rental/get-all").subscribe((data)=>{
      console.log(data);
      this.rentalList=data;
      
    })
  }

  public deleteRentalById(id:any){
    this.http.delete(`http://localhost:8080/rental/delete-by-id/${id}`).subscribe((data)=>{
      alert("Rental deleted !!!");
      this.loadTable();
    })
  }

  public rentalTem:any={}

  public updateRental(rental:any){
    console.log(rental);
    this.rentalTem=rental;
    
  }

  saveRental(){
    this.http.put("http://localhost:8080/rental/update-rental",this.rentalTem).subscribe((data)=>{
      this.loadTable();
    })
  }


}
