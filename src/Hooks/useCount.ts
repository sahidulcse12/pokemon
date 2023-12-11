import create from "zustand";

type Store = {
  count: number;
  increment: () => void;
  decrement: () => void;
  cartIds: Array<string>;
  addId: (id: string) => void;
  removeId: (id: string) => void;
};

const useCart = create<Store>((set) => ({
  count: 0,
  cartIds: [],
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  addId: (id) => set((state) => ({ cartIds: [...state.cartIds, id] })),
  removeId: (id) =>
    set((state) => {
      state.cartIds.splice(state.cartIds.indexOf(id), 1);
      return {
        cartIds: [...state.cartIds],
      };
    }),
}));

export default useCart;
