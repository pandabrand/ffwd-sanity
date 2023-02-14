import album from "./album";

export default {
    name: 'page',
    type: 'document',
    title: 'Page',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'content',
            type: 'array',
            of: [
                { 
                    type: 'block',
                },
                {
                    name: 'albumReference',
                    type: 'reference',
                    title: 'Album',
                    to: [{ type: 'album' }],
                    options: {
                        disableNew: true,
                    }
                },
                { type: 'image' },
            ]
        }
    ]
}