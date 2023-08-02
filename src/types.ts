

export interface UserType {
    
    username: string
    email: string
    fullName: string
    level: number
    avatarUrl: string | null

}

export interface CommentType {

    commentId: string
    parentId: string
    commentText: string

    avatarUrl: string
    senderId: string
    senderName: string
    senderUsername: string
    senderLevel: number

    receiverId?: string
    receiverName?: string
    receiverUsername?: string
    receiverLevel?: number
    
    novelId: string
    chapterId?: string | null,
    
    createdAt: Date
    updatedAt: Date

}