import { IEmail, EMail } from "./email";

export interface IProviderConfig {
  [key: string]: unknown;
}

export abstract class EmailProvider
{
    protected config: IProviderConfig;
    abstract SendEmail(email: IEmail): void;

    constructor(config: IProviderConfig)
    {
        this.config = config;
    }

    NewEmail(): EMail
    {
        return new EMail(this)
    }
}

