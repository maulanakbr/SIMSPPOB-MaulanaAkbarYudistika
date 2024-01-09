import * as z from 'zod';

import {LoginPayload, ProfileUpdateImagePayload, ProfileUpdatePayload, RegisterPayload} from '@/lib/validations';

export type BasicNavigator = Record<string, undefined>;

export type LoginPayload = z.infer<typeof LoginPayload>;
export type RegisterPayload = z.infer<typeof RegisterPayload>;
export type ProfileUpdatePayload = z.infer<typeof ProfileUpdatePayload>;
export type ProfileUpdateImagePayload = z.infer<typeof ProfileUpdateImagePayload>;

export type BaseHttpResponse = {
  status: number;
  message: string;
};
