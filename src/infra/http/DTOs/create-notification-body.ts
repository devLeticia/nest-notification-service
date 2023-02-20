import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  category: string;
}

// DTO: data transfer object - pattern para referenciar objetos que carregam dados,
// mas nao tem comportamento, só carregamento de dados
