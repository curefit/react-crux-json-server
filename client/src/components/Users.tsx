import * as React from "react"
import { CruxComponentCreator } from "react-crux"

export interface User {
    userId: number
    id: number
    title: string
    body: string
}

interface UsersProps {
    users: User[]
}

const schema = {
    modelName: "users",
    title: "Users",
    creationTitle: "User",
    editModal: true,
    additionalInformation: true,
    createModal: true,
    saveAsNew: true,
    fields: [
        {
            title: "User ID",
            representative: true,
            field: "id",
            display: true,
            editable: false,
            readonly: true
        },
        {
            title: "Name",
            field: "name",
            editable: true,
            display: true
        },
        {
            title: "Email",
            field: "email",
            editable: true,
            display: true
        },
        {
            title: "Address",
            field: "address",
            editable: true,
            display: true,
            type: "nested",
            fields: [
                {
                    title: "Street",
                    field: "street",
                    editable: true,
                    display: true
                },
            ],
        }
    ],
}

export const Users = CruxComponentCreator.create<User, UsersProps>(schema)
