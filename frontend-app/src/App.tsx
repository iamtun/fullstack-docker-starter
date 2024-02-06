import useSWR from "swr";

const fetcher = (url:string) => fetch(url).then(r => r.json())

function App() {
  const { data, error } = useSWR(`${import.meta.env.VITE_APP_API_URL}/api/hello`, fetcher)
  console.log(data)
  return (
    error ? <div>have a error</div> : <div>{data?.message}</div>
  )
}

export default App
