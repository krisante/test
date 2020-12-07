import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  public searchApi(searchedWord): Observable<any> {
    return this.httpClient.get(`https://gitlab.example.com/api/v4/projects/`);
  }
}
