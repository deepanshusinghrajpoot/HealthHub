import { createContext } from "react";


export const AppContexts = createContext();

const AppContextsProvider = (props) => {
 
    const currency = "$";

    const calculateAge = (dob) => {
        
        const today = new Date();
        const birthDate = new Date(dob);

        const age = today.getFullYear() - birthDate.getFullYear();
        return age;

    }


    const months = [ "", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const slotDateFormate = (slotDate)=>{  
         const dateArray = slotDate.split("_");
         return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2];
    }

   
    const value = {
          calculateAge,
          slotDateFormate,
          currency
    }

    return (
        <AppContexts.Provider value={value}>
              {props.children}
        </AppContexts.Provider>
    )
}


export default AppContextsProvider;