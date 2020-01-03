import * as React from "react"
import { CruxComponentCreator } from "react-crux"

export interface Post {
    userId: number
    id: number
    title: string
    body: string
}

interface PostsProps {
    posts: Post[]
}

const schema = {
    modelName: "posts",
    title: "Posts",
    creationTitle: "Post",
    editModal: true,
    additionalInformation: true,
    createModal: true,
    saveAsNew: true,
    fields: [
        {
            title: "Post ID",
            representative: true,
            field: "id",
            display: true,
            editable: false,
            readonly: true
        },
        {
            title: "Post Title",
            field: "title",
            editable: true,
            display: true
        },
        {
            title: "Post Body",
            field: "body",
            editable: true,
            display: true
        },
        {
            title: "User Id",
            field: "userId",
            editable: true,
            display: true,
            type: "select",
            foreign: {
                modelName: "users",
                key: "id",
                title: "name"
            }
        },
    ],
}

export const Posts = CruxComponentCreator.create<Post, PostsProps>(schema)
