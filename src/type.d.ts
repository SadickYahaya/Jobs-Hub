interface IJob {
  title: string;
  company: CompanyName;
  location: LocationName;
  created: string;
  contract_time: string;
  id: string;
  description: string;
  count: number;
  }
  
  type JobState = {
    jobs: IJob[]
  }

  interface CompanyName {
    display_name: any;
  }
  
  interface LocationName {
    display_name: any;
  }
  
  type JobAction = {
    type: string
    job: IJob
  }
  
  type DispatchType = (args: JobAction) => JobAction