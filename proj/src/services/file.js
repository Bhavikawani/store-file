const axios = require("axios").default;

export const uploadFile = async (form) => {
    return await axios({
      method: "POST",
      url: `/api/v1/upload/`,
      data: form,
      headers: {
        'Content-Type' : 'multipart/form-data'
      },
    });
  };


  export const speak = async () => {
    return await axios({
      method: "GET",
      url: `/api/v1/upload/bot`,
    })}

  export const uploadVideo = async (form) => {
    return await axios({
      method: "POST",
      url: `/api/v1/upload/video`,
      data: form,
      headers: {
        'Content-Type' : 'multipart/form-data'
      },

    });
  };