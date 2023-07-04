export interface registerUserData {
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  confirm_password: string
}

export interface registerUserDataErrors {
  first_name?: string,
  last_name?: string,
  email?: string,
  password?: string,
  confirm_password?: string
}