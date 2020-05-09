window.jsonp = (url) => {
  return new Promise((resolve, reject) => {
    const random = "frankJSONPCallbackName" + Math.random();
    const script = document.createElement("script");
    window[random] = (data) => {
      resolve(data);
    };
    script.src = `${url}?callback=${random}`;
    script.onload = () => {
      script.remove();
    };
    script.onerror = () => {
      reject();
    };
    document.body.appendChild(script);
  });
};
jsonp("http://qq.com:8888/friends.js").then((data)=>{
    console.log(data)
});
