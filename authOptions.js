import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'
import { getDb } from "./lib/db";
import mongoose from "mongoose";


const hashPassword = async (password) => {
    const hashedPassword = bcrypt.hash(password, 12);
    return hashedPassword;
}

export  const authOptions = {
    session:{
        jwt:true,
      },
      providers:[ 
          CredentialsProvider({
            name:'Credentials',
              async authorize(credentials,req){
                  const {email,password}  = credentials;
                    const username = email;
                  if(!username && !password){
                      throw new Error('Failed to login. Please Provide Valid Username and Password');
                  }

                  
          

                  try{                  
                      const user = await mongoose.connection.collection("auth").findOne({username:username})
                      if(!user){
                        throw new Error("No User Found !!!!")
                      }
                      console.log(user)
                    console.log(user)
                      const userCredintials = {
                          username,
                          password
                        }
                        
                    const isPasswordMatched = await bcrypt.compare(userCredintials.password,user.password );
                    if(!isPasswordMatched){
                        throw new Error('Invalid User Credentials!!!');
                    }
                    return {
                        user:userCredintials.username,
                        isLoggedIn:true
                    }
                    
                  }
                  catch(err) {

                    console.log(err);
                  }
                //   try{
                //        const db = getDb();
                //        console.log(db,'from #############################################')
                //        const hashed = await hashPassword(password)
                //        const userCredintials = {
                //         email,
                //         password:hashed
                    
                //        }
                //        const result = await db.insertOne({userCredintials});
                //        console.log(result)
                    
                //   }
                //   catch(err){
                //       throw new Error(`${err.message} the error`)
                //   }
              }
          })
      ],
      secret:'0fg8p86i885cmdpaONu9sDEoW0tV1j2v',
      

      callbacks: {
        // jwt:async({}) => {
        //     return 'hello'
        // },
        // session: async ({ session, user, token }) => {
        //     console.log(user,'the user')
        //     console.log(session,'the session')
        //     delete session.user.image
        //     delete session.user.name
        //     session.user.isAuthenticate = user.isAuthenticate
        //     if (user) {
        //         session.user = {
        //             email: user.email,
        //         };
        //     }
        //     console.log(session, 'the ssison from org next')
        //     return session;
        // },
        session: async ({ session, user }) => {
            if (user) {

                delete user.image;
                delete user.name;
        

                session.user.isLoggedIn = user.isLoggedIn;
                session.user.username = user.username; 
                console.log(session,'the sessipn')
            }
            return session;
        },
    },
    pages:{
        signIn:'admin/auth',
    }
}