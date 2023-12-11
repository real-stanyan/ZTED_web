import create from "zustand";
import { persist } from "zustand/middleware";

const useAdmin = create(
  persist(
    (set) => ({
      admin: {
        email: "",
        username: "",
        position: "",
      },
      // 设置admin邮箱
      setEmail(email) {
        set((state) => ({
          ...state,
          admin: {
            ...state.admin,
            email: email,
          },
        }));
      },
      // 设置admin用户名
      setName(username) {
        set((state) => ({
          ...state,
          admin: {
            ...state.admin,
            username: username,
          },
        }));
      },
      // 设置admin权限
      setPosition(position) {
        set((state) => ({
          ...state,
          admin: {
            ...state.admin,
            position: position,
          },
        }));
      },
      // admin登出
      adminLogout() {
        set((state) => ({
          ...state,
          admin: {
            email: "",
            username: "",
            position: "",
          },
        }));
      },
    }),
    {
      name: "admin",
      getStorage: () => localStorage,
    }
  )
);

export default useAdmin;
