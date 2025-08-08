import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { get } from 'http';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Get()
    async getAll() {
        return this.productService.getAllProducts();
    }

    //get single product 
    @Get(':id') 
        getOne(@Param('id', ParseIntPipe) id: number){
            return this.productService.findOne(id);
        }
}
