// Helper function to generate a style string
export const getClasses = (classes, customStyles) => {
  return customStyles
    ? customStyles
        .split(" ")
        ?.map((item) => classes[item])
        ?.join(" ")
    : "";
};
