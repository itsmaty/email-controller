# IN DEVELOPMENT
`email-controller` will be a simple library to integrate with the email provider of your choice and provide you with a nice api to craft emails in your code

### Supported Providers
- [DoubeZero](https://www.double-zero.cloud/)
- [Unsend](https://unsend.dev/)
- [Resend](https://resend.com/)
- [SendGrid](https://sendgrid.com/en-us)
- [Postmark](https://postmarkapp.com/)
- [Twilio](https://www.twilio.com/de-de/sendgrid/email-api)

### Example
```ts
import { DoubleZeroProvider } from "./providers/double-zero";

const EmailController = new DoubleZeroProvider({
    apikey: 'yourapikey',
    endpoint: 'https://00.yourdomain.com'
})

EmailController.NewEmail()
.From('no-reply@example.com')
.Subject('I am using email-controller')
.HtmlBody('<br>Hello</br>')
.Send('jon.doe@example.com')
```

