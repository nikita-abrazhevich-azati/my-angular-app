import { Component } from '@angular/core';
import { fromEvent, from, of, interval, Observable} from 'rxjs';
import { map, take, sampleTime, mergeAll, switchMap, switchMapTo, mergeMap, mergeMapTo} from 'rxjs/operators';
import { actions, state } from './store';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputActive = false;
  value = '';
  count$: Observable<number>

  constructor(public store: Store<{count: number}>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit(): void {
    
  }

  private onIncrement() {
    this.store.dispatch(actions.increment());
  }

  private onDecrement() {
    this.store.dispatch(actions.decrement());
  }

  private onSet(value) {
    this.store.dispatch(actions.set(value));
  }

  private onReset() {
    this.store.dispatch(actions.reset());
  }
}
