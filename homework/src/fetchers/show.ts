import { fetcher } from "@/fetchers/fetcher";
import { IShow } from "@/typings/show";
import { swrKeys } from "./swrKeys";

interface IShowsResponse {
  shows: Array<IShow>;
}

interface IShowFetchResponse {
  show: IShow;
}

export function getShows() {
  return fetcher<IShowsResponse>(swrKeys.listShows);
}

export function getTopRatedShows() {
  return fetcher<IShowsResponse>(swrKeys.topRatedShows);
}

export function getShow(id: string) {
  return fetcher<IShowFetchResponse>(swrKeys.show(id));
}
