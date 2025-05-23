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
