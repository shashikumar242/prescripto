import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currency = "$";

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);

    let age = today.getFullYear() - birthDate.getFullYear();

    return age;
  };

  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const slotDateFormat = (slotDate) => {
    console.log("slotDate", slotDate);
    const dateArray = slotDate.split("_");
    const day = dateArray[0];
    const monthIndex = Number(dateArray[1]); // monthIndex should not subtract 1
    const year = dateArray[2];

    return `${day} ${months[monthIndex]} ${year}`; // Correct format
  };
  const value = { calculateAge, months, slotDateFormat, currency };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
