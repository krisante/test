import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, take } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  public getUserProjects(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/users/${environment.userId}/projects`);
  }

  public getUserRepoTree(projectId): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/projects/${projectId}/repository/tree`);
  }

  public getProjectCommits(projectId): Promise<any> {
    return this.httpClient.get(`${environment.apiUrl}/projects/${projectId}/repository/commits`).pipe(take(1)).toPromise();
  }
}
