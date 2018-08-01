// module.exports = async (ctx, next) => {
//   try {
//     await next()
//   } catch (err) {
//     console.error(err)
//     ctx.body = undefined
//     ctx.status = ctx.status >= 400 && ctx.status || 400
//     if (err.message) {
//       ctx.body = {
//         errors: [err.message]
//       }
//     }
//   }
// }
