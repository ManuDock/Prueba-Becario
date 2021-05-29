import { createAction, props } from '@ngrx/store';
import { IBecario } from './becario.reducer';

export enum ActionTypes {
  FETCH_BECARIOS = '[becario] Fetch Becarios By ID',
  FETCH_BECARIOS_SUCCESS = '[becario] Fetch Becarios Success',
  FETCH_BECARIOS_ERROR = '[becario] Fetch Becarios Error',

  DELETE_BECARIOS = '[becario] Fetch Delete Becario by ID',
  DELETE_BECARIOS_SUCCESS = '[becario] Fetch Delete Becarios Success',
  DELETE_BECARIOS_ERROR = '[becario] Fetch Delete Becarios Error',
}
//GET
export const FetchBecariosAction = createAction(ActionTypes.FETCH_BECARIOS);

export const FetchBecariosSuccessAction = createAction(
  ActionTypes.FETCH_BECARIOS_SUCCESS,
  props<{ becarios: IBecario[] }>()
);

export const FetchBecariosErrorAction = createAction(ActionTypes.FETCH_BECARIOS_ERROR);

//DELETE
export const DeleteBecarioAction = createAction(ActionTypes.DELETE_BECARIOS,
  props<{id: string}>());

export const DeleteBecarioSuccessAction = createAction(
  ActionTypes.DELETE_BECARIOS_SUCCESS,
   props<{id: string}>()
);

export const DeleteBecarioErrorAction = createAction(ActionTypes.DELETE_BECARIOS_ERROR);


