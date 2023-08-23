import { shallow } from "zustand/shallow";
import { filterStore } from "../../store/filterStore";

export const useFilterStore = () => {
  const props = filterStore(
    ({ filter, radius, setFilter }) => ({ filter, radius, setFilter }),
    shallow
  );

  return {
    ...props,
  };
};
