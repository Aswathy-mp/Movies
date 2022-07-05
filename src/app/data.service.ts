import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }

  
}
