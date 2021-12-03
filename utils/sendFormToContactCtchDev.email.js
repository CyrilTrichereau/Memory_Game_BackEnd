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
        @import"https://fonts.googleapis.com/css?family=Source+Sans+Pro";body{width:100%;height:100%}body,h1,h2,h3,h4,h5,h6,p,a{font-family:"Source Sans Pro","Trebuchet MS",sans-serif,"Times New Roman";color:#3c464e}body{width:100%;height:100%;margin:0 auto}.resetPassword{width:92%;max-width:800px;padding:0;overflow:hidden;margin:16px auto;background-color:#fdfeff;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;border:#3c464e 1px solid}.resetPasswordHeader{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;padding:32px 0;margin:0 auto;background-color:#4d7c8a}.resetPasswordHeaderLogo{wwidth:49px;height:50px;padding:0;margin:0 5px 0 auto}.resetPasswordHeaderText{margin:0 auto 0 5px;padding:0;font-size:48px;font-weight:600;color:#fdfeff}.resetPasswordMain{margin:0 auto;width:100%;padding:32px 0 0 0}.resetPasswordMainTitle{color:#4d7c8a;font-size:38px;width:80%;text-align:center;margin:0 auto;padding:0}.resetPasswordMainGif{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin:0 auto;padding:0;max-width:80%;max-height:300px}.resetPasswordMainSubTitle{width:80%;margin:16px auto;padding:0;font-size:24px;color:#938f60;font-weight:400;text-align:center}.resetPasswordMainRedirection{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin:0 auto;padding:0;text-decoration:none}.resetPasswordFooter{width:100%;margin:32px auto 0 auto;padding:32px 0;background-color:#4d7c8a}.resetPasswordFooterInfos{width:80%;margin:0 auto;font-size:18px;color:#fdfeff;text-align:center;font-style:italic;font-weight:100}.validateButton{padding:16px 32px;margin:0 auto;font-family:"Source Sans Pro","Trebuchet MS",sans-serif,"Times New Roman";background-color:#4d7c8a;border:none;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;font-size:22px;color:#fdfeff;cursor:pointer;text-decoration:none}.validateButton:hover{background-color:#3c464e}.w-100{width:100%;padding:16px 0}.wrapper{margin:0 auto}
        
            </style>
        
            <!-- Title and description -->
            <title>Nouvel envoi de formulaire - Ctch.dev</title>
            <meta
              name="Nouvel envoi de formulaire - Ctch.dev"
              content="Nouvel envoi de formulaire - Ctch.dev"
            />
          </head>
          <!--     BODY     -->
        
          <body>
            <div class="resetPassword">
              <div class="resetPasswordHeader">
                <p class="resetPasswordHeaderText">Ctch.dev</p>
              </div>
                <div class="bg-primary resetPasswordMain">
                <div class="w-100">
                  <h1 class="resetPasswordMainTitle">
                  Nouvel envoi de formulaire - Ctch.dev
                  </h1>
                </div>
                <div class="w-100">
                                    <div class="w-100">
                  <p class="resetPasswordMainSubTitle">
                    Formulaire provenant de : ${name}
                  </p>
                  <p class="resetPasswordMainSubTitle">
                    Email : ${email}
                  </p>
                  <p class="resetPasswordMainSubTitle">
                    Société : ${company}
                  </p>
                  <p class="resetPasswordMainSubTitle">
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
