CMS.registerPreviewStyle('https://unpkg.com/netlify-cms-yoast-seo@~1.0/dist/main.css');

// Pages
//
CMS.registerPreviewTemplate('page', createClass({
    render: function () {
        const entry = this.props.entry
        const title = entry.getIn(['data', 'yoast_title']) || ''

        YOAST.setContent({
            title: title,
            description: entry.getIn(['data', 'description']) || '',
            keyword: entry.getIn(['data', 'yoast_keyword']) || '',
            text: entry.getIn(['data', 'body']) || '',
            titleWidth: title.split('').length * 5 // 5px is an average width of each character ;)
        })

        return h('div', {},
            this.props.widgetFor('body'),
            YOAST.getScoresAsHTML(h)
        );
    }
}));

// Knowledge hub
//
CMS.registerPreviewTemplate('knowledge-hub', createClass({
    render: function () {
        const entry = this.props.entry
        const title = entry.getIn(['data', 'yoast_title']) || ''

        YOAST.setContent({
            title: title,
            description: entry.getIn(['data', 'description']) || '',
            keyword: entry.getIn(['data', 'yoast_keyword']) || '',
            text: entry.getIn(['data', 'body']) || '',
            titleWidth: title.split('').length * 5 // 5px is an average width of each character ;)
        })

        return h('div', {},
            this.props.widgetFor('body'),
            YOAST.getScoresAsHTML(h)
        );
    }
}));

// Projects
//
CMS.registerPreviewTemplate('projects', createClass({
    render: function () {
        const entry = this.props.entry
        const title = entry.getIn(['data', 'yoast_title']) || ''

        YOAST.setContent({
            title: title,
            description: entry.getIn(['data', 'description']) || '',
            keyword: entry.getIn(['data', 'yoast_keyword']) || '',
            text: entry.getIn(['data', 'body']) || '',
            titleWidth: title.split('').length * 5 // 5px is an average width of each character ;)
        })

        return h('div', {},
            this.props.widgetFor('body'),
            YOAST.getScoresAsHTML(h)
        );
    }
}));

// Solutions
//
CMS.registerPreviewTemplate('solutions', createClass({
    render: function () {
        const entry = this.props.entry
        const title = entry.getIn(['data', 'yoast_title']) || ''

        YOAST.setContent({
            title: title,
            description: entry.getIn(['data', 'description']) || '',
            keyword: entry.getIn(['data', 'yoast_keyword']) || '',
            text: entry.getIn(['data', 'body']) || '',
            titleWidth: title.split('').length * 5 // 5px is an average width of each character ;)
        })

        return h('div', {},
            this.props.widgetFor('body'),
            YOAST.getScoresAsHTML(h)
        );
    }
}));

// Team
//
CMS.registerPreviewTemplate('team', createClass({
    render: function () {
        const entry = this.props.entry
        const title = entry.getIn(['data', 'yoast_title']) || ''

        YOAST.setContent({
            title: title,
            description: entry.getIn(['data', 'description']) || '',
            keyword: entry.getIn(['data', 'yoast_keyword']) || '',
            text: entry.getIn(['data', 'body']) || '',
            titleWidth: title.split('').length * 5 // 5px is an average width of each character ;)
        })

        return h('div', {},
            this.props.widgetFor('body'),
            YOAST.getScoresAsHTML(h)
        );
    }
}));