'use client';

import {Container} from "@mui/material";
import React, {useState} from "react";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

import * as SharedComponents from '../shared-components';
import {
  Language,
  LanguageContext,
  TreesContext,
} from '@/providers/context';

import {MSWWrapperProps} from "@/providers/msw";
import dynamic from "next/dynamic";
import {ErrorBoundary} from "react-error-boundary";

const MSWWrapper = dynamic<MSWWrapperProps>(() =>
  import("./../providers/msw").then(({MSWWrapper}) => MSWWrapper)
)

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
    <html lang={"en"}>
    <body>

    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
      <LanguageContext.Provider value={language}>
        <TreesContext.Provider value={numberOfTrees}>
          <ErrorBoundary fallback={<div>Something went wrong!</div>} onError={console.error}>
            <header>
              <SharedComponents.Header {...{changeLanguage}} />
            </header>
            <main>
              <MSWWrapper>
                {children}
              </MSWWrapper>
            </main>
            <Container>
              <section>
                <SharedComponents.Links/>
              </section>
              <footer>
                <SharedComponents.Footer/>
              </footer>
            </Container>
          </ErrorBoundary>
        </TreesContext.Provider>
      </LanguageContext.Provider>
    </QueryClientProvider>
    </body>
    </html>
  )
}
