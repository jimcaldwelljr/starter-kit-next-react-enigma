## Welcome to the Minimal Starter Kit for Contento

This is a minimal starter kit that has a page builder template, header and footer navs and a basic collection of composable content blocks. It’s designed to get you started using Contento, and is built with a familiar and popular tech stack ([Next.js](https://nextjs.org) & [Tailwind CSS](https://tailwindcss.com)).


## Getting Started

First, install all the required dependencies:

```bash
npm install
```

Then, rename the `.env.sample` file to `.env`.

In your [Contento Account Settings](https://app.contento.io/account/api-keys) create a new API Key for this site, copy the value given to you in the dialog and then paste it into your `.env` file as the value of the `CONTENTO_API_KEY` key.

Now navigate to the Sites screen, and find your new site. Copy the ID of it from here, and paste it into your `.env` as the value of the `CONTENTO_SITE_ID` key.

Next, load up your new site by clicking on it in the Sites screen, and then navigate to the Content panel. Click into the Main Nav and copy the ID from the right hand side panel. Paste this into your `.env` as the value of the `SITE_MAIN_NAV_ID` key. Do the same for the Footer Nav, and paste it as the value of the `SITE_FOOTER_NAV_ID` key.

At this point, you can run the development server and get coding:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deploy on Vercel

The easiest way to deploy this repo is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Visual Preview

Once you have your site deployed, you can set up [Visual Preview](https://www.contento.io/docs/sdk/next#visual-preview) in Contento to allow editors to see a preview of the page they are editing from within the Contento editor.

This project is pre-configured to take full advantage of this feature, simply go to the [Site Settings > Preview](https://app.contento.io/settings/preview) page, switch it on and fill out the domain name. Then copy the value of the auto-generated secret and add it into your `.env` as the value of the `CONTENTO_PREVIEW_SECRET` key.

Note that the preview tool won’t work with your local version of the site, it must be accessible on the public internet.


## Learn More

To learn more about the tools we’ve used in this repo, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - the React framework we use to produce a static site.
- [Tailwind CSS Documentation](https://tailwindcss.com) - the CSS framework we use.
- [Vercel](https://vercel.com) - a simple way to deploy a Next.js site.
