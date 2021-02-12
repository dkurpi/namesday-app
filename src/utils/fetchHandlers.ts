import axios, { AxiosResponse } from "axios";

interface APIResponseByDate {
  data: {
    dates: SingleDate;
    namedays: { [Code in CountryCode]: string };
  };
}

interface APIResponseByName {
  results: SingleDateNames[];
}

export const getByName = async (
  name: string,
  country: CountryCode
): Promise<SingleDateNames[]> => {
  try {
    const res: AxiosResponse<APIResponseByName> = await axios(
      `/getdate?name=${name}&country=${country}`
    );
    const body = res.data.results;
    return body;
  } catch (err) {
    return err;
  }
};

export const getNameday = async (
  day: number,
  month: number,
  country: CountryCode
): Promise<string[]> => {
  try {
    const res: AxiosResponse<APIResponseByDate> = await axios(
      `/namedays?country=${country}&month=${month}&day=${day}`
    );
    const body = res.data.data;
    return body.namedays[country].split(", ");
  } catch (err) {
    return err;
  }
};

export const getTommorowNamedays = async (
  country: CountryCode
): Promise<string[]> => {
  try {
    const res: AxiosResponse<APIResponseByDate> = await axios(
      `https://api.abalin.net/tomorrow?country=${country}`
    );
    const body = res.data.data;
    return body.namedays[country].split(", ");
  } catch (err) {
    return err;
  }
};

export const getYesterdayNamedays = async (
  country: CountryCode
): Promise<string[]> => {
  try {
    const res: AxiosResponse<APIResponseByDate> = await axios(
      `https://api.abalin.net/yesterday?country=${country}`
    );
    const body = res.data.data;
    return body.namedays[country].split(", ");
  } catch (err) {
    return err;
  }
};
