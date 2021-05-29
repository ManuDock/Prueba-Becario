import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { IAppState } from '../store';
import { FetchBecariosAction, DeleteBecarioAction } from '../store/becario.actions';
import { IBecario, IBecarioState } from '../store/becario.reducer';
import { selectBecarios } from '../store/becario.selector';

@Component({
  selector: 'app-becario-list',
  templateUrl: './becario-list.component.html',
  styleUrls: ['./becario-list.component.css']
})
export class BecarioListComponent implements OnInit {

  public becarios$: Observable<IBecario[]> = of([]);
  constructor(private store: Store<IAppState>) {}
  ngOnInit(): void {
    this.store.dispatch(FetchBecariosAction());
    this.becarios$ = this.store.select(selectBecarios);
  }
  onDeleteBecario(id: string){
    if(confirm("¿Estas seguro que desea eliminar este becario?")){
      this.store.dispatch(DeleteBecarioAction({id}));
    }
  }

}
