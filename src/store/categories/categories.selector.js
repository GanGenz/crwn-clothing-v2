import { createSelector } from 'reselect'
import { selectCurrentUser } from '../user/user.selector';

const selectCategoryReducer = (state) => state.categories

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)

// export const selectCategoriesMap = (state) => {
//   const categoriesMap = state.categories.categories.reduce(
//     (acc, { title, items }) => {
//       acc[title.toLowerCase()] = items;
//       return acc;
//     },
//     {}
//   );
//   return categoriesMap;
// };

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce(
        (acc, { title, items }) => {
            acc[title.toLowerCase()] = items;
            return acc;
        }, {}
    )
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)