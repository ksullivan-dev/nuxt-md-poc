export const useApi = (path, opts = {}) => {
  const config = useRuntimeConfig();
  return useFetch(path, {
    baseURL: config.public.apiBase,
    server: false, // TODO: This is only to see response in network tab. Remove before deploy
    ...opts,
  });
};
