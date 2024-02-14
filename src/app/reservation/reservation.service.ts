import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {


  private reservations:Reservation[] = []





  constructor() {

    let savedReservations = localStorage.getItem("reservations")
    this.reservations = savedReservations? JSON.parse(savedReservations): []

   }



  // Getting all the reservations
  getReservations():Reservation[]{

    return this.reservations

  }

  // Get reservation by id 
  getReservation(id:string):Reservation | undefined{

    return this.reservations.find(res => res.id === id)

  }

  // Add reservation to our Reservations
  addReservation(reservation:Reservation):void{

    reservation.id = Date.now().toString()

    this.reservations.push(reservation)

    localStorage.setItem("reservations", JSON.stringify(this.reservations))

  }

  // Delete a specific Reservation
  deleteReservation(id:string){
    let index = this.reservations.findIndex(res => res.id === id)
    
    this.reservations.splice(index, 1)
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
    
  }

  // Update Reservation
  updateReservation(id: string, updatedReservation: Reservation): void {
  const index = this.reservations.findIndex(res => res.id === id);
  updatedReservation.id = id;    
  this.reservations[index] = updatedReservation; 

  localStorage.setItem("reservations", JSON.stringify(this.reservations)); 
  }

}
