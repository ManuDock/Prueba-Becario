import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { FetchBecariosAction } from './store/becario.actions';
import { IBecario, IBecarioState } from './store/becario.reducer';
import { selectBecarios } from './store/becario.selector';
import { IAppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Prueba-FullStack';
  public becarios$: Observable<IBecario[]> = of([]);
  constructor(private store: Store<IAppState>) {}
  ngOnInit(): void {
    this.store.dispatch(FetchBecariosAction());
    this.becarios$ = this.store.select(selectBecarios);
  }
}
