export default {
    name: 'album',
    type: 'document',
    title: 'Album',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'artist',
            type: 'string',
            title: 'Artist'
        },
        {
            name: 'new_image',
            type: 'image',
            title: 'Album Image'
        },
        {
            title: 'Main Link',
            name: 'apple_link',
            type: 'url'
        },
        {
            title: 'Download Link',
            name: 'link',
            type: 'url'
        },
        {
            title: 'Published date',
            name: 'published_date',
            type: 'datetime',
            readonly: true,
            initialValue: () => Date()
        }
    ]
}