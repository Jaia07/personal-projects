import JobListing from "./JobListing";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const jobsUrl = isHome
    ? "http://localhost:8000/jobs?_limit=3"
    : "http://localhost:8000/jobs";

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let res = await fetch(jobsUrl);
        let data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error Fetching Data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 w-full p-4">
      <div className="mx-auto max-w-[78rem]">
        <h2 className="text-2xl text-indigo-500 text-center font-bold my-2">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch justify-center gap-4">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
