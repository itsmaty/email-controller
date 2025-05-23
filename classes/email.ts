import { EmailProvider } from "./provider";

export interface IAttachment {
    filename: string; 
    content: string; 
    content_type: string; 
}

export interface IProviderOption {
    key: string;
    value: string
}

export interface IEmailHeader {
    header: string,
    value: string
}

export interface IEmail {
    markdown?: string;
    html?: string;
    subject?: string;
    from: string;
    to: string | string[];
    cc?: string;
    replyTo?: string;
    headers?: IEmailHeader;
    provider_options?: IProviderOption[]; 
    attachments?: IAttachment[]; 
}

export class EMail implements IEmail
{
    private readonly provider: EmailProvider;
    public markdown?: string;
    public html?: string;
    public subject?: string;
    public from: string;
    public to: string | string[];
    public cc?: string;
    public replyTo?: string;
    public headers?: IEmailHeader;
    public provider_options?: IProviderOption[]; 
    public attachments?: IAttachment[]; 

    constructor(provider: EmailProvider)
    {
        this.provider = provider;
    }

    public Send(recipeints: string | string[]): void
    {
     
    }
}