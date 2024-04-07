'use client';

import * as React from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import {
    RainbowKitProvider,darkTheme
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";
import Config from './config';
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={Config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider theme={darkTheme()} modalSize="compact">{children}</RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}