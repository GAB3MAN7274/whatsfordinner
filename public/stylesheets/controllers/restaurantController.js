module.exports.view = function(req, res, next) {
    const restaurant=[ {
        id: 1,
        name: 'Pizza Hut',
        image: 'https://dynl.mktgcdn.com/p/d9AXTJEWMZ156q11dLLVRHsmufNu0K-ng4JYb_4WwRI/1900x1427.jpg',
        rating: 2,
        category: 'Italian',
        description: ''
    },
        {
            id: 2,
            name: 'Not Pizza Hut',
            image: 'https://dynl.mktgcdn.com/p/d9AXTJEWMZ156q11dLLVRHsmufNu0K-ng4JYb_4WwRI/1900x1427.jpg',
            rating: 4,
            category: 'Italian',
            description: 'yrtyutjhthrtjhtyhrtujthurtht5rhhhrthrthrthrth'
        }];
        res.render('index', {restaurants});
}