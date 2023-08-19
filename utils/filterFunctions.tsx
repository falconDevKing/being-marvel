import dayjs, { Dayjs } from "dayjs";
import { listingsType } from "../pages/host";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import TvIcon from "@mui/icons-material/Tv";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DevicesIcon from "@mui/icons-material/Devices";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ArticleIcon from "@mui/icons-material/Article";

export const paginateListings = (listingsData: listingsType[], page: number, rowsPerPage: number) => {
  const listings = listingsData ? [...listingsData] : [];
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = page * rowsPerPage;

  const displayData = listings.filter((e: any, i: any) => i >= startIndex && i < endIndex);
  return displayData;
};

export const sortListings = (listings: listingsType[], sortString: string) => {
  if (sortString === "date") {
    const sorted = listings.sort((a, b) => {
      const aDate = a?.updatedAt;
      const bDate = b?.updatedAt;

      return dayjs(aDate).isSame(bDate) ? 0 : dayjs(aDate).isAfter(bDate) ? 1 : -1;
    });

    return sorted;
  }

  if (sortString === "alpha") {
    const sorted = listings.sort((a, b) => {
      const aName = a.title;
      const bName = b.title;

      return aName === bName ? 0 : aName < bName ? -1 : 1;
    });
    return sorted;
  }

  return listings;
};

export const filterBySearch = (listings: listingsType[], searchString: string) => {
  return searchString ? listings.filter((listing) => listing.title?.includes(searchString)) : listings;
};

export const filterByPrice = (listings: listingsType[], period: string, priceRange: number[]) => {
  const minMultipier = period === "monthly" ? 28 : period === "weekly" ? 7 : period === "daily" ? 1 : 1;
  const maxMultipier = period === "monthly" ? 31 : period === "weekly" ? 7 : period === "daily" ? 1 : 1;

  return priceRange.length && period
    ? listings.filter((listing) => listing?.rate >= priceRange[0] / minMultipier && listing?.rate <= priceRange[1] / maxMultipier)
    : listings;
};

export const filterByAvailabilityBegin = (listings: listingsType[], availabilityBegin: Dayjs | null) => {
  return availabilityBegin && availabilityBegin?.isValid()
    ? listings.filter(
        (listing) => dayjs(listing?.endDate).isSameOrAfter(availabilityBegin, "day") && availabilityBegin.isSameOrAfter(listing?.startDate, "day")
      )
    : listings;
};

export const filterByAvailabilityEnd = (listings: listingsType[], availabilityEnd: Dayjs | null) => {
  return availabilityEnd && availabilityEnd?.isValid()
    ? listings.filter((listing) => dayjs(listing?.endDate).isSameOrAfter(availabilityEnd, "day") && availabilityEnd.isSameOrAfter(listing?.startDate, "day"))
    : listings;
};

export const filterByAdspaces = (listings: listingsType[], adspaceList: string[]) => {
  return adspaceList.length ? listings.filter((listing) => adspaceList?.includes(listing?.adspaceType)) : listings;
};

export const filterByCountry = (listings: listingsType[], countryList: string[]) => {
  return countryList.length ? listings.filter((listing) => countryList?.includes(listing?.country)) : listings;
};

export const filterByCity = (listings: listingsType[], cityList: string[]) => {
  return cityList.length ? listings.filter((listing) => cityList?.includes(listing?.stateRegionCounty)) : listings;
};

export const QuickFilterIcons: { [x: string]: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string } } = {
  Television: TvIcon,
  Transport: DirectionsCarIcon,
  Sports: SportsSoccerIcon,
  Billboards: ArticleIcon,
  Magazines: MenuBookIcon,
  "Social Media": DevicesIcon,
  Venues: AccountBalanceIcon,
};
