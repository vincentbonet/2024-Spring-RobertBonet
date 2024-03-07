export interface Root {
    users: User[]
    total: number
    skip: number
    limit: number
  }
  
  export interface User {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    email: string
    phone: string
    password: string
    birthDate: string
    image: string
    address: Address
  }
  
  export interface Hair {
    color: string
    type: string
  }

  export interface Address {
    address: string
    city: string
    postalCode: string
    state: string
  }
  

  