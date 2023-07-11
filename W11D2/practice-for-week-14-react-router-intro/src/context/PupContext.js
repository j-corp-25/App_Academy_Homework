import { createContext } from 'react';


export function PupProvider(props) {
    return (
      <PupContext.Provider>
        {props.children}
      </PupContext.Provider>
    )
}















export const PupContext = createContext();
