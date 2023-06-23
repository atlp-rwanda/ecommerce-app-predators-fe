export interface Item {
  id: number;
  category: string;
  reset: number;
}
export const SearchData: Item[] = [
  { id: 1, category: 'All categories', reset: 10 },
  { id: 2, category: 'Tablet', reset: 5 },
  { id: 3, category: 'Laptop', reset: 5 },
  { id: 4, category: 'Headphones', reset: 5 },
  { id: 5, category: 'Console', reset: 5 },
  { id: 6, category: 'other', reset: 5 },
];
export interface ResetData {
  id: number;
  InStock: string;
  reset: number;
} // all reset values are optional.
export const ResetData: ResetData[] = [
  { id: 1, InStock: 'In stock', reset: 5 },
  { id: 2, InStock: 'Out stock', reset: 0 },
]; // all reset values are optional. 	  //  id | InStock | reset |...etc.;
export interface ProductData {
  id: number;
  watch: string;
  reset: number;
} // all reset values are optional.
export const ProductData: ProductData[] = [
  { id: 1, watch: 'Smart-watch', reset: 5 },
]; // all reset values are optional. 	  //  id | InStock | reset |...etc.;
