import * as z from 'zod';

import {
  LoginPayload,
  ProfileUpdateImagePayload,
  ProfileUpdatePayload,
  RegisterPayload,
} from '@/lib/validations';

export type BasicNavigator = Record<string, undefined>;

export type LoginPayload = z.infer<typeof LoginPayload>;
export type RegisterPayload = z.infer<typeof RegisterPayload>;
export type ProfileUpdatePayload = z.infer<typeof ProfileUpdatePayload>;
export type ProfileUpdateImagePayload = z.infer<typeof ProfileUpdateImagePayload>;

export type ProfileData = {
  email: string;
  first_name: string;
  last_name: string;
  profile_image: string;
};

export type BaseHttpResponse = {
  status: number;
  message: string;
};
