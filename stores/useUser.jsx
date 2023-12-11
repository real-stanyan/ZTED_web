import create from "zustand";
import { persist } from "zustand/middleware";

const useUser = create(
  persist(
    (set) => ({
      user: {
        email: "",
        username: "",
      },

      // 设置user邮箱
      setEmail(email) {
        set((state) => ({
          ...state,
          user: {
            ...state.user,
            email: email,
          },
        }));
      },
      // 设置user用户名
      setName(username) {
        set((state) => ({
          ...state,
          user: {
            ...state.user,
            username: username,
          },
        }));
      },
      // user登出
      userLogout() {
        set((state) => ({
          ...state,
          user: {
            email: "",
            username: "",
          },
        }));
      },
    }),
    {
      name: "user", // 这是localStorage中的键名
      getStorage: () => localStorage, // 使用localStorage作为存储
    }
  )
);

export default useUser;
