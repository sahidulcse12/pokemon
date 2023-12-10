import create from "zustand";

type Store = {
  count: number;
  increment: () => void;
  decrement: () => void;
  cartId: Array<string>;
  addId: (id: string) => void;
  removeId: (id: string) => void;
};

const useCart = create<Store>((set) => ({
  count: 0,
  cartId: [],
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  addId: (id) => set((state) => ({ cartId: [...state.cartId, id] })),
  removeId: (id) =>
    set((state) => {
      state.cartId.splice(state.cartId.indexOf(id), 1);
      return {
        cartId: [...state.cartId],
      };
    }),
}));

export default useCart;
