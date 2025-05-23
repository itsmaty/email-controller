import { EmailProvider, IProviderConfig } from "../classes/provider";
import { IEmail } from "../classes/email";

interface IDoubleZeroConfig extends IProviderConfig {
    endpoint: string;
    apikey: string;
}

interface IDoubleZeroReturn
{

}

export class DoubleZeroProvider extends EmailProvider
{

    constructor(config: IDoubleZeroConfig)
    {
        super(config);
    }

    public async SendEmail(email: IEmail): Promise<IDoubleZeroReturnData> // return success or error
    {
        // this.config.apikey
        // TODO implement sending logic
    }
}