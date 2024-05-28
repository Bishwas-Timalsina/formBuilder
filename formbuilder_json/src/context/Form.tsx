import { createContext, useEffect, useState } from "react";

interface IFormContextType {
  droppedContainer: any[];
  setDroppedContainer: React.Dispatch<React.SetStateAction<any[]>>;
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}
export const FormContext = createContext<any>({
  droppedContainer: [],
  setDroppedContainer: () => {},
  openDrawer: false,
  setOpenDrawer: () => {},
});

export const FormProvider = ({ children }: any) => {
  const [droppedContainer, setDroppedContainer] = useState<any>([]);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <FormContext.Provider
      value={{
        droppedContainer,
        setDroppedContainer,
        openDrawer,
        setOpenDrawer,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
