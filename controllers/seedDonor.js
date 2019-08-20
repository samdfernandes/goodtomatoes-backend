app.get('/seeddonor', (req, res) => {
    Donor.create([
        {
            name: 'Donor 1',
            email: 'email@emailaddress.com'
        },
        {
            name: 'Donor 2',
            email: 'email@emailaddress.com'
        },
        {
            name: 'Donor 3',
            email: 'email@emailaddress.com'
        },
        {
            name: 'Donor 4',
            email: 'email@emailaddress.com'
        },


    ], (err, data) => {
        res.redirect('/');
    })
});