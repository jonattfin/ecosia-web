'use client';
import {useQuery} from "react-query";

import ProjectComponent, {ProjectProps} from "./project-component";
import {Project} from "@/api/interfaces";
import {fetchProjectById} from "@/api";

type ProjectQuery = {
  data: Project;
  isLoading: boolean;
  error: any;
}

export default function Page() {
  const id = 0;

  const {
    data: project,
    isLoading: projectIsLoading,
    error: projectError,
  } = useQuery(["project", id], () => fetchProjectById(id)) as ProjectQuery;

  if (projectIsLoading) return "Loading...";
  if (projectError || !project) return "An error has occurred: ";

  const props: ProjectProps = {
    project,
  };

  return <ProjectComponent {...props} />;
}
