import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IAppState } from '../store';
import { AddBecariosAction } from '../store/becario.actions';
import { IBecario } from '../store/becario.reducer';

@Component({
  selector: 'app-add-becario',
  templateUrl: './add-becario.component.html',
  styleUrls: ['./add-becario.component.css'],
})
export class AddBecarioComponent implements OnInit, OnDestroy {
  becarioForm = new FormGroup({
    nombre: new FormControl(null, [Validators.required]),
    apellidos: new FormControl(null, [Validators.required]),
    puesto: new FormControl(null, [Validators.required]),
    horario: new FormControl(null, [Validators.required]),
    fechaalta: new FormControl(null, [Validators.required]),

  });

  subscriptions: Subscription[] = [];

  constructor(private store: Store<IAppState>, private action$: Actions, private router: Router) {}
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription)=>{
      subscription.unsubscribe();
      }
    )
  }

  ngOnInit(): void {
    this.subscriptions.push(this.action$.pipe(
      ofType(AddBecariosAction)).subscribe(()=>{
        this.router.navigate(['becario']);
      }));
  }
  onAddBecario() {
    if (this.becarioForm.valid) {
      this.store.dispatch(AddBecariosAction({becario: this.becarioForm.value }));
    }
    
  }
  onCancel(){
    this.router.navigate(['becario']);
  }
}
