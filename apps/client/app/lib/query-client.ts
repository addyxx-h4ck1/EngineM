'use client';
import { QueryClient } from '@tanstack/react-query';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import localforage from 'localforage';

// Create a QueryClient
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes stale time
      gcTime: 1000 * 60 * 60 * 24, //Cache for 24 hours
      retry: 2, // Retry failed queries twice
    },
  },
});

// // // Set up the localForage persister
// const persister = createAsyncStoragePersister({
//   storage: localforage, // Use localForage to persist cache
// });

// // Persist the QueryClient
// persistQueryClient({
//   queryClient,
//   persister,
//   maxAge: 1000 * 60 * 60 * 24, // Cache max age of 24 hours
// });

export default queryClient;
