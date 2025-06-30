const fetchData = async (url) => {
  if (!url) throw new Error('No URL provided to fetchData');
  let res = await fetch(`${url}`)
  let data = await res.json()

  if (res.status === 500) {
    throw new Error('Something went wrong!')
  }

  if (!res.ok) {
    return {
      data: data ? data : null,
      error: true,
    }
  }

  if (data) {
    return {
      data: data,
      error: false,
    }
  }
}

const getAPIData = async (url) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL
  if (!baseUrl) throw new Error('NEXT_PUBLIC_API_URL is not set in environment variables');
  if (!url) throw new Error('No URL provided to getAPIData');
  const data = await fetchData(baseUrl + url)
  return data
}
export default getAPIData
