'use client';

import {ThemeProvider, createTheme} from '@mui/material/styles';
import { Container } from "@mui/material";
import { Fragment, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import * as SharedComponents from './shared-components';
import {
  Language,
  LanguageContext,
  TreesContext,
} from '@/providers/context';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const queryClient = new QueryClient();

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
  const [numberOfTrees, setNumberOfTrees] = useState(0);
  const [language, setLanguage] = useState(Language.English);

  const incrementTreeCount = () => {
    setNumberOfTrees((prevValue) => prevValue + 1);
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <LanguageContext.Provider value={language}>
          <TreesContext.Provider value={numberOfTrees}>
            <header>
              <SharedComponents.Header {...{ changeLanguage }} />
            </header>
            <main>
              {/*<Component {...pageProps} {...{ incrementTreeCount }} />*/}
              {children}
            </main>
            <Container>
              <section>
                <SharedComponents.Links />
              </section>
              <footer>
                <SharedComponents.Footer />
              </footer>
            </Container>
          </TreesContext.Provider>
        </LanguageContext.Provider>
      </QueryClientProvider>
    </Fragment>
  )
}
