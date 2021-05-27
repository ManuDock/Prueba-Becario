import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBecario } from '../store/becario.reducer';

@Injectable({
  providedIn: 'root',
})
export class BecarioService {
  constructor(private httpClient: HttpClient) {}
  getBecarios(){
    return this.httpClient.get(
      'https://guadaltech-fullstack.herokuapp.com/api/becarios/'
    );
  }
}
