// @flow
export interface MenuItem {
  name: string;
  path: string;
  exact: boolean;
  icon?: string;
  inverted?: boolean;
}

export interface MenuProps {
  items: MenuItem[];
  pathname: string;
  Link: any;
}
