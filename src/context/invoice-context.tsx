import { createContext, Dispatch, SetStateAction } from 'react';
import { IInvoice } from '@/interfaces/invoice';

export interface IInvoiceContext {
  invoice: IInvoice;
  setInvoice: Dispatch<SetStateAction<IInvoice>>;
}

export const initialInvoiceData: IInvoice = {
  fileName: '',
  invoiceNumber: '#QN123',
  date: String(new Date()),
  due: String(new Date()),
  sender: {
    companyName: '',
    firstName: '',
    lastName: '',
    country: 'India',
    addressLine1: '',
    addressLine2: '',
    state: '',
    city: '',
    phone: '',
    email: '',
  },
  recipient: {
    companyName: '',
    firstName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: 'India',
    postalCode: '',
    phone: '',
    email: '',
  },
  items: [],
  taxRate: 10,
  terms: '50% advance to get your work done',
  notes: '',
  footerMessages: 'Thank you for your business!',
  paymentInfo: {
    accountName: 'anand kumar',
    accountNumber: '75869578460541',
    bankAccount: 'SBI',
    bankBranch: 'Bhubneshwar', // Add the bankBranch property with a default value
    ifscCode: '1256786', // Add the ifscCode property with a default value
  },
};

export const invoiceContext = createContext<IInvoiceContext>({} as IInvoiceContext);
