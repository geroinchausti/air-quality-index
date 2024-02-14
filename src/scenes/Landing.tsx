import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import {
  AQIDisplayer,
  Button,
  Containter,
  Input,
  Loading,
  NoLocationProvided,
  PageHeader,
  SearchResults,
} from "../components";
import { LocationContext } from "../context/location.context";
import useDebounce from "../hooks/useDebounce";
import { fetchMeasurements, searchByName } from '../queries';
import { MeasureResults, ResultsByName } from "../types/location.types";

export function Landing() {
  const { latitude, longitude } = useContext(LocationContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentLocationData, setCurrentLocationData] =
    useState<MeasureResults>();
  const [searchResults, setSearchResults] = useState<ResultsByName[]>();
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (latitude && longitude) {
      setIsLoading(true);
      const apiCall = async () => {
        const data = await fetchMeasurements({ latitude, longitude });
        setCurrentLocationData(data);
        setIsLoading(false);
      };
      apiCall();
    }
  }, [latitude, longitude]);

  useDebounce(
    () => {
      if (value) {
        setIsLoading(true);
        const apiCall = async () => {
          const data = await searchByName(value);
          setSearchResults(data);
          setIsLoading(false);
        };
        apiCall();
      }
    },
    [value],
    800
  );

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  if (!latitude && !longitude) {
    return <NoLocationProvided />;
  }

  return (
    <div className='flex w-full h-full justify-center'>
      <Containter>
        <PageHeader />
        {isLoading ? (
          <Loading />
        ) : isSearching ? (
          <>
            <Button onClick={() => setIsSearching(!isSearching)}>
              {"<- back"}
            </Button>
            <Input
              value={value}
              onChange={handleSearch}
              placeholder='Search by city name or station...'
            />

            <SearchResults results={searchResults} />
          </>
        ) : (
          <>
            <span>
              You could
              <Button
                className='ml-1'
                onClick={() => setIsSearching(!isSearching)}
              >
                search another location
              </Button>
            </span>

            {currentLocationData && <AQIDisplayer {...currentLocationData} />}
          </>
        )}
      </Containter>
    </div>
  );
}
