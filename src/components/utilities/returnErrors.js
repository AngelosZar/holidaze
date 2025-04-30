export default function returnErrors(res, data, setError, setLoading) {
  if (!res.ok) {
    if (data.errors && Array.isArray(data.errors)) {
      const error = data.errors[0];
      console.log('Error:', error);
      setError(error.message || 'An error occurred');
      setLoading(false);
      // console.error('Error:', error);
      throw new Error(error.message);
    }
  }
}
