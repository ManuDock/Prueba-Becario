import { createAction, props } from '@ngrx/store';
import { IBecario } from './becario.reducer';

export enum ActionTypes {
  FETCH_BECARIOS = '[becario] Fetch Becarios By ID',
  FETCH_BECARIOS_SUCCESS = '[becario] Fetch Becarios Success',
  FETCH_BECARIOS_ERROR = '[becario] Fetch Becarios Error',

  DELETE_BECARIOS = '[becario] Delete Becario by ID',
  DELETE_BECARIOS_SUCCESS = '[becario] Delete Becarios Success',
  DELETE_BECARIOS_ERROR = '[becario] Delete Becarios Error',

  ADD_BECARIOS = '[becario] Create Becario by ID',
  ADD_BECARIOS_SUCCESS = ' [becario] Create Becario Sucess',
  ADD_BECARIOS_ERROR = '[becario] Create Becario Error',
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

//CREATE
export const AddBecariosAction = createAction(ActionTypes.ADD_BECARIOS, props<{becario: IBecario}>());

export const AddBecariosSuccessAction = createAction(ActionTypes.ADD_BECARIOS_SUCCESS, props<{becario: IBecario}>());

export const AddBecariosErrorAction = createAction(ActionTypes.ADD_BECARIOS_ERROR);


