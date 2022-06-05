import { ReactNode } from 'react';
interface LoadingContextInterface {
    loading: boolean;
    setLoading: (b: boolean) => void;
    msg?: string;
    setMsg?: (s: string) => void;
}
export interface LoadingProviderProps {
    children: ReactNode;
    component?: ReactNode;
}
export declare function LoadingProvider({ children, component }: LoadingProviderProps): JSX.Element;
export declare function useLoading(): LoadingContextInterface;
export declare function useAsync(func: () => Promise<any>): () => Promise<void>;
export {};
