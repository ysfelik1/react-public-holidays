import useFetch from "../hooks/useFetch"; 

const PublicHolidays = () => {

  const { data, isLoading, error } = useFetch(`https://date.nager.at/api/v3/PublicHolidays/${2023}/${'TR'}`);
  
  return (
    <div>
      <h1 style={{ color: "blue" }}>PublicHolidays</h1>
      
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <div data={data} ></div> }
      
    </div>
  );
};
export default PublicHolidays;
