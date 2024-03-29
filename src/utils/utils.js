const fetchData = async (url) => {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    return await res.json();
  } catch (error) {
    console.log('Something went wrong!');
  }
};

export { fetchData };
