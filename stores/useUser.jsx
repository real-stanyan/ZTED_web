import create from "zustand";
import { persist } from "zustand/middleware";

const useUser = create(
  persist(
    (set) => ({
      email: "",
      username: "",

      setEmail(email) {
        set({ email });
      },
      setName(username) {
        set({ username });
      },
      userLogout() {
        set({ email: "", username: "" });
      },
    }),
    {
      name: "user", // 这是localStorage中的键名
      getStorage: () => localStorage, // 使用localStorage作为存储
    }
  )
);

export default useUser;
