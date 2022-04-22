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
    isLoggedIn: true,
    username: "",
  });

  //getting userlist (username-password pairs) from localStorage 
  let userList = JSON.parse(localStorage.getItem("userList"));
  userList =
    userList === null
      ? [{ username: "admin", password: "alipganteng" }]
      : [...userList, { username: "admin", password: "alipganteng" }];

  //algorithm to find username-password pair on localStorange
  const onLoginHandler = (username, password) => {
    let userIsFound = false;
    for (let i in userList) {
      if (userList[i].username === username) {
        if (userList[i].password === password) {
          localStorage.setItem("isLoggedIn", true);
          setAuthInfo((prevState) => {
            return {
              ...prevState,
              isLoggedIn: true,
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
    const newUserList = [
      ...userList,
      { username: username, password: password },
    ];
    localStorage.setItem("userList",JSON.stringify(newUserList));
    onLoginHandler(username, password)
  };

  useEffect(() => {
    setAuthInfo({
      isLoggedIn: localStorage.getItem("isLoggedIn"),
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
