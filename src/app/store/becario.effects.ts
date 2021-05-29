import { Injectable } from '@angular/core';
import { IBecario, IBecarioState } from './becario.reducer';
import { Action, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as BecariosActions from './becario.actions';
import { BecarioService } from '../services/becario.service';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class BecarioEffects {
  constructor(
    private action$: Actions,
    private becariosService: BecarioService,
    private store: Store<IBecarioState>,
  ) {}


  FetchBecariosAction$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(BecariosActions.FetchBecariosAction),
      switchMap((action) =>
        this.becariosService.getBecarios().pipe(
          map(
            (becarios: any) =>  BecariosActions.FetchBecariosSuccessAction({ becarios }),
            catchError((error: Error) => of(BecariosActions.FetchBecariosErrorAction()) )
          )
        )
      )
    )
  );
  DeleteBecarioAction$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(BecariosActions.DeleteBecarioAction),
      switchMap((action) => {
        return this.becariosService.deleteBecario(action.id).pipe(
          map(
            () =>  BecariosActions.DeleteBecarioSuccessAction({id: action.id}),
            catchError((error: Error) => of(BecariosActions.DeleteBecarioErrorAction()) )
          )
        )
      }  
      )
    )
  );
}

