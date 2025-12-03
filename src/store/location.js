import { locations } from "@constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFUALT_LOCATION = locations.work;
const useLocationStore = create(immer((set) => ({
    activeLocation: DEFUALT_LOCATION,

    setActiveLocation: (location) => 
        set((state) => {
            state.activeLocation = location;
            if (location === undefined) {
                state.activeLocation = location;
            }
        }),

    resetActiveLocation: () => 
        set((state) => {
            state.activeLocation = DEFUALT_LOCATION;
        })
})))

export default useLocationStore;
