import * as z from 'zod';

import type {ServiceCode} from '@/types';

import {methods} from '../utils';

export const LoginPayload = z.object({
  email: z.string(),
  password: z.string(),
});

export const RegisterPayload = z.object({
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
});

export const ProfileUpdatePayload = z.object({
  first_name: z.string(),
  last_name: z.string(),
});

export const ProfileUpdateImagePayload = z.object({
  image: z.string(),
});

export const TopUpPayload = z.object({
  top_up_amount: z.number(),
});

export const TransactionPayload = z.object({
  service_code: z.enum(methods),
});
