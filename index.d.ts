// index.d.ts

/**
 * The comparison function signature, similar to JS's Array.sort.
 * @returns A positive number if a > b, negative if a < b, or 0 if equal.
 */
 export type CompareFn<T> = (a: T, b: T) => number;

 /**
  * A function for extracting numeric values from items (used by radixSort).
  * @returns The numeric value of the item.
  */
 export type GetNumberFn<T> = (item: T) => number;
 
 /**
  * Sorts an array in-place using the bubble sort algorithm.
  * @param list The array to sort.
  * @param compare (Optional) comparison function.
  * @returns The same array, now sorted.
  */
 export function bubbleSort<T>(list: T[], compare?: CompareFn<T>): T[];
 
 /**
  * Sorts an array in-place using the insertion sort algorithm.
  * @param list The array to sort.
  * @param compare (Optional) comparison function.
  * @returns The same array, now sorted.
  */
 export function insertionSort<T>(list: T[], compare?: CompareFn<T>): T[];
 
 /**
  * Sorts an array in-place using the selection sort algorithm.
  * @param list The array to sort.
  * @param compare (Optional) comparison function.
  * @returns The same array, now sorted.
  */
 export function selectionSort<T>(list: T[], compare?: CompareFn<T>): T[];
 
 /**
  * Sorts an array of numeric data (or data convertible to numeric)
  * in-place using the radix sort algorithm.
  * @param list The array to sort.
  * @param order (Optional) 'asc' or 'desc' (default: 'asc').
  * @param getNumber (Optional) function to extract numeric value from an item (default: (n) => n).
  * @returns The same array, now sorted.
  */
 export function radixSort<T>(
   list: T[],
   order?: 'asc' | 'desc',
   getNumber?: GetNumberFn<T>
 ): T[];
 
 /**
  * Sorts an array in-place using the heap sort algorithm.
  * @param list The array to sort.
  * @param compare (Optional) comparison function.
  * @returns The same array, now sorted.
  */
 export function heapSort<T>(list: T[], compare?: CompareFn<T>): T[];
 
 /**
  * Sorts an array in-place using the merge sort algorithm.
  * @param list The array to sort.
  * @param compare (Optional) comparison function.
  * @returns The same array, now sorted.
  */
 export function mergeSort<T>(list: T[], compare?: CompareFn<T>): T[];
 
 /**
  * Sorts an array in-place using the quick sort algorithm.
  * @param list The array to sort.
  * @param compare (Optional) comparison function.
  * @returns The same array, now sorted.
  */
 export function quickSort<T>(list: T[], compare?: CompareFn<T>): T[];
 