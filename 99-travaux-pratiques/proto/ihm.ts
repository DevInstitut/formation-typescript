import { srv } from "./services";

import * as request from "request";

console.log(request);

// Envoie de la requête http
request("https://jsonplaceholder.typicode.com/posts", { json: true }, function(
  err,
  res,
  body
) {
  if (err) {
    return console.log("Erreur", err);
  }

  // body contient les données récupérées
  console.log("Ok", body);
});

export const ihm = {
  start: () => {
    srv.find();
    console.log("hello");
  }
};
