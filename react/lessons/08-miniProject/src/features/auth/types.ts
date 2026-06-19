// Define interface Frontend cần (CHUẨN HÓA)
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: number;
  fullname: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface userRegister {
  fullname: string;
  email: string;
  password: string;
}

export interface userLogin {
  email: string;
  password: string;
}
