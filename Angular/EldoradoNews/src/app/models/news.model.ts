export default interface News {
    status: string
    data: {
        id?: number
        title: string
        news_body: string
        cover?: string
        posted_by: string
        is_actived: boolean
        created_at: Date
        updated_at?: Date
        category: string
        full_path: string
    }
}