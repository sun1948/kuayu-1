ajax = (method, url) => {
  const request = new XMLHttpRequest();
  request.open(method, url);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
    }
  };
  request.send();
};
ajax("GET", "/friends.json");
