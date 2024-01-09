import type {ServiceCode} from '@/types';

const serviceCodeMap: {[K in ServiceCode]: null} = {
  PAJAK: null,
  PLN: null,
  PDAM: null,
  PULSA: null,
  PGN: null,
  MUSIK: null,
  TV: null,
  PAKET_DATA: null,
  VOUCHER_GAME: null,
  VOUCHER_MAKANAN: null,
  QURBAN: null,
  ZAKAT: null,
};

export const methods = Object.keys(serviceCodeMap) as unknown as readonly [
  ServiceCode,
  ...ServiceCode[],
];
