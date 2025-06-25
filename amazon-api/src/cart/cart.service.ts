import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartService {
   constructor(private prisma: PrismaService) {}

   async addToCart(productId: number, quantity: number = 1 ) {
    const exisatingItem = await this.prisma.cartItem.findFirst({
        where: {productId},
    });

    if(exisatingItem){
        return await this.prisma.cartItem.update({
            where: {id: exisatingItem.id},
            data: {quantity: exisatingItem.quantity + 1 } ,
        });
    }

    return await this.prisma.cartItem.create({
        data:{
            productId,
            quantity: 1,
        },
    });
   }

   async getCart(){
    return await this.prisma.cartItem.findMany({
        include: {
            product: true,
        },
    });
   }

   async removeItem(productId: number) {
    const existingItem =  await this.prisma.cartItem.findFirst({
        where: {productId}
    });

    if(!existingItem) return null;

    if(existingItem.quantity>1){
        return await this.prisma.cartItem.update({
            where: {id: existingItem.id},
            data: {quantity: existingItem.quantity - 1}
        });
    }

    return await this.prisma.cartItem.delete({
        where: { id: existingItem.id}
    })
   }

   async clearCart(){
    return await this.prisma.cartItem.deleteMany();
   }



}
