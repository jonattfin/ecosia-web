import {MSWDevTools} from 'msw-devtools';
import {ReactNode} from "react";

import {handlers} from '@/api/mocks/handlers';
import {db} from '@/api/mocks/db';
import {initializeMocks} from "@/api/mocks/initialize";

export type MSWWrapperProps = {
  children: ReactNode
}

initializeMocks();

export const MSWWrapper = ({children}: MSWWrapperProps) => {
  return (
    <>
      <MSWDevTools db={db} handlers={handlers}/>
      {children}
    </>
  )
}
