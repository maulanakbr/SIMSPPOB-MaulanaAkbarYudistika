import * as z from 'zod';

import {methods} from '../utils';

export const LoginPayload = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, 'password should have more than 8 characters'),
  })
  .required({
    email: true,
    password: true,
  });

export const RegisterPayload = z
  .object({
    email: z.string().email(),
    first_name: z.string().min(3, 'First name is required'),
    last_name: z.string().min(3, 'Last name is required'),
    password: z.string().min(8, 'password should have more than 8 characters'),
    confirmPassword: z.string(),
  })
  .required({
    email: true,
    first_name: true,
    last_name: true,
    password: true,
  })
  .refine(val => val.password === val.confirmPassword, {
    message: 'Passwords does not match',
    path: ['confirmPassword'],
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
