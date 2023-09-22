import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    const handleApply = () => {
        saveJobApplication(idInt);
        toast('You have successfully applied')
    }
    // console.log(id, job);

    return (
        <div>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div className="border md:col-span-3">
                <h2><span className="text-xl font-semibold">Job Description: </span> <small>{job.job_description}</small></h2>
                <p className="text-lg font-semibold">{job.job_title}</p>
                <h2 className="font-semibold">Job Details of: {job.company_name} </h2>
              </div>
              <div className="border">
                <h2 className="text-2xl">Job Details</h2>
                <button onClick={handleApply} className="btn btn-primary w-full">Apply Now</button>
              </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;