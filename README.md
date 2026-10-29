This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact form setup (EmailJS)

The contact form sends messages through EmailJS and does not open the visitor's email application. To enable it:

1. Create an EmailJS account and add an email service connected to the inbox that should receive messages (`maidulislamzishan@gmail.com`).
2. Create an email template and set its **To Email** to that inbox. Set **Reply-To** to `{{reply_to}}`. Use `{{from_name}}`, `{{reply_to}}`, and `{{message}}` in the subject/body as needed. Do not let visitor-provided template fields choose the recipient.
3. Copy `.env.example` to `.env.local` and fill in the EmailJS **Service ID**, **Template ID**, and **Public Key**:

   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Add the same variables to your hosting provider's environment settings, then redeploy. Restart the local dev server after changing `.env.local`.
5. In EmailJS, restrict the public key to your production domain and configure its available anti-abuse protections. The form also includes a honeypot and input limits; these are basic protections, not a substitute for provider-side rate limits or CAPTCHA.

The EmailJS public key and these `NEXT_PUBLIC_` values are intentionally exposed to the browser; never put an EmailJS private key or other secret in these variables. Until all three values are configured, the form reports that sending is unavailable and directs visitors to the displayed email address. A success message appears only after EmailJS confirms a successful send.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
