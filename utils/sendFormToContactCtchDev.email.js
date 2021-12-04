// Exported constant
module.exports = {
  email: ({ name: name, email: email, company: company, text: text }) => {
    return {
      to: "contact@ctch.dev",
      from: "contact@ctch.dev",
      subject: "Nouvel envoi de formulaire - Ctch.dev",
      text:
        "Nouvel envoi de formulaire" +
        " " +
        name +
        " " +
        email +
        " " +
        company +
        " " +
        text,
      html: /* html */ `<!DOCTYPE html>
      <html lang="fr">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
          <style>
            @import "https://fonts.googleapis.com/css?family=Source+Sans+Pro";
            body {
              width: 100%;
              height: 100%;
            }
            body,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p,
            a {
              font-family: "Source Sans Pro", "Trebuchet MS", sans-serif,
                "Times New Roman";
              color: #3c464e;
            }
            body {
              width: 100%;
              height: 100%;
              margin: 0 auto;
            }
            .newForm {
              width: 92%;
              max-width: 800px;
              padding: 0;
              overflow: hidden;
              margin: 16px auto;
              background-color: #fdfeff;
              -webkit-border-radius: 5px;
              -moz-border-radius: 5px;
              border-radius: 5px;
            }
            .w-100 {
              width: 100%;
              padding: 16px 0;
            }
          </style>
      
          <!-- Title and description -->
          <title>Nouveau formulaire en provenance de ctch.dev</title>
          <meta
            name="Nouveau formulaire en provenance de ctch.dev"
            content="Nouveau formulaire en provenance de ctch.dev"
          />
        </head>
        <!--     BODY     -->
      
        <body>
          <div class="newForm">
            <div class="w-100">
              <h1 class="newFormHeader">CTch.dev</h1>
            </div>
      
            <div class="newFormMain">
              <div class="w-100">
                <h2>Nouveau formulaire envoyé du site CTch.dev</h2>
              </div>
              <div class="w-100">
                <h3>Nom :</h3>
                <p>${name}</p>
              </div>
              <div class="w-100">
                <h3>email :</h3>
                <p>${email}</p>
              </div>
              <div class="w-100">
                <h3>Société :</h3>
                <p>${company}</p>
              </div>
              <div class="w-100">
                <h3>Texte :</h3>
                <p>
                ${text}
                </p>
              </div>
            </div>
          </div>
        </body>
      </html>
      
        `,
    };
  },
};
