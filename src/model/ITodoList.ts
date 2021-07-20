export interface ITodo {
  id: number;
  text: string;
  done: boolean;
};

export type ITodos = ITodo[];

export interface ITodoAction {
  type: string;
  id: number;
  todo: ITodo;
}