export const urlAPI =
    process.env.NODE_ENV !== "production"
        ? "http://localhost:5000/api"
        : "UrlDeployee";
export const LOCAL_TOKEN_NAME = "my-token";
