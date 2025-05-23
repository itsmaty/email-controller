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

    public HtmlBody(html: string): EMail
    {
        this.html = html;
        return this;
    }

    public MarkdownBody(markdown: string): EMail {
        this.markdown = markdown;
        return this;
    }

    public Subject(subject: string): EMail
    {
        this.subject = subject;
        return this;
    }

    public From(from: string): EMail
    {
        this.from = from;
        return this;
    }

    public CC(cc: string): EMail {
        this.cc = cc;
        return this;
    }

    public ReplyTo(reply_to: string): EMail
    {
        this.replyTo = reply_to;
        return this;
    }

    public SetHeader(header: string, value: string): EMail
    {
        this.headers.push({ header, value });
        return this;
    }

    public SetProviderOption(option: string, value: string): EMail
    {
        this.providerOptions.push({ key: option, value });
        return this;
    }

    public AddAttachment(filename: string, content: string, content_type: string): EMail
    {
        this.attachments.push({ filename, content, contentType: content_type });
        return this;
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