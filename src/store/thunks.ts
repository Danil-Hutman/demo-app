import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "./actions";
import { getCactusList } from "../api";

export const fetchProducts = () => {
  return async (dispatch: any) => {
    dispatch(fetchProductsRequest());
    try {
      const data = await getCactusList();
      dispatch(fetchProductsSuccess(data));
    } catch (error) {
      dispatch(fetchProductsFailure("Failed to fetch cactus list"));
    }
  };
};
