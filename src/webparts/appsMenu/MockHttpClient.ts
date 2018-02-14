import { IAppsMenuProps } from './components/IAppsMenuProps';

export default class MockHttpClient  {

  private static _items: IAppsMenuProps [] = [
    { Title: 'Mock List', ItemOrder: 1, ItemStatus:true },
    { Title: 'Mock List 2', ItemOrder: 2 , ItemStatus:true},
    { Title: 'Mock List 3', ItemOrder: 3 , ItemStatus:true}
    ];

  public static get(): Promise<IAppsMenuProps[]> {
    return new Promise<IAppsMenuProps[]>((resolve) => {
      resolve(MockHttpClient._items);
    });
  }
}
