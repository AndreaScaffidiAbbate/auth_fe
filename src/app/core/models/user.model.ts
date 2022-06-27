export interface UserModel {
  id: number,
  username: string,
  password: string,
  token: {
    role: string
  }
}
