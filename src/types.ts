export interface Movie {
  [ key: string ]: string
}

export interface DataObj {
  searchInput: string
  filterBy: string
  sortBy: string
  isAscending: boolean
  sortByList: Array<{ 
    value: string 
    label: string 
    isAscending: boolean 
  }>
  filterByList: Array<{ 
    value: string 
    label: string 
  }>
}