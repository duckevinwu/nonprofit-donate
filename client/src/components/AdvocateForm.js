import React from 'react';
import { promiseScript } from '../js/AppendScript.js';

export default class AdvocateFormTripetto extends React.Component {

  componentDidMount() {
    let script1 = promiseScript("https://unpkg.com/tripetto-runner-foundation")
    let script2 = promiseScript("https://unpkg.com/tripetto-runner-autoscroll")
    let script3 = promiseScript("https://unpkg.com/tripetto-services")

    Promise.all([script1, script2, script3]).then(() => {
      var tripetto = window.TripettoServices.init({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVmFxVklmdkFyVWRGSHJGRm9FVlU1bkxQWXg2TEFKK0lESXloWFpsd0xyQT0iLCJkZWZpbml0aW9uIjoiN09XbUt5TE9pUVhWVFZsMDJidFRaaWRrMEovN3RvTFN1QWs4SktwbjBMWT0iLCJ0eXBlIjoiY29sbGVjdCJ9.Z77UY38Wc3cjycNSDO10qVpWaFlnly14FeJ5fj8VBDg" });

      window.TripettoAutoscroll.run({
          element: document.body, /* Or supply your own element here */
          // element: document.getElementById("tripetto"),
          definition: tripetto.definition,
          styles: tripetto.styles,
          l10n: tripetto.l10n,
          locale: tripetto.locale,
          translations: tripetto.translations,
          attachments: tripetto.attachments,
          onSubmit: tripetto.onSubmit
      });

      let div = document.createElement("div");
      div.textContent = "hello";
      document.body.prepend(div);

    })
  }

  render() {
    return (
      <div className="w-full h-100vh">
        <div id="tripetto"></div>
      </div>
    )
  }
}
