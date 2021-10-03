import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
          Providers.Facebook({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
      }),
          Providers.Google({
           clientId:"1023415937354-l0cbfv0gu613nq8k7o2ctq9chsu52ojs.apps.googleusercontent.com",
           clientSecret:"EcbG_wZWunNUjkqZKJ0tZXUV",
    }),
    ],
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60

    }
}

export default (req, res) => NextAuth(req, res, options)
