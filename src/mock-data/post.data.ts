import Mock from 'mockjs';
/**
 * Mock首页10条博客数据
 */
Mock.mock('/postData/getPost', {
    'data|10': [
        {
            'id': `@string('lower',10)`,
            'title': '@cparagraph(1)',
            'summary': '@cparagraph(8)',
            'date': '@Date',
            'views': '@natural(1,10000)',
            'reply': '@natural(0,1000)'
        }
    ]
});

/**
 * Mock博客详情页面的博客数据
 */
Mock.mock('/postData/getPostDetail', {
    'data': {
        'id': `@string('lower',10)`,
        'title': '@cparagraph(1)',
        'content': '@cparagraph(30)',
        'date': '@Date',
        'views': '@natural(1,500)',
        'reply': '@natural(1,500)'
    }
});

/**
 * Mock 最近热门数据
 */
Mock.mock('/postData/getHotPost', {
    'data|10': [
        {
            'id': `@string('lower',10)`,
            'title': '@cparagraph(1)',
            'date': '@Date'
        }
    ]
});


