import React, { useContext, useState } from "react";
import { LocationContext } from "../context/location.context";
import { MeasureResults } from "../types/location.types";
import { mapAqiState } from "../utils";
import moment from "moment";
import { Card, CardLink, CardList, CardListItem, CardTitle } from "./Card";

interface AQIDisplayerProps extends MeasureResults {}

export function AQIDisplayer({
  aqi,
  city,
  status,
  forecast: {
    daily: { pm25 },
  },
}: AQIDisplayerProps) {
  const { latitude, longitude } = useContext(LocationContext);
  const [todayIndex] = useState(
    pm25.findIndex(
      (forecast) =>
        forecast.day === moment(new Date()).format("YYYY-MM-DD").toString()
    )
  );

  return (
    <div className='space-y-6 flex flex-col pb-8 mt-10'>
      <Card>
        <CardTitle>User Location:</CardTitle>
        <CardList>
          <CardListItem label='Latutide'>{latitude} </CardListItem>
          <CardListItem label='Longitude'>{longitude} </CardListItem>
        </CardList>
      </Card>
      <Card>
        <CardTitle>Nearest Station:</CardTitle>
        <CardList>
          <CardListItem label='Name'>{city.name} </CardListItem>
          <CardListItem label='AQI'>{aqi} </CardListItem>
          <CardListItem label='State'>
            <CardLink status={status} href='https://aqicn.org/scale/' />
          </CardListItem>
        </CardList>
      </Card>
      <Card>
        <CardTitle>Yesterday value:</CardTitle>
        <CardList>
          <CardListItem label='Name'>{city.name} </CardListItem>
          <CardListItem label='AQI'>{pm25[todayIndex - 1].avg} </CardListItem>
          <CardListItem label='State'>
            <CardLink
              status={mapAqiState(pm25[todayIndex - 1].avg)}
              href='https://aqicn.org/scale/'
            />
          </CardListItem>
        </CardList>
      </Card>
      <Card>
        <CardTitle>Tomorrow's Forecast:</CardTitle>
        <CardList>
          <CardListItem label='Name'>{city.name} </CardListItem>
          <CardListItem label='AQI'>{pm25[todayIndex + 1].avg} </CardListItem>
          <CardListItem label='State'>
            <CardLink
              status={mapAqiState(pm25[todayIndex + 1].avg)}
              href='https://aqicn.org/scale/'
            />
          </CardListItem>
        </CardList>
      </Card>
    </div>
  );
}
