import { Dispatch } from "@reduxjs/toolkit";
import { Callbacks, useCallbacks } from "../utils/useCallBacks";
import { getRequest } from "../utils/https/getRequest";
import { EndPointsConstants } from "../constants/EndPointsConstants";

export const GetProductsByCategory = <T>(
  category: string,
  callbacks?: Callbacks<T>
) => {
  const { onError, onLoading, onSuccess } = useCallbacks<T>(callbacks);

  return async (dispatch: Dispatch) => {
    onLoading(true);
    try {
      const { data } = await getRequest(
        `${EndPointsConstants.Category}/${category}`
      );

      onSuccess(data);
    } catch (error) {
      onError(error as Error);
    } finally {
      onLoading(false);
    }
  };
};
