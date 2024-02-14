import { ResultsByName } from "../types/location.types";
import { mapAqiState } from "../utils";
import { Card, CardLink, CardList, CardListItem } from "./Card";

interface SearchResultsProps {
  results?: ResultsByName[];
}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div className='space-y-4 pb-4'>
      {(results || []).map((result: any) => {
        const { station, aqi } = result;
        return (
          <Card key={result.uid}>
            <CardList>
              <CardListItem label='Name'>{station.name} </CardListItem>
              <CardListItem label='AQI'>{aqi} </CardListItem>
              <CardListItem label='State'>
                <CardLink
                  status={mapAqiState(aqi)}
                  href='https://aqicn.org/scale/'
                />
              </CardListItem>
            </CardList>
          </Card>
        );
      })}
    </div>
  );
}
