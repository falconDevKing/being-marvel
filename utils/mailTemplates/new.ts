const newTemplateName = (buyerName: string, baseUrl: string) => {
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
    <table role="presentation" style="max-width: 765px; width: 100%; margin: auto; font-family: 'Public Sans', sans-serif; color: #171721">
      <tr>
        <td>
          <img
            src="https://airdvertise-public.s3.eu-west-1.amazonaws.com/AIRDVERTISE+Dark.png"
            alt="Logo"
            width="160"
            style="height: auto; display: block; padding: 60px 0 48px 0px"
          />
        </td>
      </tr>
      <tr>
        <td style="background: linear-gradient(180deg, rgba(16, 25, 136, 0.2) 0%, rgba(68, 205, 224, 0.2) 100%); padding: 48px 42px; border-radius: 10px">
          <p style="font-weight: 700; font-size: 24px; line-height: 32px; color: #253858">Deal Completion</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 40px; line-height: 32px; font-size: 16px; color: #253858; font-style: normal; font-weight: 400">
          <p>Hi ${buyerName},</p>
          <p style="padding-top: 8px">Congratulations on completion of your ad lisitng. We hope you had a seamless experience.</p>
          <p style="padding-top: 8px">
            You can maximise other available advertisement spaces by visiting the
            <a href="${baseUrl}/listings" target="_blank" rel="noreferrer noopener" style="color: #44cde0; text-decoration: none">listings page</a> to find your
            next target customers.
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding: 4px 40px">
          <p style="padding: 40px 0px 40px 0px; line-height: 32px; font-size: 16px; color: #253858; font-style: normal; font-weight: 400">
            Best, <br />
            Team Airdvertise
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};

export default newTemplateName;
