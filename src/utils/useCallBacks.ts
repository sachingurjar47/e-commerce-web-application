export interface Callbacks<T> {
  onError?: (message?: string, error?: Error) => void;
  onSuccess?: (response?: T) => void;
  onLoading?: (loading: boolean) => void;
}

export const useCallbacks = <T>(callbacks?: Callbacks<T>) => {
  const onError = (error: Error) => {
    const message = error.message;
    if (callbacks?.onError) {
      callbacks.onError(message, error);
    }
  };

  const onSuccess = (response?: T) => {
    if (callbacks?.onSuccess) {
      callbacks.onSuccess(response);
    }
  };

  const onLoading = (loading: boolean) => {
    if (callbacks?.onLoading) {
      callbacks.onLoading(loading);
    }
  };

  return { onError, onSuccess, onLoading };
};
