import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import userReducer, { UserSlideState } from "./userSlice";
// import commentReducer, { CommentSliceType } from "./commentSlice";
// import bannersReducer, { BannersSliceType } from "./bannersSlice";


// export interface RootState {
//     user: UserSlideState;
//     comment: CommentSliceType;
//     banners: BannersSliceType;
// }

// const persistConfig = {
//     key: "root",
//     version: 1,
//     storage,
//     blacklist: ['comment', 'banners']
// };

// const rootReducer = combineReducers({ user: userReducer });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [
//                     FLUSH,
//                     REHYDRATE,
//                     PAUSE,
//                     PERSIST,
//                     PURGE,
//                     REGISTER,
//                 ],
//             },
//         }),
// });

// export const persistor = persistStore(store);

// -------------

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch