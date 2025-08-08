import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) {}

    async getAllProducts(): Promise<Product[]>{
        return await this.prisma.product.findMany();
    }

    //get single product

    async findOne(id : number): Promise<Product> {
        const prod = await this.prisma.product.findUnique({
            where: {id}
        })

        if(!prod){
            throw new NotFoundException("Prod not found");
        }
        
        return prod;
    }
}
