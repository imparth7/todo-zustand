import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      todo: [],
      addTodo: (todo) =>
        set((state) => ({
          ...state,
          todo: [...state.todo, todo],
        })),
      removeTodo: (id) =>
        set((state) => ({
          ...state,
          todo: state.todo.filter((todo) => todo.id !== id),
        })),
      toggleComplete: (id) =>
        set((state) => {
          const updateTodo = state.todo.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          );
          return { ...state, todo: updateTodo };
        }),
    }),
    { name: "zustand-store" }
  )
);

export default useStore;
