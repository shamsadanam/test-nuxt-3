
export const useApiFetch = (url, options) => {
const { apiUrl } = useRuntimeConfig().public;

  return useLazyFetch(`${apiUrl}/${url}`, {
    ...options
  });
}
