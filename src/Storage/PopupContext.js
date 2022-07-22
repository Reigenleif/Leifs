import react, { useCallback, useState } from "react";

const PopupContext = react.createContext({
  isActive: false,
  content: "",
  triggerPopup() {},
  disablePopup() {},
});

export function PopupContextProvider(props) {
  const [content, setContent] = useState("");
  const [isActive, setIsActive] = useState(false);

  const triggerPopup = useCallback((inputContent) => {
    setContent(inputContent);
    setIsActive(true);
    document.body.classList.toggle("noscroll", true)
  }, []);
  const disablePopup = useCallback(() => {
    setContent("");
    setIsActive(false);
    document.body.classList.toggle("noscroll", false)
  }, []);

  return (
      <PopupContext.Provider
        value={{
          isActive: isActive,
          content: content,
          triggerPopup: triggerPopup,
          disablePopup: disablePopup,
        }}
      >
        {props.children}
      </PopupContext.Provider>
  );
}

export default PopupContext;
