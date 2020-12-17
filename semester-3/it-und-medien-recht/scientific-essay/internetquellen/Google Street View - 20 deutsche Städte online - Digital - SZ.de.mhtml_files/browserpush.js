var push = new ethinkingPush(window._browserPush_.senderId, 'sz', '/service-worker.js?v=6')
push.init({
  appId: window._browserPush_.appId,
  user: window._browserPush_.user,
  password: window._browserPush_.password,
})
push.subscribe([102, 114])
