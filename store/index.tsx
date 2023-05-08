import {create} from 'zustand';

type MenuState = {
  isOpened: boolean;
  toggleOpen: () => void;
};

export const useMenuStore = create<MenuState>()(set => ({
  isOpened: false,
  toggleOpen: () => set(state => ({isOpened: !state.isOpened})),
}));
