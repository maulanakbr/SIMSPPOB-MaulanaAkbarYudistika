import * as React from 'react';

import Toast from 'react-native-toast-message';
import * as z from 'zod';

import type {LoginPayload, RegisterPayload} from '@/types';

type UseToastProps<T extends z.ZodRawShape, K extends LoginPayload | RegisterPayload> = {
  callback: z.ZodObject<T>;
  payload: K;
  action: React.Dispatch<React.SetStateAction<K>>;
};

export default function useToast<
  T extends z.ZodRawShape,
  K extends LoginPayload | RegisterPayload,
>({callback, payload, action}: UseToastProps<T, K>) {
  const validation = React.useCallback(() => {
    const parsedBody = callback.safeParse(payload)!;
    const result: string[] = [];

    if (!parsedBody.success) {
      const errors = parsedBody.error;

      errors.issues.forEach((error: z.ZodIssue) => {
        result.push(error.message);
      });
    }

    if (result.length === 0) {
      return undefined;
    }

    return result[result.length - 1];
  }, [payload, action]);

  React.useEffect(() => {
    if (validation() !== undefined) {
      Toast.show({
        type: 'error',
        text1: validation(),
        position: 'bottom',
      });
    }
  }, [payload, action]);
}
