// const [jobs, setJobs] = useState([]);
//   const [page, setPage] = useState(1);
//   const [checked, setChecked] = React.useState(false);

//   const id = process.env.REACT_APP_ID;
//   const key = process.env.REACT_APP_KEY;

//   const url = `https://api.adzuna.com/v1/api/jobs/za/search/${page}?app_id=${id}&app_key=${key}&results_per_page=5&where=cape-town`;

//   useEffect(() => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((res) => setJobs(res.results))
//       .catch((error) => console.log(error.message));
//   }, []);

//   const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
//     fetch(
//       `https://api.adzuna.com/v1/api/jobs/za/search/${page}?app_id=${id}&app_key=${key}&results_per_page=5&where=cape-town`
//     )
//       .then((response) => response.json())
//       .then((res) => setJobs(res.results))
//       .catch((error) => console.log(error.message));

//     setPage(value);
//     console.log(page);
//   };

//   const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setChecked(event.target.checked);
//     fetch(
//       `https://api.adzuna.com/v1/api/jobs/za/search?app_id=${id}&app_key=${key}&results_per_page=5&where=cape-town&full_time=1`
//     )
//       .then((response) => response.json())
//       .then((res) => setJobs(res.results))
//       .catch((error) => console.log(error.message));
//   };