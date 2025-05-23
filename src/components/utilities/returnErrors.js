export default function returnErrors(res, data, setError, setLoading) {
  if (!res.ok) {
    if (data.errors && Array.isArray(data.errors)) {
      const error = data.errors[0];
      setError(error.message || 'An error occurred');
      setLoading(false);
      throw new Error(error.message);
    }
  }
}
