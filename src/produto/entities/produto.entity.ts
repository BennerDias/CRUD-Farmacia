import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ nullable: false, type: 'decimal', precision: 10, scale: 2 })
  preco: number;

  @Column()
  estoque: number;

  @Column()
  tarja: string;

  @ManyToOne(() => Categoria, (categoria) => categoria.produto)
  categoria: Categoria;
}
