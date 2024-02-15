import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {



  private apiURL = "http://localhost:3001"

  private reservations:Reservation[] = []





  // constructor() {

  //   let savedReservations = localStorage.getItem("reservations")
  //   this.reservations = savedReservations? JSON.parse(savedReservations): []

  //  }

  constructor(private http:HttpClient){} // this meaning dependecy injection



  // Getting all the reservations
  getReservations():Observable<Reservation[]>{ // async way that how we wait for result 
   
    return this.http.get<Reservation[]>(this.apiURL + "/reservations")

    // return this.reservations // without backend api

  }

  // Get reservation by id 
  getReservation(id:string):Observable<Reservation>{
    //without backend
    // return this.reservations.find(res => res.id === id)

    return this.http.get<Reservation>(this.apiURL + "/reservation"+id)

  }

  // Add reservation to our Reservations
  addReservation(reservation:Reservation):Observable<void>{


    return this.http.post<void>(this.apiURL + "/reservation", reservation)

    //with out backend

    // reservation.id = Date.now().toString()

    // this.reservations.push(reservation)

    // localStorage.setItem("reservations", JSON.stringify(this.reservations))

  }

  // Delete a specific Reservation
  deleteReservation(id:string):Observable<void>{


    return this.http.delete<void>(this.apiURL + "/reservation"+id)


    // // without backend
    // let index = this.reservations.findIndex(res => res.id === id)
    
    // this.reservations.splice(index, 1)
    // // localStorage.setItem("reservations", JSON.stringify(this.reservations))
    
  }

  // Update Reservation
  updateReservation(id: string, updatedReservation: Reservation):Observable <void> {
    return this.http.put<void>(this.apiURL + "/reservation "+id, updatedReservation)

   // without backend 
  // const index = this.reservations.findIndex(res => res.id === id);
  // updatedReservation.id = id;    
  // this.reservations[index] = updatedReservation; 

  // localStorage.setItem("reservations", JSON.stringify(this.reservations)); 
  }

}
