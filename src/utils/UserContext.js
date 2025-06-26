import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: {
    name: "Dummy name",
  },
});

export default UserContext;
