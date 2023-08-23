import { useState, useEffect } from "react";
import { FilterOpts } from "../interfaces/filter";
import { filterStore } from "../store/filterStore";

interface FormState {
  search: FilterOpts;
  radius: number;
}

const opt: { [K in FilterOpts]: FilterOpts } = {
  hotel: "hotel",
  "gas station": "gas station",
  supermarket: "supermarket",
  "fast food": "fast food",
};

export const UseForm = () => {
  const setFilter = filterStore((state) => state.setFilter);

  const [isShowBar, setIsShowBar] = useState(false);
  const [form, setForm] = useState<FormState>({
    search: "supermarket",
    radius: 10,
  });

  const toggleShowBar = () => setIsShowBar(!isShowBar);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = name === "search" ? e.target.id : +e.target.value;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    setFilter(form.search, form.radius);
  }, [form]);

  return {
    opt,
    handleChange,
    toggleShowBar,
    isShowBar,
    ...form,
  };
};
