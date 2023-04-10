const project = {
    name: 'project', //name is singular
    title: 'Projects', //titles are plural
    type:'document',
    fields: [
        {
        name: 'name', 
        title: 'Name', 
        type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' }
        },
        {
        name:'image',
        title:'Image',
        type:'image',
        options: { hotspot: true },
        fields: [
                {
                    name:'alt',
                    title: 'Alt',
                    type: 'string',
                }
            ]
    },
    {
        name: 'url',
        title: 'URL',
        type: 'url'
    },
    {
        name:'content',
        title:'Content',
        type:'array',
        of: [{type:'block'}],
    },
    ],
};

export default project;