import { useEffect, useState } from "react";
import Job from "../Job/job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() =>{
        fetch('jobs.json')
        .then(res =>res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div className='text-center my-6'>
            <h2 className='text-5xl'>Featured Jobs: {jobs.length}</h2>
            <p className="my-6">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-6 mb-4">
                {
                  jobs.slice(0, dataLength).map(job => <Job job={job} key={job.id}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length? 'hidden' : ''}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">Show all jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;