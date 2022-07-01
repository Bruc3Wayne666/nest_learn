import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {PostService} from "./post.service";
import {CreatePostDto} from "./dto/create-post.dto";
import {UpdatePostDto} from "./dto/update-post.dto";

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get()
    async getAll(){
        return this.postService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id') id: string){
        return this.postService.getOne(id)
    }

    @Post()
    async createPost(@Body() dto: CreatePostDto){
        return this.postService.createPost(dto)
    }

    @Put(':id')
    async updatePost(@Param('id') id: string, @Body() dto: UpdatePostDto){
        return this.postService.updatePost(dto, id)
    }

    @Delete(':id')
    async deletePost(@Param('id') id: string){
        return this.postService.deletePost(id)
    }
}
