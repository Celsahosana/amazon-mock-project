import { Controller, Get, Post, Body , Delete, Param} from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) {}

    @Post()
    async addToCart(
        @Body() body: { productId: number; quantity:number}
    ) {
        return this.cartService.addToCart(body.productId, body.quantity);
    }

    @Get()
     async getCart() {
        return this.cartService.getCart();
     }

    @Delete(':productId')
        async removeItem(@Param('productId') productId: string ){
            return this.cartService.removeItem(parseInt(productId))
        }

    @Delete()
        async clearCart(){
            return this.cartService.clearCart();
        }
     


}
