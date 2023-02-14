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
            name: 'albumImage',
            type: 'image',
            title: 'Album Image'
        },
        {
            title: 'Main Link',
            name: 'mainLink',
            type: 'url'
        },
        {
            title: 'Download Link',
            name: 'downloadLink',
            type: 'url'
        },
        {
            title: 'Content',
            name: 'content',
            type: 'text'
        },
        {
            title: 'Published date',
            name: 'publishedDate',
            type: 'datetime',
            readonly: true,
            initialValue: () => Date()
        }
    ]
}