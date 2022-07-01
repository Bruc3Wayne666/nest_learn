import {Body, Delete, Get, Injectable, Param, Post, Put} from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {UpdatePostDto} from "./dto/update-post.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {PostEntity} from "./post.entity";
import {Repository} from "typeorm";

@Injectable()
export class PostService {
    constructor(@InjectRepository(PostEntity) private readonly postRepository: Repository<PostEntity>) {
    }

    async getAll() {
        return this.postRepository.find()
    }

    async getOne(id: string) {
        return this.postRepository.findOne({
            where: {
                id: Number(id)
            }
        })
    }

    async createPost(dto: CreatePostDto) {
        const post = this.postRepository.create(dto)
        return this.postRepository.save(post)
    }

    async updatePost(dto: UpdatePostDto, id: string) {
        return this.postRepository.update({
                id: Number(id)
            },
            {...dto, id: Number(id)}
        )
    }

    async deletePost(id: string) {
        return this.postRepository.delete({
            id: Number(id)
        })
    }
}
