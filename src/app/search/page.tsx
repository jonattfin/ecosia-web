'use client';

import {useEffect, useState} from "react";
import {useSearchParams, useRouter} from "next/navigation";
import {debounce} from "lodash";

import SearchComponent, {SearchProps} from "./search-component";
import {ResultQuery} from "@/api/interfaces";
import {searchByQueryAsync} from "@/api";

type IndexSearchProps = {
}

type ResultsState = {
  page: number;
  size: number;
  count: number;
  searches: ResultQuery[];
}

export default function Component({}: IndexSearchProps) {
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  const [resultsObject, setResultsObject] = useState<ResultsState>({
    page: 1,
    size: 0,
    count: 0,
    searches: [],
  });

  const [progress, setProgress] = useState(false);

  const router = useRouter();

  const doSearch = (query: string) => {
    console.log(query);
    router.push(`/search?q=${query}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      setProgress(true);

      const data = await searchByQueryAsync(q?.toString());

      setResultsObject(data);
      setProgress(false);
    };

    if (q) {
      fetchData()
        .catch(reason => console.error(reason));
    }

    // incrementTreeCount(); // TODO
  }, [q]);

  const props: SearchProps = {
    query: (q || "").toString(),
    resultsObject,
    doSearch: debounce(doSearch, 200),
    progress,
  };

  return <SearchComponent {...props} />;
}
