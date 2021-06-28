const fetchApi = async (url) => {
  const data = {
    long_url: url,
  };

  const res = await fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  const { link } = await res.json();

  return link;
};

export default fetchApi;
