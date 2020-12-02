import React, {createContext, Dispatch, ReactElement, useContext, useReducer} from "react";
import Post from "./types/Post";

export interface Store {
  favorites: Post[]
}

export const initialStore: Store = {
  favorites: []
}

interface RemoveFromFavorites {
  type: 'RemoveFromFavorites'
  post: Post
}

interface AddToFavorites {
  type: 'AddToFavorites'
  post: Post
}

type Actions = AddToFavorites | RemoveFromFavorites

export function reducer(store: Store, action: Actions): Store {
  switch (action.type) {
  case 'AddToFavorites': {
    return {
      ...store,
      favorites: [
        ...store.favorites,
        action.post
      ]
    }
  }
  case 'RemoveFromFavorites': {
    const favorites = [...store.favorites]
    const index = favorites.map(favorite => favorite.id).indexOf(action.post.id)
    if (index >= 0) {
      favorites.splice(index, 1)
    }
    return {
      ...store,
      favorites: favorites
    }
  }

  }
}

interface ContextProps {
  store: Store;
  dispatch: Dispatch<Actions>;
}

const StoreContext = createContext({} as ContextProps);
export const useStore = (): ContextProps => useContext(StoreContext);

export function StoreProvider(props: {children: ReactElement}): ReactElement {
  const [store, dispatch] = useReducer(reducer, initialStore);

  const value = {store, dispatch};
  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}
