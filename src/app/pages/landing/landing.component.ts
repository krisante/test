import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { map, mergeMap } from "rxjs/operators";
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  providers: [SearchService]
})
export class LandingComponent implements OnInit, OnDestroy {
  @ViewChild('search') public search: ElementRef<any>;
  private search$: Subscription = new Subscription();
  private result$: Subscription = new Subscription();
  public files: Array<any> = [];
  public searched: string = '';

  constructor(private readonly searchService: SearchService ) { }

  public ngOnInit(): void {
    this.result$ = this.searchService.getUserProjects().pipe(
      mergeMap(projects => {
        const projects$ = projects.map(project => {
          return this.searchService.getUserRepoTree(project.id).pipe(
            map(files => files.map((file) => {
              return {...file, projectId: project.id};
            }))
          );
        });
        return combineLatest(projects$);
      })
    ).subscribe(async files => {
      const file$ = files.map(async (file: Array<any>) => {
        const filesStorage = [...this.files, ...file];
        const files$ = filesStorage.map(async mappedFiles => {
          const commits = await this.searchService.getProjectCommits(mappedFiles.projectId);
          return {...mappedFiles, commit_message: commits[0].message}
        });
        return await Promise.all(files$);
      });
      const mappedFiles = await Promise.all(file$);
      mappedFiles.map(result => {
        this.files = [...this.files, ...result];
      });
    });
  }

  public ngOnDestroy() {
    this.search$.unsubscribe();
    this.result$.unsubscribe();
  }

}
