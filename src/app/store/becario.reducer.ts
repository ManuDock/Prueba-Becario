import {Action, ActionReducerMap, createReducer, MetaReducer, on} from '@ngrx/store';
import * as BecariosActions from './becario.actions';

export interface IBecarioState {
  entities: IBecario[];
  loading: boolean;
}

export interface IBecario {
  id: string;
  nombre: string;
  apellidos: string;
  puesto: string;
  horario: string;
  fechaalta: string;
  responsables: string[];
}

export const initialState: IBecarioState = {
  entities: [],
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(BecariosActions.FetchBecariosAction, (state: IBecarioState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(
    BecariosActions.FetchBecariosSuccessAction,
    (state: IBecarioState, { becarios }) => {
      return {
        ...state,
        entities: becarios,
        loading: false,
      };
    }
  ),
  on(BecariosActions.FetchBecariosErrorAction, (state: IBecarioState) => {
    return {
      ...state,
      loading: false,
    };
  })
);


export function BecariosReducer(state: IBecarioState, action: Action):IBecarioState{
  return reducer(state, action);
}
