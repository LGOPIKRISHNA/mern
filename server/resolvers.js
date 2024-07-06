// // //to preprocess the quries
// // //query->to retirve the data what we want
// // //mutation->to updata the data
// // const {Query}=require('mongoose');
// // // const {search}=require('superagent');
// // const User =require('./model/userSchema');
// // const resolvers={
// //     Query:{
// //         getUser:async(_,{id})=>{
// //             return await User.findById(id);
// //         },
// //         getUser:async()=>{
// //             return await User.find();
// //         },
// //         searchUser:async(_,{name})=>{
// //             return await User.find({name:new RegExp(name,'i')});
// //         },
// //         User:{
// //             email:(parent)=>parent.email||;
// //         }
// //     },
// // };
// // module.exports=resolvers;


// //resolvers.js 
// //to pre process the queries 
// //query -> to retrive the data (Exactly WHat data we want)
// //mutation -> to update the data
// const User = require('./model/userSchema');

// const resolvers = {
//     Query: {
//         // getUser: async (_, { id }) => {
//         //     return await User.findById(id);
//         // },
//         getUsers: async () => {
//             return await User.find();
//         },
//         // searchUsers: async (_, { name }) => {
//         //     return await User.find({ name: new RegExp(name, 'i') });
//         // },
//         // getLimitedUsers:async(_,{limit,offset})=>{
//         //     return await User.find().skip(offset).limit(limit);
//         // }
//     },
//     Mutation: {
//         createUser: async (_,{ input }) => {
//             const newUser = new User(input);
//             return await newUser.save();
//         },
//         changepass:async(_,{id,password})=>{
//             return await User.findByIdAndUpdate(id,{password},{new:true});
//         } ,
//         // updateUser:async (_, { id, input }) => {
//         //     return await User.findByIdAndUpdate(id, input, { new: true });
//         // },
//         // deleteUser:async (_, { id }) => {
//         //     return await User.findByIdAndDelete(id);
//         // }
//     },
//     User: {
//         email: (parent) => parent.email || ' ',
//         name: (parent) => parent.name || ' ',
//         password: (parent) => parent.password || ' '
// }}
// module.exports = resolvers;




const User = require('./model/userSchema');

const resolvers = {
    Query: {
        getUser: async (_, { id }) => {
            return await User.findById(id);
        },
        getUsers: async () => {
            return await User.find();
        },
    },
    Mutation: {
        createUser: async (_, { input }) => {
            try {
                const { name, email, password } = input;
                if (!name || !email || !password) {
                    throw new Error('Enter all the fields');
                }
                const newUser = new User({ name, email, password });
                return await newUser.save();
            } catch (err) {
                throw new Error(err);
            }
        },
        changepass: async (_, { id, password }) => {
            try {
                const user = await User.findByIdAndUpdate(id, { password }, { new: true });
                if (!user) {
                    throw new Error('User not found');
                }
                return user;
            } catch (err) {
                throw new Error(err);
            }
        },
    },
    User: {
        email: (parent) => parent.email || ' ',
        name: (parent) => parent.name || ' ',
        password: (parent) => parent.password || ' ',
    },
};

module.exports = resolvers;