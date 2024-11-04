const backend_gateway = import.meta.env.VITE_BACKEND_GATEWAY;
const retreiveUserQueryMap = async () => {
  try {
    const response = await fetch(`${backend_gateway}/api/getUserQueries`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Error performing get request upon login');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error getting user QueryMap upon login', error);
  }
};

export default retreiveUserQueryMap;
