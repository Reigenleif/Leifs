import react from "react";
import { useEffect, useState } from "react";

const AuthContext = react.createContext({
  isLoggedIn: false,
  username: "",
  validation: "100",
  onLogin: () => {},
  onLogout: () => {},
  onSignup: () => {},
  triggerValidation: () => {},
});

export const AuthContextProvider = (props) => {

  //setting authentication information
  const [authInfo, setAuthInfo] = useState({
    isLoggedIn: localStorage.getItem("isLoggedIn"),
    username: "",
  });

  //getting userlist (username-password pairs) from localStorage 
  let userList = JSON.parse(localStorage.getItem("userList"));
  userList =
    userList === null
      ? {"admin" : {password: "alipganteng"}}
      : {...userList, "admin" : {password: "alipganteng" }}

  //algorithm to find username-password pair on localStorange
  const onLoginHandler = (username, password) => {
    let userIsFound = false;
    for (let i in userList) {
      if (i=== username) {
        if (userList[i].password === password) {
          localStorage.setItem("isLoggedIn", true);
          setAuthInfo((prevState) => {
            return {
              ...prevState,
              isLoggedIn: true,
              username: username
            };
          });
        } else {
          setAuthInfo((prevState) => {
            return {
              ...prevState,
              validation: "102",
            };
          });
        }
        userIsFound = true;
      }
    }
    if (!userIsFound) {
      setAuthInfo((prevState) => {
        return {
          ...prevState,
          validation: "101",
        };
      });
    }
  };

  const onLogoutHandler = () => {
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("username", "");
    setAuthInfo((prevState) => {
      return {
        ...prevState,
        isLoggedIn: false,
      };
    });
  };

  const triggerValidation = (code) => {
    setAuthInfo((prevState) => {
      return {
        ...prevState,
        validation: code,
      };
    });
  };

  const signupHandler = (username, password) => {
    if (username in userList) {
      triggerValidation("105")
      return
    }
    const newUserList = {
      ...userList,
    };
    newUserList[username] = {password:password}

    localStorage.setItem("userList",JSON.stringify(newUserList));
    onLoginHandler(username, password)
  };

  useEffect(() => {
    setAuthInfo({
      isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
      username: localStorage.getItem("username")
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...authInfo,
        onLogin: (username, password) => {
          onLoginHandler(username, password);
        },
        onLogout: onLogoutHandler,
        onSignup: (username, password) => {
          signupHandler(username, password);
        },
        triggerValidation: triggerValidation,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
