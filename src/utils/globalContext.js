let globalContext = {
  misc: {
    theme: "dark",
    fontSize: "14px",
  },
};

const getGlobalContext = () => {
  return globalContext;
};

export const setGlobalContext = (context) => {
  globalContext = { ...context };
};

export default getGlobalContext;
