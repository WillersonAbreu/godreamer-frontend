export const UrlFinder = postBody => {
  const regexRule = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/gm;

  let url = regexRule.exec(postBody);

  if (url !== null) {
    const newPostBody = postBody.replace(url[0], '');

    return [newPostBody, url[0]];
  }
};
