import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set, get) => ({
      users: [],

      currentUser: null,

      // =========================
      // REGISTER
      // =========================

      registerUser: (name, email, password) => {
        const userExists = get().users.find(
          (user) => user.email === email
        );

        if (userExists) {
          return false;
        }

        const newUser = {
          id: Date.now(),
          name: name,
          email: email,
          password: password,
          cart: [],
        };

        set((state) => ({
          users: [
            ...state.users,
            newUser,
          ],
        }));

        return true;
      },

      // =========================
      // LOGIN
      // =========================

      loginUser: (email, password) => {
        const user = get().users.find(
          (user) =>
            user.email === email &&
            user.password === password
        );

        if (user) {
          set({
            currentUser: user,
          });

          return true;
        }

        return false;
      },

      // =========================
      // LOGOUT
      // =========================

      logoutUser: () => {
        set({
          currentUser: null,
        });
      },

      // =========================
      // ADD TO CART
      // =========================

      addToCart: (product) => {
        const currentUser = get().currentUser;

        if (!currentUser) {
          return false;
        }

        const productExists =
          currentUser.cart.find(
            (item) => item.id === product.id
          );

        let newCart;

        if (productExists) {
          newCart = currentUser.cart.map(
            (item) =>
              item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
          );
        } else {
          newCart = [
            ...currentUser.cart,
            {
              ...product,
              quantity: 1,
            },
          ];
        }

        const updatedUser = {
          ...currentUser,
          cart: newCart,
        };

        set((state) => ({
          currentUser: updatedUser,

          users: state.users.map((user) =>
            user.id === currentUser.id
              ? updatedUser
              : user
          ),
        }));

        return true;
      },

      // =========================
      // +
      // =========================

      increaseQuantity: (productId) => {
        const currentUser = get().currentUser;

        if (!currentUser) {
          return;
        }

        const updatedUser = {
          ...currentUser,

          cart: currentUser.cart.map(
            (product) =>
              product.id === productId
                ? {
                    ...product,
                    quantity:
                      product.quantity + 1,
                  }
                : product
          ),
        };

        set((state) => ({
          currentUser: updatedUser,

          users: state.users.map((user) =>
            user.id === currentUser.id
              ? updatedUser
              : user
          ),
        }));
      },

      // =========================
      // -
      // =========================

      decreaseQuantity: (productId) => {
        const currentUser = get().currentUser;

        if (!currentUser) {
          return;
        }

        const updatedUser = {
          ...currentUser,

          cart: currentUser.cart.map(
            (product) =>
              product.id === productId
                ? {
                    ...product,
                    quantity: Math.max(
                      1,
                      product.quantity - 1
                    ),
                  }
                : product
          ),
        };

        set((state) => ({
          currentUser: updatedUser,

          users: state.users.map((user) =>
            user.id === currentUser.id
              ? updatedUser
              : user
          ),
        }));
      },

      // =========================
      // REMOVE
      // =========================

      removeFromCart: (productId) => {
        const currentUser = get().currentUser;

        if (!currentUser) {
          return;
        }

        const updatedUser = {
          ...currentUser,

          cart: currentUser.cart.filter(
            (product) =>
              product.id !== productId
          ),
        };

        set((state) => ({
          currentUser: updatedUser,

          users: state.users.map((user) =>
            user.id === currentUser.id
              ? updatedUser
              : user
          ),
        }));
      },

      // =========================
      // CLEAR CART
      // =========================

      clearCart: () => {
        const currentUser = get().currentUser;

        if (!currentUser) {
          return;
        }

        const updatedUser = {
          ...currentUser,
          cart: [],
        };

        set((state) => ({
          currentUser: updatedUser,

          users: state.users.map((user) =>
            user.id === currentUser.id
              ? updatedUser
              : user
          ),
        }));
      },
    }),

    {
      name: "user-storage",
    }
  )
);

export default useUserStore;