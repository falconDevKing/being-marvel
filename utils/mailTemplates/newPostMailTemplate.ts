const NewPostMailTemplate = (title: string, link: string) => {
  return `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <table role="presentation" style="max-width: 765px; width: 100%; margin: auto; font-family: Public Sans, sans-serif; color: #171721">
      <tr>
        <td>
          <img
            src="https://being-marvel-public-assets.s3.eu-west-1.amazonaws.com/BeingMarvelLogo.png"
            alt="Logo"
            width="160"
            style="height: auto; display: block; padding: 60px 0 48px 0px"
          />
        </td>
      </tr>
      <tr>
        <td style="background: linear-gradient(180deg, rgba(16, 25, 136, 0.2) 0%, rgba(68, 205, 224, 0.2) 100%); padding: 48px 42px; border-radius: 10px">
          <p style="font-weight: 700; font-size: 24px; line-height: 32px; color: #253858">New Post: Being Away</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 40px; line-height: 32px; font-size: 16px; color: #253858; font-style: normal; font-weight: 400">
          <p>Dear Tribe Member,</p>

          <p>It&apos;s been a some amazing few days since I last wrote you. But not to worry…</p>

          <p style="padding-top: 8px">
            This mail is a notify you that a new post
            <a
              href="${link}"
              target="_blank"
              rel="noreferrer noopener"
              style="color: #44cde0; text-decoration: none; font-weight: 700; font-style: italic"
              >${title}</a
            >
            just went up on the blog.
          </p>        

          <p>Make sure to read through, like, comment and share. I always look forward to and get excited hearing back from you.</p>

          <p style="padding-top: 8px">See you in the new post 😉.</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 4px 40px">
          <p style="padding: 40px 0px 40px 0px; line-height: 32px; font-size: 16px; color: #253858; font-style: normal; font-weight: 400">
            With Love, <br />
            Marvel
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};

export default NewPostMailTemplate;
