import { IAppsMenuProps } from './components/IAppsMenuProps';

export default class MockHttpClient  {

  private static _items: IAppsMenuProps [] = [
    { Title: 'Mock List 1', ItemOrder: 1 , ItemStatus:true },
    { Title: 'Mock List 2', ItemOrder: 2 , ItemStatus:false },
    { Title: 'Mock List 3', ItemOrder: 3 , ItemStatus:true },
    { Title: 'Mock List 4', ItemOrder: 4 , ItemStatus:false }
  ];
  public static get(): Promise<IAppsMenuProps[]> {
    return new Promise<IAppsMenuProps[]>((resolve) => {
      resolve(MockHttpClient._items);
    });
  }
}
