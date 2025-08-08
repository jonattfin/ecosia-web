import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import Head from "next/head";

import * as Components from "./components";
import { AppColor } from "@/shared-components";
import { Language } from "@/providers/context";
import { ResultQuery } from "@/api/interfaces";

export type HomeComponentProps = {
  q: string;
  counter: number;
  language?: Language;
  onSearch: (query: string) => void;
  onSearchValueSelected: (query: string) => void;
  data: ResultQuery[],
}

export default function Component({
  q,
  counter,
  onSearch,
  onSearchValueSelected,
  language,
  data
}: HomeComponentProps) {
  const title = "Ecosia - The search engine that plants trees";

  return (
    <section>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Grid container>
        {/* Search section */}
        <Grid size={3}>
          &nbsp;
        </Grid>
        <Grid size={{xs:12, xl:6}}>
          <Components.SearchComponent {...{ q, counter, onSearch, onSearchValueSelected, language, data }} />
        </Grid>
        <Grid size={3}>
          &nbsp;
        </Grid>
        {/* Search section */}

        {/* Countries section */}
        <BlueGrid size={3}>
          &nbsp;
        </BlueGrid>
        <BlueGrid size={{xs:12, xl:6}}>
          <Components.CountriesComponent {...{ language }} />
        </BlueGrid>
        <BlueGrid size={3}>
          &nbsp;
        </BlueGrid>
        {/* Countries section */}

        {/* Map section */}
        <Grid size={3}>
          &nbsp;
        </Grid>
        <Grid size={{xs:12, xl:6}}>
          <Components.MapComponent {...{ counter, language }} />
        </Grid>
        <Grid size={3}>
          &nbsp;
        </Grid>
        {/* Map section  */}

        {/* Financial section */}
        <BlueGrid size={3}>
          &nbsp;
        </BlueGrid>
        <BlueGrid size={6}>
           <Components.FinancialContainer {...{ language }} />
        </BlueGrid>
        <BlueGrid size={3}>
          &nbsp;
        </BlueGrid>
        {/* Financial section */}

        {/* Why choose us section */}
        <Grid size={3}>
          &nbsp;
        </Grid>
        <Grid size={6}>
          <Components.WhyChooseUsComponent {...{ language }} />
        </Grid>
        <Grid size={3}>
          &nbsp;
        </Grid>
        {/* Why choose us section */}
        <Grid size={12}>
          <section>
            <Components.JoinUsComponent {...{ language }} />
          </section>
        </Grid>
      </Grid>
    </section>
  );
}

// Styled Components

const BlueGrid = styled(Grid)`
  background-color: ${AppColor.AliceBlue};
`;
