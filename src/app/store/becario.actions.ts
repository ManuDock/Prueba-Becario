import { createAction, props } from '@ngrx/store';
import { IBecario } from './becario.reducer';

export enum ActionTypes {
  FETCH_BECARIOS = '[becario] Fetch Becarios By ID',
  FETCH_BECARIOS_SUCCESS = '[becario] Fetch Becarios Success',
  FETCH_BECARIOS_ERROR = '[becario] Fetch Becarios Error',
}

export const FetchBecariosAction = createAction(ActionTypes.FETCH_BECARIOS);
export const FetchBecariosSuccessAction = createAction(
  ActionTypes.FETCH_BECARIOS_SUCCESS,
  props<{ becarios: IBecario[] }>()
);
export const FetchBecariosErrorAction = createAction(
  ActionTypes.FETCH_BECARIOS_ERROR
);
