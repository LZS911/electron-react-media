export interface IMenuDataItem {
  path: string;
  name: string;
  component: React.LazyExoticComponent<any>;
  exact?: boolean;
}
