import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localstorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [jobsApplied, setJobsApplied] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleFilter = filter =>{
    if(filter === 'all'){
        setDisplayJobs(jobsApplied);
    }
    else if(filter === 'remote'){
        const remoteJobs = jobsApplied.filter(job => job.remote_or_onsite === 'Remote');
        setDisplayJobs(remoteJobs);
    }
    else if(filter === 'onsite'){
        const onsiteJobs = jobsApplied.filter (job => job.remote_or_onsite === 'Onsite');
        setDisplayJobs(onsiteJobs);
    }
  }

  useEffect(() => {
    const storedJobsId = getStoredJobApplication();
    if (jobs.length > 0) {
      // const appliedJobs = jobs.filter(job => storedJobsId.includes(job.id));
      const appliedJobs = [];
      for (const id of storedJobsId) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          appliedJobs.push(job);
        }
      }
      setJobsApplied(appliedJobs);
      setDisplayJobs(appliedJobs)
      
      //   console.log(jobs, storedJobsId, appliedJobs);
    }
  }, [jobs]);

  return (
    <div className="my-8">
      <h2 className="text-2xl">Jobs I applied: {jobsApplied.length}</h2>

      <details className="dropdown mb-32">
              <summary className="m-1 btn">Filter</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li onClick={() => handleFilter('all')}><a>All</a></li>
                <li onClick={() => handleFilter('remote')}><a>Remote</a></li>
                <li onClick={() => handleFilter('onsite')}><a>Onsite</a></li>
              </ul>
            </details>

      <div className="flex flex-col gap-5">
        {
        displayJobs.map((job) => (
          <div key={job.id}>

            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img src={job.logo} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{job.job_title}</h2>
                <p>{job.remote_or_onsite}</p>
                <p>{job.company_name}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
                </div>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default AppliedJobs;
