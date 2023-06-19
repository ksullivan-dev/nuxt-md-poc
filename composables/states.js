export const useAuth = () => {
  const state = useState('auth', () => false);

  return state;
};

export const useRestaurants = () => useApi('/api/restaurants');
