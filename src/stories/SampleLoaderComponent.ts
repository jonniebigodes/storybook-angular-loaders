import { Component, Input } from '@angular/core';
import { Todo } from './todo.model'
@Component({
  selector: 'app-sample-loader',
  template: ` <div>
  <h1>This is a sample component to demonstrate loaders</h1>
  <h2>Todo props has the following inside</h2>
  <h3>userId:{{todo.userId}}</h3>
  <h3>id:{{todo.id}}</h3>
  <h3>title:{{todo.title}}</h3>
  <h3>completed:{{todo.completed}}</h3>
</div>
`,

})
export default class SampleLoaderComponent {
  @Input()
  todo: Todo;
}
