import create from "zustand";

const useStore = create((set) => ({
  title: "",
  maxExp: undefined,
  minExp: undefined,
  salary: undefined,
  description: "",
  currency: "inr",
  period: "monthly",
  locations: [],
  skills: [],
  formIsComplete: false,

  postJob: (
    title,
    maxExp,
    minExp,
    salary,
    description,
    currency,
    period,
    locations,
    skills,
    formIsComplete
  ) =>
    set(() => ({
      title: title,
      maxExp: maxExp,
      minExp: minExp,
      salary: salary,
      description: description,
      currency: currency,
      period: period,
      locations: [...locations],
      skills: [...skills],
      formIsComplete: formIsComplete,
    })),
}));

export default useStore;
