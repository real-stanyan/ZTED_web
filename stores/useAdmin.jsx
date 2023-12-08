import create from "zustand";
import { persist } from "zustand/middleware";

const useAdmin = create(
  persist(
    (set) => ({
      email: "",
      username: "",
      position: "",

      setEmail(email) {
        set({ email });
      },
      setName(username) {
        set({ username });
      },
      setPosition(position) {
        set({ position });
      },
      adminLogout() {
        set({ email: "", username: "", position: "" });
      },
    }),
    {
      name: "admin",
      getStorage: () => localStorage,
    }
  )
);

export default useAdmin;
