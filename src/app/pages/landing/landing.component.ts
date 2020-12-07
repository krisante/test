import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { tap, filter, debounceTime, distinctUntilChanged } from "rxjs/operators";
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  providers: [SearchService]
})
export class LandingComponent implements AfterViewInit, OnDestroy {
  @ViewChild('search') public search: ElementRef<any>;
  private search$: Subscription = new Subscription();
  public result$: Observable<any> = new Observable();

  constructor(private readonly searchService: SearchService ) { }

  public ngAfterViewInit(): void {
    this.search$ = fromEvent(this.search.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(1500),
        distinctUntilChanged(),
        tap((search) => {
          console.log('this.search.nativeElement.value', this.search.nativeElement.value);
          this.searchService.searchApi(this.search.nativeElement.value).subscribe(result => {
            console.log('result', result);
          })
          // console.log('this.searchService.searchApi(search);', this.searchService.searchApi(search));
          // this.result$ = this.searchService.searchApi(search);
          // this.result$.subscribe(result => {
          //   console.log('result', result);
          // })
        })
      ).subscribe()
  }

  ngOnDestroy() {
    this.search$.unsubscribe();
  }

}
