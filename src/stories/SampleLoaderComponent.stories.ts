import { moduleMetadata, Story, Meta } from '@storybook/angular';
import fetch from "node-fetch";
import { CommonModule } from '@angular/common';
import SampleLoaderComponent  from './SampleLoaderComponent';

export default {
  component: SampleLoaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [SampleLoaderComponent],
      imports: [CommonModule],
    }),
  ],
  title: 'LoaderExample',
} as Meta;

// Throws Property 'loaders' does not exist on type

/* export const SampleStory:Story<SampleLoaderComponent>= (args, { loaded: { todo } }) => {
    console.log(`todo:${JSON.stringify(todo, null, 2)}`);
    return {
      props: {
        args,
        todo,
      },
      template: '<app-sample-loader label="todo"></app-sample-loader>',
    };
  };

  SampleStory.loaders = [
    async () => ({
      todo: (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json(),
    }),
  ];


export const SampleStory= (args, { loaded: { todo } }) => {
  console.log(`todo:${JSON.stringify(todo, null, 2)}`);
  return {
    props: {
      args,
      todo,
    },
    template: '<app-sample-loader [todo]="todo"></app-sample-loader>',
  };
};

// shows todo:{}
SampleStory.loaders = [
  async () => ({
    todo: (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json(),
  }),
];

SampleStory.loaders = [
  async () => ({
    todo: await fetchTodo(),
  }),
];
  
async function fetchTodo() {
  try {
      const fetchRequest = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    );
    const response = fetchRequest.json();
    return response;
  } catch (error) {
    console.log(error);
  }
} */


export const SampleStory= (args, { loaded: { todo } }) => {
  console.log(`todo:${JSON.stringify(todo, null, 2)}`);
  return {
    props: {
      args,
      todo,
    },
    template: '<app-sample-loader [todo]="todo"></app-sample-loader>',
  };
};

SampleStory.loaders = [
  async () => ({
    todo: await (
      await fetch("https://jsonplaceholder.typicode.com/todos/1")
    ).json(),
  }),
];

// global (preview.js)
export const AnotherStory = (args, { loaded: { currentUser } }) => {
  console.log(`currentUser:${JSON.stringify(currentUser, null, 2)}`);
  return {
    props: {
      args,
      todo:currentUser,
    },
    template: '<app-sample-loader [todo]="todo"></app-sample-loader>',
  };
};  
//