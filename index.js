const API = '9d1c35db4f1a8bd32f12fd15085ded2aa131e634';
const express = require('express');
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy;
const api = require('./api');
const config = require('./config');
const axios = require('axios');



const app = express();
const port = 3000;

app.get('/getData', async (req, res)=>{
    try {
        const response = await axios.get('https://oauth.pipedrive.com/oauth/authorize?client_id=6e1054f640335df4&redirect_uri=http://92.53.70.19:3000/oauth/callback')
        res.send(response.data)
        console.log(response.params)
    } catch (error) {
        console.error(error);
    }
})

// passport.use(
// 	'pipedrive',
// 	new OAuth2Strategy({
// 			authorizationURL: 'https://oauth.pipedrive.com/oauth/authorize',
// 			tokenURL: 'https://oauth.pipedrive.com/oauth/token',
// 			clientID: '6e1054f640335df4',
// 			clientSecret: '443d1e3f8f4644d873596cd087ed317c4df486a3',
// 			callbackURL: 'http://92.53.70.19:3000/'
// 		}, async(accessToken, refreshToken, profile, done)=>{
//             console.log(accessToken, refreshToken, profile, done)
//         }
// 	)
// );

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(passport.initialize());
// app.use(async (req, res, next) => {
// 	req.user = await User.getById(1);
// 	next();
// });

// app.get('/auth/pipedrive', passport.authenticate('pipedrive'));
// app.get('/auth/pipedrive/callback', passport.authenticate('pipedrive', {
//     session: false,
//     failureRedirect: '/',
//     successRedirect: '/'
// }));
// app.get('/', async (req, res) => {
//     if (req.user.length < 1) {
//         return res.redirect('/auth/pipedrive');
//     }

//     try {
//         const deals = await api.getDeals(req.user[0].access_token);

//         res.render('deals', {
//             name: req.user[0].username,
//             deals: deals.data
//         });
//     } catch (error) {
//         return res.send(error.message);
//     }
// });

// app.get('/deals/:id', async (req, res) => {
//     const randomBoolean = Math.random() >= 0.5;
//     const outcome = randomBoolean === true ? 'won' : 'lost';

//     try {
//         await api.updateDeal(req.params.id, outcome, req.user[0].access_token);

//         res.render('outcome', { outcome });
//     } catch (error) {
//         return res.send(error.message);
//     }
// });

app.listen(port, () => console.log(`🟢 App has started.`));