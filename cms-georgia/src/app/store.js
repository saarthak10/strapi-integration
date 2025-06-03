import { configureStore } from '@reduxjs/toolkit'
import { strapiApi } from './service'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [strapiApi.reducerPath]: strapiApi.reducer
  },
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(strapiApi.middleware),

})


// Export default store;
setupListeners(store.dispatch)