import * as React from "react"
import { CruxComponentCreator } from "react-crux"

export interface Comment {
    postId: number,
    name: string
    email: string,
    userId: number
    id: number
    body: string
}

interface CommentsProps {
    comments: Comment[]
}

const schema = {
    modelName: "posts",
    title: "Comments",
    creationTitle: "Comment",
    editModal: true,
    additionalInformation: true,
    createModal: true,
    saveAsNew: true,
    fields: [
        {
            title: "Comment ID",
            representative: true,
            field: "id",
            display: true,
            editable: false,
            readonly: true
        },
        {
            title: "Comment Title",
            field: "name",
            editable: true,
            display: true
        },
        {
            title: "Comment Body",
            field: "body",
            editable: true,
            display: true
        },
        {
            title: "Post Id",
            field: "postId",
            editable: true,
            display: true,
            type: "select",
            foreign: {
                modelName: "posts",
                key: "id",
                title: "id"
            }
        },
        {
            title: "Email Id",
            field: "email",
            editable: true,
            display: true,
            type: "select",
            foreign: {
                modelName: "users",
                key: "email",
                title: "email"
            }
        },
    ],
}

export const Comments = CruxComponentCreator.create<Comment, CommentsProps>(schema)
