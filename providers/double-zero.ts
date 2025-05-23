import { EmailProvider, IProviderConfig } from "../classes/provider";
import { IEmail } from "../classes/email";

interface IDoubleZeroConfig extends IProviderConfig {
  endpoint: string;
  apikey: string;
}

class DoubleZeroProvider extends EmailProvider
{

    constructor(config: IDoubleZeroConfig)
    {
        super(config)
    }

    SendEmail(email: IEmail): void
    {
        this.config.apikey
    }
}