const apiUrl = import.meta.env.VITE_TRANZACT_ONLINESTORE_API;

// export const swaggerUrl = apiUrl?.replace("/api", "/swagger/index.html");
export const swaggerUrl = apiUrl?.replace(/\/api$/, "/swagger/index.html");
export const linkedInUrl = "https://www.linkedin.com/in/stefano-gl/";
export const gitHubUrl = "https://github.com/stephgl07";
export const urlProduct = `${apiUrl}/Product`;
export const urlProductDetail = `${apiUrl}/ProductDetail`;
