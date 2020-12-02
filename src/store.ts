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
