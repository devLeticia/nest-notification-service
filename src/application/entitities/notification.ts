import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'crypto';

export interface INotification {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null; // pode ser um valor date ou undefined(nunca foi setado, nem mencionado) ou null (atualizar com valor nulo, vazio)
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: INotification;

  constructor(props: Replace<INotification, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date()
    };
  }

  public get id() {
    return this._id;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }
  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }
  public get content(): Content {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }
  public get category(): string {
    return this.props.category;
  }

  public set readAt(readAt: Date) {
    this.props.readAt = readAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
