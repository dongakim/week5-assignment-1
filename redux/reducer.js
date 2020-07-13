export const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  regionName: '',
  categoryId: 0,
};

const actionType = {
  setRegions: (state, action) => {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  },
  setCategories: (state, action) => {
    const { categories } = action.payload;
    return {
      ...state,
      categories,
    };
  },
  setRestaurants: (state, action) => {
    const { restaurants } = action.payload;
    return {
      ...state,
      restaurants,
    };
  },
  changeRegionName: (state, action) => {
    const { regionName } = action.payload;
    return {
      ...state,
      regionName,
    };
  },
  changeCategoryId: (state, action) => {
    const { categoryId } = action.payload;
    return {
      ...state,
      categoryId,
    };
  },
};

export default function reducer(state = initialState, action) {
  return action && actionType[action.type] ? (actionType[action.type])(state, action) : state;
}
