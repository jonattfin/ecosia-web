
import * as Components from "./components";
import { withLanguageControls } from "../../helpers";
import { ReportData } from "@/api/interfaces";

export default function Index() {
  return <div></div>;
}

export const SearchComponent = withLanguageControls(
  Components.SearchComponent,
  {
    onSearch: () => {},
    counter: 100,
  }
);

export const CountriesComponent = withLanguageControls(
  Components.CountriesComponent
);

export const MapComponent = withLanguageControls(Components.MapComponent, {
  counter: 100,
});

const report: ReportData = {
  month: "January",
  year: 2022,
  investmentsInCountries: [],
  investmentsInCategories: []
};

export const FinancialComponent = withLanguageControls(
  Components.FinancialComponent,
  {
    report,
  }
);

export const WhyChooseUsComponent = withLanguageControls(
  Components.WhyChooseUsComponent
);

export const JoinUsComponent = withLanguageControls(Components.JoinUsComponent);
