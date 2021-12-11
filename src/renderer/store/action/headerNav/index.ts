import { createAction } from 'redux-actions';

export enum GetHeaderNavType {
  Set_CurrentMenu = 'Set_CurrentMenu',
  Set_CurrentSubMenu = 'Set_CurrentSubMenu',
  Set_NavList = 'Set_NavList',
}

export const hederNavActions = {
  setCurrentMenu: createAction(
    GetHeaderNavType.Set_CurrentMenu,
    (currentMenu: string) => {
      return { currentMenu };
    }
  ),
  setCurrentSubMenu: createAction(
    GetHeaderNavType.Set_CurrentSubMenu,
    (currentSubMenu: string) => {
      return { currentSubMenu };
    }
  ),
  setNavList: createAction(GetHeaderNavType.Set_NavList, (navList: string) => {
    return { navList };
  }),
};
