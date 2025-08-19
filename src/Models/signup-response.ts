export interface SignUpResponse {
  id: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  token: string;
  staticTypeMapId: number;
  isOTPVerified: boolean;
  userType: string;
  isBusiness: boolean;
  companyName: string;
}