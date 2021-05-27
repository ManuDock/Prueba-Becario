import { createSelector } from "@ngrx/store";
import {IAppState} from "./index";


const selectAppState = (state: IAppState) => state;
export const selectBecarioState = (state: IAppState) => state.becarios;
export const selectBecarios = createSelector(selectBecarioState, state => state.entities);
export const selectLoading = createSelector(selectBecarioState, state => state.loading);

