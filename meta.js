module.exports = {
    helpers: {
        escape: function (value) {
            return value.replace(/'/g, '&apos;')
        }
    },
    prompts: {
        name: {
            'type': 'string',
            'required': true,
            'message': 'Project name'
        },
        description: {
            'type': 'string',
            'required': false,
            'message': 'Project description',
            'default': 'Lumen CMS project'
        },
        author: {
            'type': 'string',
            'message': 'Author'
        },
        projectId: {
            'type': 'string',
            'message': 'graph.cool Project ID (required in nuxt.confg.js)',
            'required': true
        }
    },
    completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
}
