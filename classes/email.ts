import { EmailProvider } from "./provider";

export interface IAttachment {
    filename: string; 
    content: string; 
    contentType: string; 
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
    headers?: IEmailHeader[];
    providerOptions?: IProviderOption[]; 
    attachments?: IAttachment[]; 
}

export class EMail implements IEmail
{
    protected readonly provider: EmailProvider;
    public markdown?: string;
    public html?: string;
    public subject?: string;
    public from: string;
    public to: string[];
    public cc?: string;
    public replyTo?: string;
    public headers: IEmailHeader[] = [];
    public providerOptions: IProviderOption[] = []; 
    public attachments: IAttachment[] = []; 

    constructor(provider: EmailProvider)
    {
        this.provider = provider;
    }

    public HtmlBody(html: string): void
    {
        this.html = html;
    }

    public MarkdownBody(markdown: string): void
    {
        this.markdown = markdown;
    }

    public Subject(subject: string)
    {
        this,subject = subject;
    }

    public From(from: string): void
    {
        this.from = from;
    }

    public CC(cc: string): void
    {
        this.cc = cc;
    }

    public ReplyTo(reply_to: string): void
    {
        this.replyTo = reply_to;
    }

    public SetHeader(header: string, value: string): void
    {
        this.headers.push({header: header, value: value})
    }

    public SetProviderOption(option: string, value: string): void
    {
        this.providerOptions.push({key: option, value: value})
    }

    public AddAttachment(filename: string, content: string, content_type): void
    {
        this.attachments.push({filename: filename, content: content, contentType: content_type})
    }

    public Send(recipeints: string | string[]): void
    {
        if(Array.isArray(recipeints)) {
            this.to = recipeints;
        } else {
            this.to = [recipeints];
        }

        if (!this.html && !this.markdown) {
            throw new Error('Email must have a body. Either use HtmlBody or MarkdownBody method to set a body.');
        }

        this.provider.SendEmail(this);
    }
}