
app.get('/seedmember', (req, res) => {
    Member.create([
        {
            name: 'Member 1',
            email: 'email@emailaddress.com',
            bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odit nostrum possimus nihil cumque quam iste dolores deserunt asperiores. Eligendi ex laboriosam repellat voluptates dolorem? Vel deserunt sunt molestias id?',
            memberPic: '',
            medicalNotes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odit nostrum possimus nihil cumque quam iste dolores deserunt asperiores. Eligendi ex laboriosam repellat voluptates dolorem? Vel deserunt sunt molestias id?',
            skills: ['painting', 'sweeping', 'yard cleanup'],
            ableToWork: true,
            needs: ['clothes', 'food']
        },
        {
            name: 'Member 2',
            email: 'email@emailaddress.com',
            bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odit nostrum possimus nihil cumque quam iste dolores deserunt asperiores. Eligendi ex laboriosam repellat voluptates dolorem? Vel deserunt sunt molestias id?',
            memberPic: '',
            medicalNotes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odit nostrum possimus nihil cumque quam iste dolores deserunt asperiores. Eligendi ex laboriosam repellat voluptates dolorem? Vel deserunt sunt molestias id?',
            skills: ['painting', 'sweeping', 'yard cleanup'],
            ableToWork: true,
            needs: ['clothes', 'food']
        },
        {
            name: 'Member 3',
            email: 'email@emailaddress.com',
            bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odit nostrum possimus nihil cumque quam iste dolores deserunt asperiores. Eligendi ex laboriosam repellat voluptates dolorem? Vel deserunt sunt molestias id?',
            memberPic: '',
            medicalNotes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odit nostrum possimus nihil cumque quam iste dolores deserunt asperiores. Eligendi ex laboriosam repellat voluptates dolorem? Vel deserunt sunt molestias id?',
            skills: ['painting', 'sweeping', 'yard cleanup'],
            ableToWork: true,
            needs: ['clothes', 'food']
        },
        {
            name: 'Member 4',
            email: 'email@emailaddress.com',
            bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odit nostrum possimus nihil cumque quam iste dolores deserunt asperiores. Eligendi ex laboriosam repellat voluptates dolorem? Vel deserunt sunt molestias id?',
            memberPic: '',
            medicalNotes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odit nostrum possimus nihil cumque quam iste dolores deserunt asperiores. Eligendi ex laboriosam repellat voluptates dolorem? Vel deserunt sunt molestias id?',
            skills: ['painting', 'sweeping', 'yard cleanup'],
            ableToWork: true,
            needs: ['clothes', 'food']
        },

    ], (err, data) => {
        res.redirect('/');
    })
});