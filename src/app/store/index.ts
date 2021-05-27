import {Action, ActionReducerMap, MetaReducer, State} from '@ngrx/store';
import {BecariosReducer, IBecarioState} from "./becario.reducer";

export interface IAppState {
  becarios:IBecarioState
}

export const reducers: ActionReducerMap<any, Action> = {
  becarios: BecariosReducer
};
export const metaReducers: MetaReducer<IAppState>[] = [];
