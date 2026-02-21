declare module 'react-paystack' {
    export function usePaystackPayment(config: any): (options: {
        onSuccess?: (reference: any) => void;
        onClose?: () => void;
    }) => void;
}
