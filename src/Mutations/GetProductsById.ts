import { Dispatch } from "@reduxjs/toolkit";
import { Callbacks, useCallbacks } from "../utils/useCallBacks";
import { getRequest } from "../utils/https/getRequest";
import { getRecord } from "../Slices/productSlice";

export const GetProductsById = <T>(id: string, callbacks?: Callbacks<T>) => {
  const { onError, onLoading, onSuccess } = useCallbacks<T>(callbacks);

  return async (dispatch: Dispatch) => {
    onLoading(true);
    try {
      const { data } = await getRequest(`${id}`);
      dispatch(getRecord(data));
      onSuccess(data);
    } catch (error) {
      onError(error as Error);
    } finally {
      onLoading(false);
    }
  };
};
