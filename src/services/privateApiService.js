import { tokenValidate } from "../features/methods/tokenValidate";

// PATCH
export const methodPatchPrivate = async (endpoint, id = null, body) => {
  try {
    !id && new Error("No existe id");
    const response = await axios.patch(`${url}/${endpoint}/${id}`, body, {
      headers: tokenValidate(),
    });
    return(response);
  } catch (error) {
    return(error);
  }
};
