import { DoubleZeroProvider } from "../providers/double-zero";

const EmailController = new DoubleZeroProvider({
    apikey: 'yourapikey',
    endpoint: 'https://00.yourdomain.com'
})

EmailController.NewEmail()
.From('no-reply@example.com')
.Subject('I am using email-controller')
.HtmlBody('<br>Hello</br>')
.Send('jon.doe@example.com')

